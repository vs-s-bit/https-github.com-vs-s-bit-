import { Router } from "express";
import { careers } from "../data/careers.js";

const router = Router();

type DiscoveryInput = {
  interests?: string[];
  workStyle?: string;
  governmentOrPrivate?: string;
  subjectsLiked?: string[];
  techComfort?: string;
  analytical?: boolean;
  creativity?: boolean;
  peopleWork?: boolean;
};

const scoreCareer = (career: typeof careers[number], input: DiscoveryInput) => {
  let score = 0;
  const interests = new Set((input.interests ?? []).map((x) => x.toLowerCase()));

  if (input.governmentOrPrivate === "GOVERNMENT" && career.category === "PROFESSIONAL") score += 4;
  if (input.governmentOrPrivate === "PRIVATE" && career.category !== "PROFESSIONAL") score += 2;
  if (input.workStyle === "ANALYTICAL" && ["TECHNOLOGY","FINANCE","BUSINESS"].includes(career.category)) score += 3;
  if (input.workStyle === "CREATIVE" && career.category === "CREATIVE") score += 4;
  if (input.peopleWork && ["BUSINESS","PROFESSIONAL"].includes(career.category)) score += 2;
  if (input.creativity && career.category === "CREATIVE") score += 3;
  if (input.analytical && ["TECHNOLOGY","FINANCE","BUSINESS"].includes(career.category)) score += 3;
  for (const skill of career.skills) if (interests.has(skill.toLowerCase())) score += 2;

  return score;
};

router.post("/recommendations", (req, res) => {
  const input = req.body as DiscoveryInput;
  const recommendations = [...careers]
    .map((career) => ({ career, score: scoreCareer(career, input) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ career, score }) => ({
      career,
      score,
      explanation: score > 0
        ? "This path matches some of the preferences you shared."
        : "This is an additional path worth exploring."
    }));

  res.json({ data: recommendations });
});

export default router;
