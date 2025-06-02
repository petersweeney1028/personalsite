import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGuestbookEntrySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all guestbook entries
  app.get("/api/guestbook", async (req, res) => {
    try {
      const entries = await storage.getGuestbookEntries();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch guestbook entries" });
    }
  });

  // Create a new guestbook entry
  app.post("/api/guestbook", async (req, res) => {
    try {
      const validatedData = insertGuestbookEntrySchema.parse(req.body);
      const entry = await storage.createGuestbookEntry(validatedData);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create guestbook entry" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
