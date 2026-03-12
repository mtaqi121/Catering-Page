import { db } from "./db";
import {
  reservations,
  type CreateReservationRequest,
  type ReservationResponse
} from "@shared/schema";

export interface IStorage {
  createReservation(reservation: CreateReservationRequest): Promise<ReservationResponse>;
}

export class DatabaseStorage implements IStorage {
  async createReservation(reservation: CreateReservationRequest): Promise<ReservationResponse> {
    // if db is a stub (no pool) we'll bypass and return a mock response
    if (!process.env.DATABASE_URL && process.env.NODE_ENV === "development") {
      // generate a simple fake id
      return { id: "dev-fake", ...reservation } as any;
    }

    const [created] = await db.insert(reservations).values(reservation).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
