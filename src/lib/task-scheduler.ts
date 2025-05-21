/**
 * Task scheduler utility for breaking up long tasks to improve
 * First Input Delay (FID) and Interaction to Next Paint (INP)
 */

export type Task = () => void;
export type TaskWithPriority = { task: Task; priority: 'high' | 'medium' | 'low' };

// Queue for different priority tasks
const taskQueues: Record<string, Task[]> = {
  high: [],
  medium: [],
  low: []
};

let isProcessing = false;
const TASK_TIME_LIMIT = 50; // Maximum time a task should take (ms)

// Execute task and measure execution time
const executeTask = (task: Task): number => {
  const start = performance.now();
  try {
    task();
  } catch (error) {
    console.error('Error executing task:', error);
  }
  return performance.now() - start;
};

// Break up long-running tasks to avoid blocking the main thread
const breakUpTasks = (tasks: Task[], timeLimit = TASK_TIME_LIMIT): Promise<void> => {
  return new Promise((resolve) => {
    let i = 0;
    
    const processChunk = (deadline?: IdleDeadline) => {
      // Process tasks until we run out of time or tasks
      while ((deadline === undefined || deadline.timeRemaining() > 0) && i < tasks.length) {
        const executionTime = executeTask(tasks[i]);
        i++;
        
        // If task took too long, yield to allow UI updates
        if (executionTime > timeLimit) {
          console.warn(`Task took ${executionTime.toFixed(2)}ms, which exceeds the ${timeLimit}ms limit`);
          break;
        }
      }
      
      // If we have more tasks, schedule next chunk
      if (i < tasks.length) {
        scheduleNext(processChunk);
      } else {
        resolve();
      }
    };
    
    scheduleNext(processChunk);
  });
};

// Schedule next execution with appropriate scheduling method
const scheduleNext = (callback: (deadline?: IdleDeadline) => void) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(() => callback(), 1);
  }
};

// Process all task queues in priority order
const processQueues = async () => {
  if (isProcessing) return;
  
  isProcessing = true;
  
  // Process high priority tasks first (don't yield)
  if (taskQueues.high.length > 0) {
    const highPriorityTasks = [...taskQueues.high];
    taskQueues.high = [];
    for (const task of highPriorityTasks) {
      executeTask(task);
    }
  }
  
  // Process medium and low priority tasks with yielding
  await breakUpTasks([...taskQueues.medium]);
  taskQueues.medium = [];
  
  await breakUpTasks([...taskQueues.low]);
  taskQueues.low = [];
  
  isProcessing = false;
};

/**
 * Schedule a task to run with a specific priority
 * 
 * @param task The function to execute
 * @param priority Priority level ('high', 'medium', 'low')
 */
export const scheduleTask = (task: Task, priority: 'high' | 'medium' | 'low' = 'medium'): void => {
  taskQueues[priority].push(task);
  
  if (!isProcessing) {
    if (priority === 'high') {
      // High priority tasks should start immediately
      processQueues();
    } else {
      // Other priorities can wait for idle time
      scheduleNext(() => processQueues());
    }
  }
};

/**
 * Run a task when the browser is idle
 * 
 * @param task The function to execute
 */
export const runWhenIdle = (task: Task): void => {
  scheduleTask(task, 'low');
};

/**
 * Schedule multiple tasks with different priorities
 * 
 * @param tasks Array of tasks with their priorities
 */
export const scheduleTasks = (tasks: TaskWithPriority[]): void => {
  tasks.forEach(({ task, priority }) => {
    scheduleTask(task, priority);
  });
};

/**
 * Debounce a function and schedule it with the specified priority
 * 
 * @param fn Function to debounce
 * @param wait Wait time in milliseconds
 * @param priority Priority level
 */
export const debounceAndSchedule = <T extends (...args: any[]) => void>(
  fn: T, 
  wait = 100,
  priority: 'high' | 'medium' | 'low' = 'medium'
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      scheduleTask(() => fn(...args), priority);
    }, wait);
  };
};
