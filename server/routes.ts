import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import aiStory from "./routes/aiStory";   // ✅ new import for AI storytelling

export async function registerRoutes(app: Express): Promise<Server> {
  // ✅ Register the AI Storytelling route
  // Example: GET /api/ai-story?region=Kerala
  app.use("/api/ai-story", aiStory);

  // You can add more routes here later (e.g. auth, quiz, festivals)
  // Always prefix them with /api
  // Example: app.use("/api/auth", authRouter);

  // Example usage of storage (for future CRUD):
  // await storage.insertUser(user);
  // const user = await storage.getUserByUsername(username);

  const httpServer = createServer(app);

  return httpServer;
}
