
import React from 'react';

interface GSCQuery {
  name: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GSCTopQueriesProps {
  queries: GSCQuery[];
}

const GSCTopQueries: React.FC<GSCTopQueriesProps> = ({ queries }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left font-medium">Query</th>
            <th className="py-3 px-4 text-right font-medium">Clicks</th>
            <th className="py-3 px-4 text-right font-medium">Impressions</th>
            <th className="py-3 px-4 text-right font-medium">CTR</th>
            <th className="py-3 px-4 text-right font-medium">Position</th>
          </tr>
        </thead>
        <tbody>
          {queries.length > 0 ? (
            queries.map((query, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4 text-left font-medium">{query.name || query.query}</td>
                <td className="py-3 px-4 text-right">{query.clicks}</td>
                <td className="py-3 px-4 text-right">{query.impressions}</td>
                <td className="py-3 px-4 text-right">{query.ctr}%</td>
                <td className="py-3 px-4 text-right">{query.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500">
                No query data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GSCTopQueries;
