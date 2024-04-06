import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cameo: "#f1ddbf", // bg
                blueZodiac: "#3b4455;", // text
                yucca: "#78938a", // deck 1
                darkSeaGreen: "#92ba92", // deck 2
            },
        },
    },
    plugins: [],
};
export default config;
