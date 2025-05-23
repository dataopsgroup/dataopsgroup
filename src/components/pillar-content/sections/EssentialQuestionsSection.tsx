
import React from 'react';

const EssentialQuestionsSection: React.FC = () => {
  return (
    <section id="essential-questions" className="p-4" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-4">Essential Questions for Evaluating HubSpot Experts</h2>
      
      <p className="mb-4">The right questions during your evaluation process will reveal whether a candidate truly understands both the technical and business aspects of HubSpot implementation. These questions are designed to go beyond surface-level qualifications and uncover genuine expertise.</p>
      
      <p className="mb-4"><strong>Integration and Technical Expertise Questions</strong> should focus on specific experience rather than general capabilities. Start with "What's your experience with [specific integration] that we need, and can you show examples of similar implementations?" This question reveals whether they've actually done the work you need or are just confident they can figure it out.</p>
      
      <p className="mb-4">Ask "How do you approach complex data migration, and what's your process for ensuring data integrity?" Their answer should include systematic approaches, testing procedures, and risk mitigation strategies. Vague responses about "being careful" or "following best practices" aren't sufficient.</p>
      
      <p className="mb-4">For automation work, ask "What's your experience with Zapier automation, and what's the most complex workflow you've built?" Pay attention to whether they can explain business logic, error handling, and ongoing maintenance considerations, not just the technical setup.</p>
      
      <p className="mb-4">"How do you handle API rate limits and integration performance optimization?" This question separates experts who've dealt with real-world scaling challenges from those who've only worked on small implementations.</p>
      
      <p className="mb-4"><strong>Business Acumen and Strategic Thinking Questions</strong> reveal whether they understand that technology serves business objectives. Ask "How do you align HubSpot implementation with broader business objectives and ROI requirements?" Good answers should include specific examples of measuring business impact, not just technical functionality.</p>
      
      <p className="mb-4">"What questions do you ask to understand a client's business before recommending a technical approach?" This reveals their consultative approach and whether they think strategically about implementations rather than just executing predefined processes.</p>
      
      <p className="mb-4">"How do you measure the success of your implementations, and what results have your clients typically seen?" Look for specific metrics and realistic expectations rather than vague promises about "improved efficiency."</p>
      
      <p className="mb-4"><strong>Project Management and Process Questions</strong> help you understand how they'll actually manage your project. "Walk me through your typical implementation process from start to finish" should yield a structured approach with clear milestones, not just "we figure it out as we go."</p>
      
      <p className="mb-4">"How do you handle scope changes and unexpected challenges during implementation?" reveals their flexibility and problem-solving approach. Good answers include examples of how they've managed similar situations.</p>
      
      <p className="mb-4">"What's your approach to knowledge transfer and training our internal team?" This question is crucial because your long-term success depends on your team's ability to maintain and optimize the system after implementation.</p>
      
      <p className="mb-4"><strong>Experience and Qualification Verification Questions</strong> help you understand who's actually doing the work. "Are all team members who will work on our project direct employees, or do you use subcontractors?" gets to the heart of potential delivery model issues.</p>
      
      <p className="mb-4">"Will any work on our project be performed offshore or by third parties?" reveals hidden aspects of their delivery model that could affect communication and quality.</p>
      
      <p className="mb-4">"Who specifically will be doing the hands-on integration work, and what's their experience level?" ensures you're not getting surprised by junior team members handling complex technical work.</p>
      
      <p className="mb-4"><strong>Pricing and Value Questions</strong> help you understand their approach to pricing and value delivery. "How do you price integration work, and what factors influence your rates?" should reveal transparent methodology rather than arbitrary pricing.</p>
      
      <p className="mb-4">"What ongoing support do you provide after implementation, and how is that priced?" shows whether they think beyond the initial project to your long-term success.</p>
      
      <p className="mb-4">"How do you ensure we get ROI from our investment, and how quickly should we expect to see results?" reveals whether they have realistic expectations and a plan for measuring success.</p>
      
      <p className="mb-4">The goal isn't to stump candidates with difficult questions, but to understand their depth of experience, thought process, and approach to solving business problems with HubSpot technology.</p>
    </section>
  );
};

export default EssentialQuestionsSection;
