# Accuknox Assignment(By adnan)

**Hosted link:** [Accuknox Assignment](https://accuknox-assignment-nine.vercel.app/)

## Tech Stack Used
- React (Vite framework)
- React Chart.js 2
- Chart.js
- Tailwind CSS

## Steps to run it locally:
1. **Clone the GitHub repo:**
   ```bash
   git clone https://github.com/adnan179/Accuknox_assignment.git
1. **Create a Vite (React) project::**
   ```bash
   git clone (URL)
2. **Clone the GitHub repo:**
   ```bash
   npm create vite@latest

3. **Install all dependencies:**
   ```bash
   npm install
4. **Initialize Tailwind CSS:**
   ```bash
   npx tailwindcss init -p
5. **Update tailwind.config.js with the following configuration:**
   ```bash
   /** @type {import('tailwindcss').Config} */
    export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

6. **Update index.css with the following content:**
   ```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
7. **Start the development server:**
   ```bash
    npm run dev

