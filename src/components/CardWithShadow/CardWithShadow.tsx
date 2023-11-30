"use client";
import React, { memo } from "react";
import styles from "./CardWithShadow.module.css";

interface CardWithShadowProps {
	children: React.ReactNode | React.ReactNodeArray;
}

const CardWithShadow: React.FC<CardWithShadowProps> = ({ children }) => {
	return (
		<>
			<a className={styles["container"]} href="#">
				<i className={styles["shadow"]} aria-hidden="true"></i>
				<div className={styles["content"]}>{children}</div>
			</a>
		</>
	);
};
CardWithShadow.displayName = "CardWithShadow";
export default memo(CardWithShadow);
