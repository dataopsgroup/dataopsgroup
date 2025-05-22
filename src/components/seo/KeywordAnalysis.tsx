
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  currentRank: number | null;
  intent: string;
  relevance: 'high' | 'medium' | 'low';
}

// Mock data for demonstration purposes
const mockKeywords: KeywordData[] = [
  { keyword: "hubspot consultant", volume: 1200, difficulty: 68, currentRank: 12, intent: "commercial", relevance: "high" },
  { keyword: "hubspot implementation", volume: 880, difficulty: 65, currentRank: 18, intent: "commercial", relevance: "high" },
  { keyword: "dataops services", volume: 590, difficulty: 55, currentRank: 8, intent: "commercial", relevance: "high" },
  { keyword: "marketing operations consultant", volume: 720, difficulty: 62, currentRank: 15, intent: "commercial", relevance: "high" },
  { keyword: "hubspot data quality", volume: 480, difficulty: 45, currentRank: 7, intent: "informational", relevance: "medium" },
  { keyword: "marketing dashboard best practices", volume: 390, difficulty: 40, currentRank: null, intent: "informational", relevance: "medium" },
  { keyword: "hubspot crm cleanup", volume: 320, difficulty: 35, currentRank: 22, intent: "commercial", relevance: "high" },
  { keyword: "marketing data management", volume: 510, difficulty: 58, currentRank: 11, intent: "informational", relevance: "high" },
  { keyword: "sales and marketing alignment", volume: 640, difficulty: 65, currentRank: null, intent: "informational", relevance: "medium" },
  { keyword: "hubspot implementation cost", volume: 380, difficulty: 52, currentRank: 19, intent: "transactional", relevance: "high" },
  { keyword: "revops consultant", volume: 290, difficulty: 48, currentRank: 9, intent: "commercial", relevance: "high" },
  { keyword: "marketing attribution models", volume: 430, difficulty: 62, currentRank: 14, intent: "informational", relevance: "medium" },
];

const mockCompetitors = [
  { name: "HubSpot Partner Agency A", keywordsRanking: 524, avgPosition: 4.2, domain: "partnera.com" },
  { name: "Marketing Ops Consultants", keywordsRanking: 412, avgPosition: 5.1, domain: "marketingopsconsult.com" },
  { name: "DataRevOps Consulting", keywordsRanking: 386, avgPosition: 6.3, domain: "datarevops.com" },
  { name: "HubSpot Solutions Inc", keywordsRanking: 357, avgPosition: 7.4, domain: "hubspotsolutions.com" },
  { name: "MarTech Implementers", keywordsRanking: 315, avgPosition: 8.2, domain: "martechimplementers.com" },
];

const mockOpportunities = [
  { keyword: "lead scoring best practices", volume: 310, difficulty: 35, gap: "No content" },
  { keyword: "hubspot workflow templates", volume: 520, difficulty: 42, gap: "Thin content" },
  { keyword: "marketing operations metrics", volume: 280, difficulty: 39, gap: "No content" },
  { keyword: "hubspot data integration", volume: 340, difficulty: 45, gap: "Outdated content" },
  { keyword: "sales pipeline optimization", volume: 420, difficulty: 51, gap: "No content" },
];

const KeywordAnalysis: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keywords, setKeywords] = useState<KeywordData[]>(mockKeywords);
  
  // Filter keywords based on search term
  const filteredKeywords = keywords.filter(
    keyword => keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Helper function to render difficulty badge
  const renderDifficultyBadge = (difficulty: number) => {
    if (difficulty < 40) return <Badge className="bg-green-500">Easy</Badge>;
    if (difficulty < 60) return <Badge className="bg-amber-500">Moderate</Badge>;
    return <Badge className="bg-red-500">Hard</Badge>;
  };
  
  // Helper function to render relevance badge
  const renderRelevanceBadge = (relevance: 'high' | 'medium' | 'low') => {
    switch (relevance) {
      case 'high': return <Badge className="bg-green-500">High</Badge>;
      case 'medium': return <Badge className="bg-amber-500">Medium</Badge>;
      case 'low': return <Badge className="bg-red-500">Low</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Keyword Research & Analysis</CardTitle>
          <CardDescription>
            Track keyword rankings and identify opportunities for content optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <Input
              placeholder="Search keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Button>Add Keywords</Button>
            <Button variant="outline">Export Data</Button>
          </div>

          <Tabs defaultValue="tracked">
            <TabsList>
              <TabsTrigger value="tracked">Tracked Keywords</TabsTrigger>
              <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
              <TabsTrigger value="opportunities">Content Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="tracked" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Keyword</th>
                      <th className="text-right py-3 px-4">Search Volume</th>
                      <th className="text-center py-3 px-4">Difficulty</th>
                      <th className="text-center py-3 px-4">Current Rank</th>
                      <th className="text-center py-3 px-4">Intent</th>
                      <th className="text-center py-3 px-4">Relevance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredKeywords.map((kw, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{kw.keyword}</td>
                        <td className="text-right py-3 px-4">{kw.volume.toLocaleString()}</td>
                        <td className="text-center py-3 px-4">
                          {renderDifficultyBadge(kw.difficulty)}
                          <span className="ml-2">{kw.difficulty}</span>
                        </td>
                        <td className="text-center py-3 px-4">
                          {kw.currentRank ? kw.currentRank : 'Not ranked'}
                        </td>
                        <td className="text-center py-3 px-4">
                          <Badge variant="outline" className="capitalize">
                            {kw.intent}
                          </Badge>
                        </td>
                        <td className="text-center py-3 px-4">
                          {renderRelevanceBadge(kw.relevance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="competitors" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Competitor</th>
                      <th className="text-right py-3 px-4">Keywords Ranking</th>
                      <th className="text-right py-3 px-4">Avg. Position</th>
                      <th className="text-left py-3 px-4">Domain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCompetitors.map((competitor, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{competitor.name}</td>
                        <td className="text-right py-3 px-4">{competitor.keywordsRanking}</td>
                        <td className="text-right py-3 px-4">{competitor.avgPosition}</td>
                        <td className="py-3 px-4">{competitor.domain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Keyword Opportunity</th>
                      <th className="text-right py-3 px-4">Search Volume</th>
                      <th className="text-right py-3 px-4">Difficulty</th>
                      <th className="text-left py-3 px-4">Content Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOpportunities.map((opportunity, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{opportunity.keyword}</td>
                        <td className="text-right py-3 px-4">{opportunity.volume}</td>
                        <td className="text-right py-3 px-4">
                          {renderDifficultyBadge(opportunity.difficulty)}
                          <span className="ml-2">{opportunity.difficulty}</span>
                        </td>
                        <td className="py-3 px-4">{opportunity.gap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            Last updated: May 22, 2025. Rankings and volumes are estimates.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default KeywordAnalysis;
