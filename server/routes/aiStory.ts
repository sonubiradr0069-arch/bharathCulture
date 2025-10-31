import { Router, Request, Response } from "express";

const router = Router();

// Simple in-memory cultural stories (later you can fetch from DB or AI)
router.get("/", (req: Request, res: Response) => {
  const { region } = req.query;

  const stories: Record<string, string> = {
    Rajasthan: "Once upon a time in the golden sands of Rajasthan, a brave folk hero rose against tyranny...",
    Kerala: "Amidst Kerala’s lush backwaters, a kind fisherman learned the value of patience and wisdom.",
    Punjab: "A courageous farmer from Punjab once united his village through the spirit of Bhangra and brotherhood.",
    Gujarat: "In the deserts of Kutch, a young artisan created colors that spoke louder than words.",
  };

  const story = stories[String(region)] || "No story found for this region yet.";
  res.json({ region, story });
});

export default router;
