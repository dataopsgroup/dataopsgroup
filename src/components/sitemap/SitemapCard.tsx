
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SitemapCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

const SitemapCard: React.FC<SitemapCardProps> = ({ title, icon: Icon, children }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
          <Icon className="h-6 w-6 text-dataops-600" />
        </div>
        <CardTitle className="text-xl font-semibold text-center mobile-text">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {children}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SitemapCard;
