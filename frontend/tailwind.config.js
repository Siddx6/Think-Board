import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["luxury", "forest", "synthwave", "cyberpunk", "valentine", "halloween", "garden", "lofi", "pastel", "fantasy", "wireframe", "black", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave"],
  },
}