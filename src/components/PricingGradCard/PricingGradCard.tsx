"use client";
import React, { type FC, type ComponentPropsWithoutRef, memo } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import DefaultButton from "./buttons/DefaultButton";

const MostPopular = React.lazy(() => import("./MostPopular"));

interface PricingGradCardProps extends ComponentPropsWithoutRef<"article"> {
  type: "free" | "professional" | "enterprise";
  title: string;
  description: string;
  price: "custom" | number;
  features: string[];
  isMostPopular?: boolean;
  buttonType?: "primary" | "default";
  buttonText?: string;
  buttonLink?: string;
}

const PricingGradCard: FC<Readonly<PricingGradCardProps>> = ({
  title,
  description,
  price,
  type,
  features,
  isMostPopular,
  buttonType,
  buttonText,
  buttonLink,
  ...props
}: Readonly<PricingGradCardProps>) => {
  const gradient =
    type === "free"
      ? "bg-pricing-free-card-gradient-background"
      : type === "professional"
        ? "bg-pricing-professional-card-gradient-background"
        : "bg-pricing-enterprise-card-gradient-background";

  const borderImage =
    type === "free"
      ? "border-image-pricing-free-card-gradient-border"
      : type === "professional"
        ? "border-image-pricing-professional-card-gradient-border"
        : "border-image-pricing-enterprise-card-gradient-border";

  return (
    <article
      data-testid="PricingGradCard"
      className={`relative rounded-xl bg-black-900 px-8 pb-8 pt-7 lg:px-6 lg:pb-6 lg:pt-5 ${gradient}`}
      {...props}
    >
      <span
        className={`border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] ${borderImage}`}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-28 w-full -translate-x-1/2 bg-dotted-pattern text-white bg-center bg-repeat opacity-80 mix-blend-plus-lighter [mask-image:radial-gradient(50%_70%_at_50%_0%,black_5%,rgba(0,0,0,0.12),transparent_100%)]"
        aria-hidden="true"
      />
      <h3 className="text-20 font-medium leading-dense tracking-tight md:text-18">
        {title}
      </h3>
      {isMostPopular && (
        <React.Suspense>
          <MostPopular />
        </React.Suspense>
      )}
      <span className="mt-6 flex items-end gap-x-0.5 lg:mt-5">
        <span className="text-48 font-medium leading-dense tracking-tighter lg:text-40 md:text-36 sm:text-28">
          {price === "custom" ? "Custom" : `$${price}`}
        </span>
        {price !== "custom" && (
          <span className="mb-[0.8rem] text-15 text-gray-100/70 lg:mb-1 lg:tracking-normal md:mb-0">
            /monthly
          </span>
        )}
      </span>
      <p className="mt-2 text-15 leading-snug text-gray-80 lg:min-h-[62px] md:min-h-0">
        {description}
      </p>
      {buttonType === "primary" ? (
        <PrimaryButton href={buttonLink}>
          {buttonText ?? "Sign up"}
        </PrimaryButton>
      ) : (
        <DefaultButton href={buttonLink}>
          {buttonText ?? "Contact Sales"}
        </DefaultButton>
      )}
      <ul className="mt-7 flex flex-col gap-y-[11px] border-t border-white/10 pt-7 lg:pt-6 sm:mt-6 sm:pt-5">
        {features.map((feature) => (
          <li
            key={feature.trim().replace(" ", "-").trim()}
            className="flex items-start gap-x-2"
          >
            <img
              alt=""
              fetchpriority="high"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="mx-px mt-0.5 w-4 shrink-0"
              style={{ color: "transparent" }}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iI0FCQUVCQiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuODI4IDQuMTgzYS42NS42NSAwIDAgMSAwIC44ODFsLTYuMzczIDYuNzUzYS41NjUuNTY1IDAgMCAxLS44MzIgMEwzLjE3MyA5LjIyYS42NS42NSAwIDAgMSAwLS44ODIuNTY1LjU2NSAwIDAgMSAuODMxIDBsMi4wMzUgMi4xNTcgNS45NTctNi4zMTJhLjU2NS41NjUgMCAwIDEgLjgzMiAwIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
              data-cmp-ab="2"
              data-cmp-info="10"
            />
            <span className="w-fit text-15 font-light leading-snug tracking-tight text-gray-100/70 sm:text-14">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

PricingGradCard.displayName = "PricingGradCard";
export default memo(PricingGradCard);
