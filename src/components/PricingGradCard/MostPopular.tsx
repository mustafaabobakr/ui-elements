"use client";
import React, { type FC, type ComponentPropsWithoutRef } from "react";

interface MostPopularProps extends ComponentPropsWithoutRef<"span"> {}
const MostPopular: FC<Readonly<MostPopularProps>> = ({
  ...props
}: Readonly<MostPopularProps>) => {
  return (
    <span
      data-testid="MostPopular"
      className="absolute right-8 top-7 flex h-[26px] w-[103px] items-center justify-center rounded-full bg-[radial-gradient(56%_197%_at_10%_109%,rgba(0,45,204,0.2)_0%,rgba(0,33,204,0)_100%),linear-gradient(0deg,rgba(77,88,142,0.35),rgba(77,88,142,0.35))] lg:right-6 lg:top-5 sm:top-4.5"
      {...props}
    >
      <span
        className="border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-image-pricing-card-popular-label-border"
        aria-hidden="true"
      />
      <span className="bg-gradient-to-r from-[#CBD4FF] from-35% to-[#5E6799] bg-clip-text text-12 leading-none tracking-tight text-transparent">
        Most Popular
      </span>
    </span>
  );
};

MostPopular.displayName = "MostPopular";
export default React.memo(MostPopular);
