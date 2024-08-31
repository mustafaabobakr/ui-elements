import React, { useState, useEffect, useCallback, memo } from "react";
import styles from "./GlassMenu.module.css";
import DownloadIcon from "@/components/Icons/DownloadIcon";
import GlassMenuButton from "./components/GlassMenuButton";
import PricingIcon from "@/components/Icons/PricingIcon";
import WatchIcon from "@/components/Icons/WatchIcon";

interface GlassMenuProps {}
const GlassMenu: React.FC<GlassMenuProps> = ({}: GlassMenuProps) => {
	/**
	 * height: 106px; opacity: 1; width: 300px;
	 * from => to
	 * transform: translateX(-12px) translateY(24px) scale(0.9) rotate(0deg) translateZ(0px);
	 * transform: translateX(-20px) translateY(-1px) scale(1) rotate(0deg) translateZ(0px);
	 *
	 * transform: translateX(-12px) translateY(24px) scale(0.9) rotate(-0.858407deg) translateZ(0px)
	 * transform: translateX(-17.2741px) translateY(-81.9319px) scale(1) rotate(0deg) translateZ(0px);
	 *
	 * transform: translateX(-12px) translateY(24px) scale(0.9) rotate(-1.71681deg) translateZ(0px)
	 * transform: translateX(-9.28203px) translateY(-162.598px) scale(1) rotate(0deg) translateZ(0px);
	 *
	 * transform: translateX(-12px) translateY(24px) scale(0.9) rotate(-2.57522deg) translateZ(0px)
	 * transform: translateX(3.43146px) translateY(-242.828px) scale(1) rotate(0deg) translateZ(0px);
	 *
	 * transform: translateX(-12px) translateY(24px) scale(0.9) rotate(-3.43363deg) translateZ(0px)
	 * transform: translateX(20px) translateY(-322.5px) scale(1) rotate(0deg) translateZ(0px);
	 *
	 */
	return (
		<nav
			data-testid="GlassMenu"
			className="flex items-end backdrop-blur-[40px] justify-center text-primary [&_.text-primary]:text-white/80 text-white/80 [&_.text-secondary]:text-white/60 [&_.text-tertiary]:text-white/50 shadow-di"
			style={{
				width: "auto",
				height: 48,
				overflow: "unset",
				maxHeight: "calc(-56px + 100vh)",
				backgroundColor: "rgba(0, 0, 0, 0.38)",
				borderRadius: 12,
				opacity: 1,
				transform: "none",
				transformOrigin: "50% 50% 0px",
			}}>
			<div
				className="flex items-center h-full w-full px-1.5 gap-1"
				style={{ opacity: 1, transform: "none", transformOrigin: "50% 50% 0px" }}>
				<div className="flex items-center justify-center">
					<GlassMenuButton text="Watch" icon={<WatchIcon />} />
				</div>
				<div aria-expanded="false" className="flex items-center group justify-center  relative">
					<GlassMenuButton text="Pricing" icon={<PricingIcon />} />
				</div>
				<div aria-expanded="false" className="flex relative items-center">
					<GlassMenuButton text="Download" icon={<DownloadIcon />} />
					<div className="flex sm:overflow-hidden pointer-events-none absolute h-screen w-screen z-[100] bottom-[42px] left-0 right-0 -translate-x-full sm:-translate-x-1/2">
						<div
							className="absolute flex gap-3.5 items-center left-1/2 bottom-0 shrink-0 pl-8 -z-10 pointer-events-auto pointer-events-none group/row cursor-pointer"
							style={{
								height: 64,
								opacity: 0,
								width: 64,
								transform: "translateX(-12px) translateY(24px) scale(0.9) rotate(0deg) translateZ(0px)",
							}}>
							<div className="flex size-16 shrink-0 rounded-lg  group-hover/row:scale-105 scale-100 transition-transform pointer-events-none">
								<img src="/2024/images/iOS.webp" width={64} height={64} />
							</div>
							<div
								className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:!scale-105 scale-100 transition-transform"
								style={{ opacity: 0, transform: "translateX(-4px) translateZ(0px)" }}>
								<div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/60">
									<span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
										iOS
									</span>
								</div>
							</div>
						</div>
						<div
							className="absolute flex gap-3.5 items-center left-1/2 bottom-0 shrink-0 pl-8 -z-10 pointer-events-auto pointer-events-none group/row cursor-pointer"
							style={{
								height: 64,
								opacity: 0,
								width: 64,
								transform: "translateX(-12px) translateY(24px) scale(0.9) rotate(-0.858407deg) translateZ(0px)",
							}}>
							<div className="flex size-16 shrink-0 rounded-lg  group-hover/row:scale-105 scale-100 transition-transform pointer-events-none">
								<img src="/2024/images/AppleSilicon.png" width={64} height={64} />
							</div>
							<div
								className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:!scale-105 scale-100 transition-transform"
								style={{ opacity: 0, transform: "translateX(-4px) translateZ(0px)" }}>
								<div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/60">
									<span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
										macOS Silicon
									</span>
								</div>
							</div>
						</div>
						<div
							className="absolute flex gap-3.5 items-center left-1/2 bottom-0 shrink-0 pl-8 -z-10 pointer-events-auto pointer-events-none group/row cursor-pointer"
							style={{
								height: 64,
								opacity: 0,
								width: 64,
								transform: "translateX(-12px) translateY(24px) scale(0.9) rotate(-1.71681deg) translateZ(0px)",
							}}>
							<div className="flex size-16 shrink-0 rounded-lg  group-hover/row:scale-105 scale-100 transition-transform pointer-events-none">
								<img src="/2024/images/AppleIntel.png" width={64} height={64} />
							</div>
							<div
								className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:!scale-105 scale-100 transition-transform"
								style={{ opacity: 0, transform: "translateX(-4px) translateZ(0px)" }}>
								<div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/60">
									<span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
										macOS Intel
									</span>
								</div>
							</div>
						</div>
						<div
							className="absolute flex gap-3.5 items-center left-1/2 bottom-0 shrink-0 pl-8 -z-10 pointer-events-auto pointer-events-none"
							style={{
								height: 64,
								opacity: 0,
								width: 64,
								transform: "translateX(-12px) translateY(24px) scale(0.9) rotate(-2.57522deg) translateZ(0px)",
							}}>
							<div className="flex size-16 shrink-0 rounded-lg  group-hover/row:scale-105 scale-100 transition-transform pointer-events-none bg-black/40 shadow-xl">
								<img src="/2024/images/Windows+Android.png" width={64} height={64} />
							</div>
							<div
								className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:!scale-105 scale-100 transition-transform"
								style={{ opacity: 0, transform: "translateX(-4px) translateZ(0px)" }}>
								<div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/30">
									<span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
										Windows
										<span className="font-bold ml-1 opacity-80 tracking-wide uppercase text-xxs">Coming soon</span>
									</span>
								</div>
							</div>
						</div>
						<div
							className="absolute flex gap-3.5 items-center left-1/2 bottom-0 shrink-0 pl-8 -z-10 pointer-events-auto pointer-events-none"
							style={{
								height: 64,
								opacity: 0,
								width: 64,
								transform: "translateX(-12px) translateY(24px) scale(0.9) rotate(-3.43363deg) translateZ(0px)",
							}}>
							<div className="flex size-16 shrink-0 rounded-lg  group-hover/row:scale-105 scale-100 transition-transform pointer-events-none bg-black/40 shadow-xl">
								<img src="/2024/images/Windows+Android.png" width={64} height={64} />
							</div>
							<div
								className="relative pointer-events-none bg-white/70 shadow-xl rounded-[12px] overflow-hidden group-hover/row:!scale-105 scale-100 transition-transform"
								style={{ opacity: 0, transform: "translateX(-4px) translateZ(0px)" }}>
								<div className="z-10 relative px-3 py-1 group-hover/row:bg-black/70 transition-colors bg-black/30">
									<span className="whitespace-nowrap text-sm font-semibold [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
										Android
										<span className="font-bold ml-1 opacity-80 tracking-wide uppercase text-xxs">Coming soon</span>
									</span>
								</div>
							</div>
						</div>
						G
					</div>
				</div>
			</div>
		</nav>
	);
};

GlassMenu.displayName = "GlassMenu";
export default memo(GlassMenu);
