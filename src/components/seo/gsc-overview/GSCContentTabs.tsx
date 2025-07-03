
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// GSCPerformanceChart removed for performance
import GSCTopPages from './GSCTopPages';
import GSCTopQueries from './GSCTopQueries';

interface GSCContentTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  data: any;
}

const GSCContentTabs: React.FC<GSCContentTabsProps> = ({ activeTab, setActiveTab, data }) => {
  return (
    <Tabs defaultValue="performance" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="mb-4 w-full sm:w-auto">
        <TabsTrigger value="performance">Performance Over Time</TabsTrigger>
        <TabsTrigger value="pages">Top Pages</TabsTrigger>
        <TabsTrigger value="queries">Top Queries</TabsTrigger>
      </TabsList>
      
      <TabsContent value="performance" className="mt-0">
        <div className="p-4 text-center text-gray-500">
          Performance chart temporarily unavailable
        </div>
      </TabsContent>
      
      <TabsContent value="pages" className="mt-0">
        <GSCTopPages pages={data?.topPages || []} />
      </TabsContent>
      
      <TabsContent value="queries" className="mt-0">
        <GSCTopQueries queries={data?.topQueries || []} />
      </TabsContent>
    </Tabs>
  );
};

export default GSCContentTabs;
