import React, { memo, ComponentPropsWithoutRef } from "react";
import styles from "./GlassMenuButton.module.css";

interface GlassMenuButtonProps extends ComponentPropsWithoutRef<"button"> {
	/**
	 * The text to display on the button.
	 */
	text: string;
	/**
	 * - The icon to display on the button.
	 * - better be width={16} height={16} to fit the button.
	 */
	icon?: React.ReactNode;
}

/**
 * @component GlassMenuButton
 * @param {string} text - The text to display on the button.
 * @param {React.ReactNode} icon - The icon to display on the button.
 * icon better be width:={16} height:={16} to fit the button.
 * @link https://amie.so/
 * @example
 * <GlassMenuButton text="Download" icon={<DownloadIcon />} />
 */
const GlassMenuButton: React.FC<GlassMenuButtonProps> = ({ text, icon, ...props }: GlassMenuButtonProps) => {
	return (
		<button type={"button"} data-testid="GlassMenuButton" {...props} className={styles.button}>
			{icon && <span className="size-4 flex items-center justify-center -ml-0.5 rounded-[8px] opacity-70">{icon}</span>}
			<span className="pointer-events-none">{text}</span>
		</button>
	);
};

GlassMenuButton.displayName = "GlassMenuButton";
export default memo(GlassMenuButton);
