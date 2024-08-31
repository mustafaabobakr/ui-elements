import React, { memo, ComponentPropsWithoutRef } from "react";

interface PricingIconProps extends ComponentPropsWithoutRef<"svg"> {
	fill?: string;
	width?: number;
	height?: number;
}
const PricingIcon: React.FC<PricingIconProps> = ({
	fill = "currentColor",
	width = 16,
	height = 16,
	...props
}: PricingIconProps) => {
	return (
		<svg
			data-testid="PricingIcon"
			width={width}
			height={height}
			{...props}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlSpace="preserve">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M8 5v-.667M8 11v.667M9.444 6c-.288-.399-.827-.667-1.444-.667h-.185c-.818 0-1.482.531-1.482 1.186v.05c0 .469.331.897.854 1.106l1.626.65c.523.21.854.637.854 1.106 0 .682-.692 1.236-1.545 1.236H8c-.617 0-1.156-.268-1.444-.667M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
			/>
		</svg>
	);
};

PricingIcon.displayName = "PricingIcon";
export default memo(PricingIcon);
