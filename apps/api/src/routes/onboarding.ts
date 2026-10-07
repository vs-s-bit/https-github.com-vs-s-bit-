import { Router } from "express";
import { onboardingSchema } from "../../../../packages/validation/src/onboarding.js";

const router = Router();

router.post("/onboarding", (req, res) => {
  const result = onboardingSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "INVALID_ONBOARDING",
      message: "Please check the highlighted onboarding answers.",
      issues: result.error.flatten()
    });
  }

  return res.status(201).json({
    data: {
      profile: result.data,
      status: "READY_FOR_DISCOVERY"
    }
  });
});

export default router;
