const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./node_modules/flowbite/**/*.js",
     "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
]

}

