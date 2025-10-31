import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import aiStory from "./routes/aiStory";
import auth from "./routes/auth";     // ✅ new import

export async function registerRoutes(app: Express): Promise<Server> {
  // ✅ Auth routes (register & login)
  app.use("/api/auth", auth);

  // ✅ AI Storytelling route
  app.use("/api/ai-story", aiStory);

  const httpServer = createServer(app);
  return httpServer;
}
