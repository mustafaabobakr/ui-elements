"use client";
import React, { type FC, type ComponentPropsWithoutRef } from "react";
import PricingGradCard from "@/components/PricingGradCard/PricingGradCard";

// https://www.agentql.com/pricing

interface PageProps extends ComponentPropsWithoutRef<"section"> {}
const Page: FC<Readonly<PageProps>> = ({ ...props }: Readonly<PageProps>) => {
  return (
    <main data-testid="Pricing-Page" className={"flex justify-center"}>
      <a href="https://www.agentql.com/pricing">
        https://www.agentql.com/pricing
      </a>
      <section
        className={
          "max-w-[1400px] my-44 px-5 flex flex-col items-center justify-center"
        }
      >
        <h2 className="max-w-3xl bg-gradient-to-b from-white from-35% to-[#999] to-95% bg-clip-text pb-2 text-center text-[64px] font-medium leading-dense tracking-tighter text-transparent lg:text-56 md:pb-1.5 md:text-48 sm:max-w-lg sm:text-36">
          Choose your plan
        </h2>
        <ul
          className={
            "relative mx-auto mt-12 grid grid-cols-3 gap-x-8 gap-y-6 lg:mt-10 lg:gap-x-6 md:max-w-xl sm:max-w-xl md:grid-cols-1 sm:grid-cols-1 sm:mt-9 sm:gap-y-5 before:absolute before:bottom-20 before:left-0 before:z-[-1] before:aspect-square before:w-[600px] before:translate-x-[-40%] before:rounded-full before:bg-[radial-gradient(50%_50%_at_50%_50%,#141414,transparent)] before:opacity-80 md:before:hidden sm:before:hidden after:absolute after:bottom-16 after:right-5 after:z-[-1] after:aspect-square after:w-[600px] after:translate-x-1/3 after:rounded-full after:bg-[radial-gradient(50%_50%_at_50%_50%,#2F223D,transparent)] after:opacity-50 md:after:hidden sm:after:hidden"
          }
        >
          <PricingGradCard
            type={"free"}
            title={"Free"}
            description={"Perfect for web automation and scraping enthusiasts."}
            price={0}
            features={[
              "Up to 1,200 free API calls per month",
              "Community support",
              "Email support",
              "10 API calls / minute",
              "Full access to developer tools",
            ]}
            isMostPopular={true}
          />
          <PricingGradCard
            type={"professional"}
            price={99}
            title={"Professional"}
            description={
              "For teams running regular scraping and automation pipelines."
            }
            features={[
              "All Free Plan features",
              "15,000 API calls included in the plan",
              "$0.008 per API call after the initial limit",
              "50 API calls per minute",
              "Priority email support",
            ]}
            isMostPopular={true}
            buttonType={"primary"}
          />
          <PricingGradCard
            type={"enterprise"}
            price={"custom"}
            title={"Enterprise"}
            description={
              "For organizations scraping and automating at scale, who need special support or security"
            }
            features={[
              "All Professional Plan features",
              "Custom pricing model",
              "No rate limits",
              "Dedicated cloud instance",
              "Dedicated account manager",
              "Optional on-premise deployment",
              "Uptime SLA",
              "24/7 phone and email support",
            ]}
            isMostPopular={true}
          />
        </ul>
      </section>
    </main>
  );
};

Page.displayName = "Page";
export default React.memo(Page);
