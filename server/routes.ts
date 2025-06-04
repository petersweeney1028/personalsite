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

  // Spotify token endpoint
  app.post("/api/spotify/token", async (req, res) => {
    try {
      const clientId = process.env.SPOTIFY_CLIENT_ID;
      const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
      
      if (!clientId || !clientSecret) {
        return res.status(400).json({ error: "Spotify credentials not configured" });
      }

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
        },
        body: 'grant_type=client_credentials'
      });

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Spotify token error:', error);
      res.status(500).json({ error: "Failed to get Spotify token" });
    }
  });

  // Get playlist data from Spotify
  app.get("/api/spotify/playlist/:playlistId", async (req, res) => {
    try {
      const clientId = process.env.SPOTIFY_CLIENT_ID;
      const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
      
      if (!clientId || !clientSecret) {
        return res.status(400).json({ error: "Spotify credentials not configured" });
      }

      // Get access token
      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
        },
        body: 'grant_type=client_credentials'
      });

      const tokenData = await tokenResponse.json();
      
      if (!tokenData.access_token) {
        return res.status(500).json({ error: "Failed to get Spotify access token" });
      }

      // Get playlist data
      const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${req.params.playlistId}`, {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        }
      });

      if (!playlistResponse.ok) {
        return res.status(playlistResponse.status).json({ error: "Failed to fetch playlist" });
      }

      const playlistData = await playlistResponse.json();
      res.json(playlistData);
    } catch (error) {
      console.error('Spotify playlist error:', error);
      res.status(500).json({ error: "Failed to fetch playlist data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
