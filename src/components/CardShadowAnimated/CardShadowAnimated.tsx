import React, { memo, ComponentPropsWithoutRef } from "react";
import styles from "./CardShadowAnimated.module.css";

interface CardShadowAnimatedProps extends ComponentPropsWithoutRef<"section"> {}
/**
 * @component CardShadowAnimated
 * @param {React.ComponentPropsWithoutRef<"section">} props
 * @link https://rn.new/
 *
 */
const CardShadowAnimated: React.FC<CardShadowAnimatedProps> = ({ ...props }: CardShadowAnimatedProps) => {
	return (
		<section data-testid="CardShadowAnimated" {...props} className={styles.card}>
			{props.children}
		</section>
	);
};

CardShadowAnimated.displayName = "CardShadowAnimated";
export default memo(CardShadowAnimated);
