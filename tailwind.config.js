/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-green": "#64f1cd",
                "primary-gray": "#292c2e",
                "secondary-gray": "rgba(114, 114, 114, 0.3)",
                "light-gray": "#c1c1c1",
            },
        },
    },
    plugins: [],
};
