import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  children: ReactNode;
  rating: number;
  setRating: (rating: number) => void;
}
