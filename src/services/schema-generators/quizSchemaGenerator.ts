
export const generateQuizSchema = (pageData: any): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": pageData.title || "Business Assessment",
    "description": pageData.description || "Assess your business operations",
    "about": pageData.topic || "Business Operations",
    "educationalAlignment": "Professional Development",
    "timeRequired": pageData.duration || "PT10M",
    "provider": {
      "@type": "Organization",
      "@id": "https://dataopsgroup.com/#organization"
    },
    "hasPart": pageData.questions?.map((q: any, index: number) => ({
      "@type": "Question",
      "@id": `#question-${index + 1}`,
      "name": q.text,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.options?.join(" | ") || "Multiple choice options available"
      }
    })) || []
  }, null, 2);
};
