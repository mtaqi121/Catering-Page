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
    const [created] = await db.insert(reservations).values(reservation).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
