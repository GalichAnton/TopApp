import { RatingProps } from "./RatingProps";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useState } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const constructRaiting = (currentRaiting: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return <StarIcon />;
    });
  };
  return <div></div>;
};
