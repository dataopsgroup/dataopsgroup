
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

function Skeleton({
  className,
  width,
  height,
  circle = false,
  ...props
}: SkeletonProps) {
  const styles: React.CSSProperties = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    borderRadius: circle ? '50%' : undefined
  }
  
  return (
    <div
      className={cn(
        "animate-pulse bg-muted", 
        circle ? "rounded-full" : "rounded-md", 
        className
      )}
      style={styles}
      role="status"
      aria-label="Loading..."
      {...props}
    />
  )
}

// Specialized variants for common use cases
function SkeletonText({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton 
      className={cn("h-4 w-full max-w-[300px]", className)} 
      {...props} 
    />
  )
}

function SkeletonImage({ 
  className, 
  aspectRatio = "16/9",
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { aspectRatio?: string }) {
  return (
    <div style={{ aspectRatio }} className={cn("overflow-hidden", className)}>
      <Skeleton className="h-full w-full" {...props} />
    </div>
  )
}

function SkeletonButton({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Skeleton 
      className={cn("h-10 w-20 min-w-[44px] min-h-[44px]", className)} 
      {...props} 
    />
  )
}

export { Skeleton, SkeletonText, SkeletonImage, SkeletonButton }
