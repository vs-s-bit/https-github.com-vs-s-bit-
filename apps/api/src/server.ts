import "dotenv/config";
import express from "express";
import cors from "cors";
import { z } from "zod";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "path-api", version: "0.1.0" });
});

app.get("/api/careers", (_req, res) => {
  res.json({ data: [], message: "Career catalog is ready for seeded data." });
});

const port = Number(process.env.PORT ?? 3000);
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`PATH API listening on :${port}`));
}

export { app, z };
