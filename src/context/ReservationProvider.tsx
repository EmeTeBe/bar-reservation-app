import { useState } from "react";
import { ReservationContext } from "./ReservationContext";
import { type ReservationData } from "./ReservationContext";


export function ReservationProvider({children,}: {children: React.ReactNode;}) {
  const [reservation, setReservationState] = useState({
    people: "",
    day: "",
    time: "",
    notes: "",
    name: "",
    phone: "",
  });

  const setReservation = (data: Partial<ReservationData>) => {
    setReservationState((prev) => ({ ...prev, ...data }));
  };

  return (
    <ReservationContext.Provider value={{ ...reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}