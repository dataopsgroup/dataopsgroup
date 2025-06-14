
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactCard = React.memo(({ children }: { children: React.ReactNode }) => (
  <Card>
    <CardContent className="pt-6">
      {children}
    </CardContent>
  </Card>
));

ContactCard.displayName = 'ContactCard';

export default ContactCard;
