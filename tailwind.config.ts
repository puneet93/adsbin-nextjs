import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "adsbin-evergreens": "#000000", //"#415B41"
        "adsbin-evergreens-light": "rgba(65, 91, 65, 0.37)",
        dark: "#000000",
        "adsbin-chart": {
          100: "#60CA3B",
        },
        "adsbin-grey": {
          100: "#ECECEC", // gray-light
          200: "#AEADAD", // border-btn
          300: "#AAAAAA", // AAA
          400: "#A6A6A6", // A6A
          500: "#A0A0A0", // A0A
          600: "#8C8C8C", // 8C8
          700: "#959393", // 959
          800: "#818181", // 818
          900: "#920909",
          1000: "#000000", // 606060
          1100: "#EDEDED", // 606
          1200: "#FAFCF9", // 606
          1300: "#fbfbfb", // 606
        },
        "adsbin-green": {
          100: "#E4FCDC", // approvedBg
          200: "#64A446", // approved
          300: "#345947", // green-text-btn
          400: "#17412D", // green-text
          500: "#4DBB18", // green
        },
        "adsbin-red": {
          100: "#FCDCDC", // unpaidBg
          200: "#FF6E6E", // unpaid
          300: "#6A0303", // unpaid
          400: "#FCDCDC", // unpaid
        },
        "adsbin-neutral": {
          100: "#F0F0F0", // runningBg
          200: "#C9C9C9", // running
          300: "#1D1B20", // running
          400: "#9D9C9C", // running
          500: "#656565", // running
          600: "#CBCBCB", // running
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        container: "0px 0px 44px 0px rgba(0,0,0,0.1)",
        formField: "0px 4px 4px 0px rgba(0,0,0,0.04)",
        carousel: "0px 11px 62px -43px rgba(0,0,0,0.25)",
        indicator: "0px 0px 0 6px rgba(0,0,0,0.15)",
      },
      spacing: {
        "0": "0",
        "1": "0.2rem", // 0.25 * 0.8
        "2": "0.4rem", // 0.5 * 0.8
        "3": "0.6rem", // 0.75 * 0.8
        "4": "0.8rem", // 1 * 0.8
        "5": "1rem", // 1.25 * 0.8
        "6": "1.2rem", // 1.5 * 0.8
        "7": "1.4rem", // 1.75 * 0.8
        "8": "1.6rem", // 2 * 0.8
        "9": "1.8rem", // 2.25 * 0.8
        "10": "2rem", // 2.5 * 0.8
        "12": "2.4rem", // 3 * 0.8
        "14": "2.8rem", // 3.5 * 0.8
        "16": "3.2rem", // 4 * 0.8
        "20": "4rem", // 5 * 0.8
        "24": "4.8rem", // 6 * 0.8
        "28": "5.6rem", // 7 * 0.8
        "32": "6.4rem", // 8 * 0.8
        "36": "7.2rem", // 9 * 0.8
        "40": "8rem", // 10 * 0.8
        "44": "8.8rem", // 11 * 0.8
        "48": "9.6rem", // 12 * 0.8
        "52": "10.4rem", // 13 * 0.8
        "56": "11.2rem", // 14 * 0.8
        "60": "12rem", // 15 * 0.8
        "64": "12.8rem", // 16 * 0.8
        "72": "14.4rem", // 18 * 0.8
        "80": "16rem", // 20 * 0.8
        "96": "19.2rem", // 24 * 0.8
      },
      fontSize: {
        "13": "10.4rem", // 13 * 0.8
        xs: "0.6rem", // 0.75 * 0.8
        sm: "0.7rem", // 0.875 * 0.8
        base: "0.8rem", // 1 * 0.8
        lg: "0.9rem", // 1.125 * 0.8
        xl: "1rem", // 1.25 * 0.8
        "2xl": "1.2rem", // 1.5 * 0.8
        "3xl": "1.5rem", // 1.875 * 0.8
        "4xl": "1.8rem", // 2.25 * 0.8
        "5xl": "2.4rem", // 3 * 0.8
        "6xl": "3rem", // 3.75 * 0.8
        "7xl": "3.6rem", // 4.5 * 0.8
        "8xl": "4.8rem", // 6 * 0.8
        "9xl": "6.4rem", // 8 * 0.8
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
