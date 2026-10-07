import "dotenv/config";
import express from "express";
import cors from "cors";
import onboardingRouter from "./routes/onboarding.js";
import careersRouter from "./routes/careers.js";
import discoveryRouter from "./routes/discovery.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "path-api", version: "0.2.0" });
});

app.use("/api/onboarding", onboardingRouter);
app.use("/api/careers", careersRouter);
app.use("/api/discovery", discoveryRouter);

const port = Number(process.env.PORT ?? 3000);
if (process.env.NODE_ENV !== "test") app.listen(port, () => console.log(`PATH API listening on :${port}`));

export { app };
