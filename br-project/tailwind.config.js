/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./data/**/*.{js,vue,ts,json}",
    "./components/**/*.{js,vue,ts}",
    "./web-components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}

