import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// https://tints.dev/blue/1F88D0
const blue = {
  50: "#EDF6FF",
  100: "#CEE7F8",
  200: "#A2D1F1",
  300: "#71B9EA",
  400: "#45A4E3",
  450: "#467FC1",
  500: "#1F88D0",
  600: "#196FA9",
  700: "#12527C",
  800: "#0D3854",
  900: "#061A28",
};
// https://tints.dev/slate/20232B
const black = {
  50: "#E5E6EB",
  100: "#CDD1DA",
  200: "#9CA2B5",
  300: "#6B748F",
  400: "#464C5E",
  500: "#20232B",
  600: "#1A1D23",
  700: "#14151A",
  800: "#0D0E12",
  900: "#070709",
};
// https://tints.dev/zinc/8D8D94
const gray = {
  50: "#F4F4F5",
  100: "#E9E9E9",
  200: "#D2D2D5",
  300: "#BBBBBF",
  400: "#A3A3A9",
  500: "#8D8D94",
  600: "#6F6F76",
  700: "#545459",
  800: "#363433",
  900: "#1B1B1D",
};
// https://www.tints.dev/white/F2F2F2
const white = {
  50: "#f4f4f4",
  100: "#FCFCFC",
  200: "#FAFAFA",
  300: "#F7F7F7",
  400: "#F5F5F5",
  500: "#F2F2F2", // used in Figma as white
  600: "#C2C2C2",
  700: "#919191",
  800: "#626262",
  900: "#303030",
};

const red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#cc0000",
  900: "#b71c1c",
};

const gradient = {
  "x-start": "#42464f",
  "x-end": "#272b34",
  "a-start": "#b4d9eb",
  "a-end": "#cae4c5",
  "b-start": "#cae4c5",
  "b-end": "#fffcbb",
  "c-start": "#fffcbb",
  "c-end": "#ffdbb1",
  "d-start": "#ffdbb1",
  "d-end": "#ffc9c9",
  "e-start": "#ffc9c9",
  "e-end": "#ceb9e8",
  "f-start": "#ceb9e8",
  "f-end": "#b4d9eb",
  "feedback-start": "rgba(255, 252, 187, 0.7)",
  "feedback-end": "rgba(202, 228, 197, 0.7)",
  "blob-hero-linear-gradient-from": "#ffffff",
  "light-card-start": "rgba(255, 255, 255, 0.60)",
  "light-card-end": "rgba(255, 255, 255, 0.44)",
  "blob-hero-linear-gradient-to": "rgba(242, 242, 242, 0)",
};

const designTokens = {
  spacing: {
    small: "0.5rem", // 8px
    base: "1rem", // 16px
    medium: "1.5rem", // 24px
    large: "2rem", // 32px
  },
  zIndex: {
    max: "2147483647",
    intercom: "2147483001",
    modal: "2147483647", //max
    backdrop: "2147483646", // max - 1
    dropdown: "2147483646", //  max - 1
    cookie: "2147483645", // max - 2
    header: "2147483000", // intercom - 1
    mobileMenu: "2147482999", // intercom - 2
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "dotted-pattern": "20px 20px",
      },
      backgroundImage: {
        "dotted-pattern": "radial-gradient(circle, black 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "pricing-free-card-gradient-background":
          "radial-gradient(26.1% 26.1% at 35.03% 12.63%,hsla(0,0%,42%,.02) 0,transparent),radial-gradient(56% 56% at 47.66% -14.61%,hsla(0,0%,55%,.12) 0,transparent),radial-gradient(50% 30% at 50% -8%,hsla(0,0%,75%,.1) 0,transparent),radial-gradient(50% 27.67% at 50% -18.87%,rgba(209,211,255,.1) 0,transparent)",

        "pricing-professional-card-gradient-background":
          "radial-gradient(38.1% 26.21% at 50% -17.01%,rgba(209,211,255,.35) 0,transparent),radial-gradient(49.34% 31.15% at 50% 0,rgba(51,121,255,.2) 0,transparent),radial-gradient(107.27% 61.81% at 48.31% -1.36%,rgba(0,72,212,.3) 0,transparent),radial-gradient(81.97% 46.41% at 30.6% 75.68%,rgba(91,117,255,.02) 0,transparent)",

        "pricing-enterprise-card-gradient-background":
          "radial-gradient(60% 55% at 45% -6.97%,rgba(220,121,255,.28) 0,transparent),radial-gradient(41.21% 24.69% at 50% -13.49%,rgba(209,211,255,.25) 0,transparent),radial-gradient(90% 76.73% at 50% 0,rgba(129,51,255,.05) 0,transparent),radial-gradient(86.25% 37.42% at 30.6% 75.68%,rgba(183,91,255,.05) 0,transparent)",
      },
      colors: {
        blue,
        black,
        gray,
        red,
        "white-50": white[50],
        "white-100": white[100],
        "white-200": white[200],
        "white-300": white[300],
        "white-400": white[400],
        "white-500": white[500],
        "white-600": white[600],
        "white-700": white[700],
        "white-800": white[800],
        gradient,
      },
      textColor: {
        blue,
        black,
        gray,
        "white-500": white[500],
      },
      rotate: {
        270: "270deg",
      },
      width: {
        228: "228px",
        261: "261px",
        334: "334px",
      },
      height: {
        15: "3.75rem", // 60px
      },
      gap: { ...designTokens.spacing },
      margin: { ...designTokens.spacing },
      padding: { ...designTokens.spacing },
      boxShadow: {
        nav: "0 4px 100px rgba(0, 0, 0, 0.2)",
        select: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
        button: `0px 0px 24px 0px rgba(32, 35, 43, 0.13)`,
        dropdown: "0px 2px 56px 0px rgba(32, 35, 43, 0.14)",
        comboBox: ` 0px 0px 16px 0px rgba(0, 0, 0, 0.1)`,
      },
      zIndex: {
        ...designTokens.zIndex,
      },
    },
    screens: {
      xs: { max: "400px" },
      // => @media screen and  (max-width: 400px) { }
      sm: { max: "768px" },
      // => @media screen and  (max-width: 767px) { }
      md: { min: "769px", max: "921px" },
      // => @media screen and  (min-width: 768px) and (max-width: 921px) { }
      lg: { min: "922px", max: "1279px" },
      // => @media (min-width: 922px) and (max-width: 1279px) { }
      xl: { min: "1280px", max: "1550px" },
      // => @media screen and  (min-width: 1280px) and (max-width: 1550px) { }
      "2xl": "1551px",
      // => @media screen and  (min-width: 1551px) { }
      "3xl": "1920px",
      // => @media screen and  (min-width: 1920px) { }
    },
    fontFamily: {
      sans: ["var(--font-family)", ...fontFamily.sans],
      serif: ["var(--font-ar)", ...fontFamily.serif],
    },
    fontSize: {
      // OLD FONT SIZE
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: ["1.125rem", "130%"], // 18px Used in Figma, <SubTitle>
      xl: ["1.25rem", "100%"], // 20px Used in Figma, <CardLink>
      "2xl": ["1.5rem", "130%"], // 24px Used in Figma, <SubHeading>
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem",
      "5xl": ["2.5rem", "120%"],
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": ["7.5rem", "90%"],
      // NEW FONT SIZE
      120: "120px",
      80: "80px",
      72: "72px",
      56: "56px",
      48: "48px",
      40: "40px",
      36: "36px",
      32: "32px",
      28: "28px",
      24: "24px",
      20: "20px",
      18: "18px",
      16: "16px",
      15: "15px",
      14: "14px",
      13: "13px",
      12: "12px",
      10: "10px",
    },
    fontWeight: {
      hairline: "100",
      extraLight: "200",
      light: "300",
      normal: "400",
      lightMedium: "450",
      medium: "500",
      lightBold: "515",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },
    lineHeight: {
      "leading-14": "4.5rem",
      "14h": "0.875rem",
      90: " 90%",
      100: " 100%",
      110: " 110%",
      120: "120%",
      130: "130%",
    },
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["dark", "dark-disabled", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active", "dark-placeholder"],
  },
  plugins: [
    // @ts-ignore
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          mbs: (value: number) => ({
            "margin-block-start": value,
          }),
          mbe: (value: number) => ({
            "margin-block-end": value,
          }),
          pbs: (value: number) => ({
            "padding-block-start": value,
          }),
          pbe: (value: number) => ({
            "padding-block-end": value,
          }),
          start: (value: number) => ({
            "inset-inline-start": value,
          }),
          end: (value: number) => ({
            "inset-inline-end": value,
          }),
        },
        { values: theme("spacing") },
      );
    },
    // @ts-ignore
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".container": {
            width: "var(--container-max-width)  !important",
            maxWidth: "var(--container-max-width)  !important",
            marginInline: "var(--container-space-x) !important",
          },
          ".container_full": {
            paddingInline: "var(--container-space-x) !important",
          },
          ".bg-dotted-pattern": {
            backgroundImage:
              "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "5px 5px",
          },
          ".border-linear": {
            borderWidth: "1px",
            borderColor: "transparent",
            WebkitMask:
              "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
          ".border-image-pricing-free-card-gradient-border": {
            background:
              "radial-gradient(61.08% 72.54% at 110.16% -24.32%,hsla(0,0%,100%,.4) 0,hsla(0,0%,85%,0) 56.13%) border-box,radial-gradient(47.36% 66.91% at 2.64% 28.54%,hsla(0,0%,85%,.2) 0,hsla(0,0%,85%,0) 73.66%) border-box,radial-gradient(58.93% 31.31% at 39.68% 2.27%,hsla(0,0%,85%,.1) 0,hsla(0,0%,85%,0) 73.66%) border-box,radial-gradient(32.96% 44.13% at 50% .84%,hsla(0,0%,67%,.6) 0,hsla(0,0%,67%,0) 100%) border-box,linear-gradient(0deg,#202127,#202127) border-box",
          },
          ".border-image-pricing-professional-card-gradient-border": {
            background:
              "radial-gradient(32.96% 44.13% at 50% .84%,#4b97e3 0,rgba(75,151,227,0) 100%) border-box,radial-gradient(57.55% 68.89% at 0 76.21%,#252741 0,rgba(37,40,65,0) 100%) border-box,linear-gradient(231.28deg,#212545 6.65%,#191a1f 72.25%) border-box",
          },
          ".border-image-pricing-enterprise-card-gradient-border": {
            background:
              "radial-gradient(36.64% 49.06% at 50% .84%,#9963c4 0,rgba(153,99,196,0) 100%) border-box,radial-gradient(75.54% 94.76% at 96.98% -1.8%,rgba(218,163,245,.1) 0,rgba(198,117,240,0) 100%) border-box,radial-gradient(80.23% 55.53% at 2.34% 7.86%,rgba(218,163,245,.1) 0,rgba(198,117,240,0) 100%) border-box,linear-gradient(6.64deg,#262626 -5.57%,#1a1a1a 57.64%) border-box",
          },
          ".border-image-pricing-card-popular-label-border": {
            background:
              "radial-gradient(111.74% 178.85% at 48.14% 58.62%,rgba(56,123,251,.05) 0,rgba(56,123,251,.05) 100%) border-box,radial-gradient(96.78% 122.23% at -13.86% 12.62%,hsla(0,0%,100%,.6) 0,hsla(0,0%,100%,.1) 100%) border-box",
          },
        },
        { values: theme("color") },
      );
    },
    // @ts-ignore
    function ({ addBase, theme }) {
      // @ts-ignore
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          // @ts-ignore
          const newVars =
            typeof value === "string"
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }
      // @ts-ignore
      function extractZIndexVars(zIndexObj, zIndexGroup = "") {
        return Object.keys(zIndexObj).reduce((vars, zIndexKey) => {
          const value = zIndexObj[zIndexKey];
          // @ts-ignore
          const newVars =
            typeof value === "string"
              ? { [`--zIndex${zIndexGroup}-${zIndexKey}`]: value }
              : extractZIndexVars(value, `-${zIndexKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": {
          ...extractColorVars(theme("colors")),
          ...extractZIndexVars(theme("zIndex")),
        },
      });
    },
  ],
};
export default config;
