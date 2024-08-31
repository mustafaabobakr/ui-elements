import React, { memo, ComponentPropsWithoutRef } from "react";

interface WatchIconProps extends ComponentPropsWithoutRef<"svg"> {
	fill?: string;
	width?: number;
	height?: number;
}
const WatchIcon: React.FC<WatchIconProps> = ({
	fill = "currentColor",
	width = 10,
	height = 10,
	...props
}: WatchIconProps) => {
	return (
		<svg
			data-testid="WatchIcon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 14 14"
			width={width}
			height={height}
			{...props}>
			<path
				d="M 2 1.741 C 2 0.969 2.837 0.488 3.504 0.877 L 12.519 6.136 C 13.181 6.522 13.181 7.478 12.519 7.864 L 3.504 13.123 C 2.837 13.512 2 13.031 2 12.259 Z"
				fill="currentColor"
			/>
		</svg>
	);
};

WatchIcon.displayName = "WatchIcon";
export default memo(WatchIcon);
