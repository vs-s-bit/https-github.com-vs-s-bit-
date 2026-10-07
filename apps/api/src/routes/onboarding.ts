import { Router } from "express";
import { z } from "zod";

const router = Router();

const onboardingSchema = z.object({
  stage: z.enum(["10TH","12TH","COLLEGE","GRADUATE","WORKING"]),
  knowsCareer: z.boolean(),
  interests: z.array(z.string()).max(10),
  subjectsLiked: z.array(z.string()).max(10),
  subjectsDisliked: z.array(z.string()).max(10),
  workStyle: z.enum(["PEOPLE","ANALYTICAL","CREATIVE","PRACTICAL","MIXED"]),
  governmentOrPrivate: z.enum(["GOVERNMENT","PRIVATE","BOTH","UNSURE"]),
  location: z.string().max(120),
  budget: z.enum(["LOW","MEDIUM","FLEXIBLE"]),
  language: z.enum(["EN","HI","BILINGUAL"]),
  dailyStudyMinutes: z.number().int().min(0).max(1440)
});

router.post("/", (req, res) => {
  const result = onboardingSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "INVALID_ONBOARDING",
      message: "Please check the onboarding answers.",
      issues: result.error.flatten()
    });
  }
  return res.status(201).json({ data: { profile: result.data, status: "READY_FOR_DISCOVERY" } });
});

export default router;
