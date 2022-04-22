import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import Arrow from "./arrow.svg";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
