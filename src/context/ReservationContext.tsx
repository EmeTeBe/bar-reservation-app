import { createContext } from "react";

export interface ReservationData {
  people: string;
  day: string;
  time: string;
  notes: string;
  setReservation: (data: Partial<ReservationData>) => void;
}

export const ReservationContext = createContext<ReservationData | undefined>(undefined);




