import { Router } from "express";
import { careers } from "../data/careers.js";

const router = Router();

router.get("/", (req, res) => {
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  const search = typeof req.query.search === "string" ? req.query.search.toLowerCase() : undefined;

  const data = careers.filter((career) => {
    const categoryMatch = !category || career.category === category;
    const searchMatch = !search ||
      career.name.toLowerCase().includes(search) ||
      career.description.toLowerCase().includes(search) ||
      career.skills.some((skill) => skill.toLowerCase().includes(search));
    return categoryMatch && searchMatch;
  });

  res.json({ data, total: data.length });
});

router.get("/:id", (req, res) => {
  const career = careers.find((item) => item.id === req.params.id);
  if (!career) return res.status(404).json({ error: "CAREER_NOT_FOUND" });
  res.json({ data: career });
});

export default router;
