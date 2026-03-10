import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  seats: integer("seats").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  specialRequest: text("special_request"),
});

export const insertReservationSchema = createInsertSchema(reservations).omit({ id: true });

export type Reservation = typeof reservations.$inferSelect;
export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type CreateReservationRequest = InsertReservation;
export type ReservationResponse = Reservation;
