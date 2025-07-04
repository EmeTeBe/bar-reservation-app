import { useEffect, useState } from "react";
import { ReservationContext } from "./ReservationContext";
import { type ReservationData } from "./ReservationContext";

const LOCAL_STORAGE_KEY = "reservationData";

export function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reservation, setReservationState] = useState<ReservationData>(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData
      ? JSON.parse(storedData)
      : {
          people: "",
          day: "",
          time: "",
          notes: "",
          name: "",
          phone: "",
        };
  });

  const setReservation = (data: Partial<ReservationData>) => {
    setReservationState((prev) => {
      const newState = { ...prev, ...data };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    setReservationState((prev) => ({ ...prev, setReservation }));
  }, []);

  return (
    <ReservationContext.Provider value={{ ...reservation, setReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
