"use client";
import React, { type FC, type ComponentPropsWithoutRef } from "react";

interface DefaultButtonProps extends ComponentPropsWithoutRef<"section"> {}
const DefaultButton: FC<Readonly<DefaultButtonProps>> = ({
  ...props
}: Readonly<DefaultButtonProps>) => {
  return (
    <a
      data-testid="PricingGradCard_DefaultButton"
      {...props}
      className="cursor-pointer transition-colors duration-200 transition-shadow duration-300 group inline-flex items-center outline-none relative justify-center tracking-tight h-10 text-14 px-4 rounded-md overflow-hidden shadow-[0px_2px_10px_0px_rgba(0,0,0,.35)] dark:shadow-[0px_2px_14px_0px_rgba(255,255,255,.35)] bg-gradient-to-b from-[#191A1F] to-[#191A1F]/80 dark:from-white/[0.95] dark:to-white/[0.85] transition-opacity duration-300 mt-5 w-full !rounded-lg font-semibold"
    >
      <span className="absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-b opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:from-[#E5E5E5] dark:to-[#BFBFBF]" />
      <span className="relative z-20 bg-gradient-to-b from-white/[0.95] to-white/[0.85] bg-clip-text text-transparent dark:from-[#191A1F] dark:to-[#191A1F]/80">
        {props.children}
      </span>
    </a>
  );
};

DefaultButton.displayName = "DefaultButton";
export default React.memo(DefaultButton);
