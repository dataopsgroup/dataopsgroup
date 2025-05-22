
import React from 'react';
import { topPages } from './mockData';

const GSCTopPages: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left font-medium">Page</th>
            <th className="py-3 px-4 text-right font-medium">Clicks</th>
            <th className="py-3 px-4 text-right font-medium">Impressions</th>
            <th className="py-3 px-4 text-right font-medium">CTR</th>
            <th className="py-3 px-4 text-right font-medium">Position</th>
          </tr>
        </thead>
        <tbody>
          {topPages.map((page, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4 text-left font-medium max-w-[200px] truncate">{page.page}</td>
              <td className="py-3 px-4 text-right">{page.clicks}</td>
              <td className="py-3 px-4 text-right">{page.impressions}</td>
              <td className="py-3 px-4 text-right">{page.ctr}%</td>
              <td className="py-3 px-4 text-right">{page.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GSCTopPages;
