"use client";
import React, { type FC, type ComponentPropsWithoutRef } from "react";

interface PrimaryButtonProps extends ComponentPropsWithoutRef<"a"> {}
const PrimaryButton: FC<Readonly<PrimaryButtonProps>> = ({
  ...props
}: Readonly<PrimaryButtonProps>) => {
  return (
    <section>
      <a
        data-testid="PrimaryButton"
        {...props}
        className="cursor-pointer transition-colors duration-200 transition-shadow duration-300 group inline-flex items-center outline-none relative justify-center tracking-tight h-10 text-14 px-4 rounded-md bg-[linear-gradient(84deg,#1430B8_20.58%,#4A92FF_113.49%)] text-white mt-5 w-full !rounded-lg font-semibold relative z-10 [&amp;_.hightlight+span]:rounded-xl [&amp;_.hightlight]:hidden"
      >
        <span
          className="hightlight absolute -bottom-1/3 -left-[12%] -z-10 h-full w-[124%] rounded-[100%] bg-[#1938BE] opacity-60 blur-2xl"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-1 z-[-1] rounded-xl bg-gradient-to-r from-[#1A40FF] to-[#8095FF] opacity-15"
          aria-hidden="true"
        />
        <span className="absolute inset-0 rounded-lg bg-[#000]/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <span className="relative z-20">{props.children}</span>
      </a>
    </section>
  );
};

PrimaryButton.displayName = "PrimaryButton";
export default React.memo(PrimaryButton);
