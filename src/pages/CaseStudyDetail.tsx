
import React from 'react';
import { useParams } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CaseStudyDetailContent from '@/components/case-study/CaseStudyDetailContent';
import CaseStudyNotFound from '@/components/case-study/CaseStudyNotFound';
import { useCaseStudyData } from '@/hooks/useCaseStudyData';
import CaseStudyDetailSEO from '@/components/case-study/CaseStudyDetailSEO';

const CaseStudyDetailPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  
  console.log('CaseStudyDetailPage component rendering');
  console.log('Case study ID from params:', caseStudyId);
  
  const caseData = useCaseStudyData(caseStudyId || '');
  
  console.log('Case study data found:', !!caseData);
  console.log('Case study title:', caseData?.title);

  if (!caseStudyId) {
    console.error('No case study ID provided in URL params');
    return <CaseStudyNotFound />;
  }

  if (!caseData) {
    console.error('Case study not found for ID:', caseStudyId);
    return <CaseStudyNotFound caseStudyId={caseStudyId} />;
  }

  return (
    <SemanticLayout>
      <CaseStudyDetailSEO caseData={caseData} caseStudyId={caseStudyId} />
      <CaseStudyDetailContent caseData={caseData} />
    </SemanticLayout>
  );
};

export default CaseStudyDetailPage;
