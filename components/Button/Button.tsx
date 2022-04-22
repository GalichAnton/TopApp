import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import cn from "classnames";
import styles from "./Button.module.css";
export const Button: FC<ButtonProps> = ({ appearance, children }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
    >
      {children}
    </button>
  );
};
