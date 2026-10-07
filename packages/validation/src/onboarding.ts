import { z } from "zod";

export const onboardingSchema = z.object({
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

export type OnboardingInput = z.infer<typeof onboardingSchema>;
