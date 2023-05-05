import { Earthquake } from "../api/earthquakeList";
export interface Magnitude {
  id: number;
  value: number;
}

export interface CardProps {
  data: Earthquake;
  onClose: () => void;
}

export interface FilterProps {
  setSelectedMagnitude: React.Dispatch<React.SetStateAction<Magnitude>>;
  onChange: (startDate: Date, endDate: Date) => void;
}

export interface ListBoxProps {
  data: Earthquake[];
}

export interface MapPinProps {
  data: Earthquake;
}