"use client";
import React, { type FC, type ComponentPropsWithoutRef } from "react";
import styles from "./ShinyButton.module.css";

interface ShinyButtonProps extends ComponentPropsWithoutRef<"button"> {}
const ShinyButton: FC<Readonly<ShinyButtonProps>> = ({
  ...props
}: Readonly<ShinyButtonProps>) => {
  return (
    <button
      type={"button"}
      data-testid="ShinyButton"
      className={styles.button}
      {...props}
    >
      {props.children}
    </button>
  );
};

ShinyButton.displayName = "ShinyButton";
export default React.memo(ShinyButton);
