import React, { ComponentPropsWithoutRef, memo } from "react";

interface DownloadIconProps extends ComponentPropsWithoutRef<"svg"> {
	fill?: string;
	width?: number;
	height?: number;
}
const DownloadIcon: React.FC<DownloadIconProps> = ({
	fill = "currentColor",
	width = 16,
	height = 16,
	...props
}: DownloadIconProps) => {
	return (
		<svg
			data-testid="DownloadIcon"
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			{...props}
			fill="none">
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={2}
				d="M13 9c0 .63-.046 1.411-.099 2.097a1.923 1.923 0 0 1-1.807 1.767C10.057 12.93 8.775 13 8 13c-.775 0-2.057-.07-3.094-.136A1.924 1.924 0 0 1 3.1 11.097 29.39 29.39 0 0 1 3 9"
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="m5 4.75 2.633 2.852a.5.5 0 0 0 .734 0L11 4.75M8 6.25V1.5"
			/>
		</svg>
	);
};

DownloadIcon.displayName = "DownloadIcon";
export default memo(DownloadIcon);
