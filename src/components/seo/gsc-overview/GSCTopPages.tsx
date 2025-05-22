
import React from 'react';

interface GSCPage {
  name: string;
  page?: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GSCTopPagesProps {
  pages: GSCPage[];
}

const GSCTopPages: React.FC<GSCTopPagesProps> = ({ pages }) => {
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
          {pages.length > 0 ? (
            pages.map((page, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4 text-left font-medium max-w-[200px] truncate">
                  {page.name || page.page}
                </td>
                <td className="py-3 px-4 text-right">{page.clicks}</td>
                <td className="py-3 px-4 text-right">{page.impressions}</td>
                <td className="py-3 px-4 text-right">{page.ctr}%</td>
                <td className="py-3 px-4 text-right">{page.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500">
                No page data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GSCTopPages;
