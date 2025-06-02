import { users, guestbookEntries, type User, type InsertUser, type GuestbookEntry, type InsertGuestbookEntry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private guestbookEntries: Map<number, GuestbookEntry>;
  private currentUserId: number;
  private currentGuestbookId: number;

  constructor() {
    this.users = new Map();
    this.guestbookEntries = new Map();
    this.currentUserId = 1;
    this.currentGuestbookId = 1;
    
    // Add some initial guestbook entries
    this.createGuestbookEntry({
      name: "Sarah_2003",
      message: "OMG this site is so cool! Brings back so many memories! ✨"
    });
    this.createGuestbookEntry({
      name: "RetroFan99", 
      message: "Love the MySpace vibes! Keep the retro web alive! 🌟"
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return Array.from(this.guestbookEntries.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createGuestbookEntry(insertEntry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const id = this.currentGuestbookId++;
    const entry: GuestbookEntry = {
      ...insertEntry,
      id,
      createdAt: new Date(),
    };
    this.guestbookEntries.set(id, entry);
    return entry;
  }
}

export const storage = new MemStorage();
