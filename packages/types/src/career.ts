export type CareerCategory = "TECHNOLOGY" | "BUSINESS" | "FINANCE" | "PROFESSIONAL" | "CREATIVE" | "ENTREPRENEURSHIP";

export interface CareerSummary {
  id: string;
  name: string;
  slug: string;
  category: CareerCategory;
  shortDescription: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  type: "LEARN" | "PRACTICE" | "PROJECT" | "ASSESSMENT" | "PORTFOLIO" | "INTERVIEW" | "APPLICATION" | "MILESTONE";
  order: number;
  estimatedMinutes: number;
  prerequisites: string[];
  completionCriteria: string;
}
