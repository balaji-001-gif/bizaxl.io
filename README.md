# Bizaxl.io Website

A modern, responsive SaaS website for Bizaxl.io, an open-source modular ERP platform. Built with Next.js 14, TypeScript, and CSS Modules.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or yarn/pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/balaji-001-gif/bizaxl.io.git
   cd bizaxl.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the development server to view the website in your browser:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-reload when you make edits.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## 📂 Project Structure

```
bizaxl.io/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout (Navbar + Footer)
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles & CSS variables
│   │   └── [pages]/         # Other pages (products, pricing, etc.)
│   ├── components/
│   │   ├── ui/              # Reusable UI components (Button, Card)
│   │   └── layout/          # Layout components (Navbar, Footer)
├── public/                  # Static assets (images, fonts)
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Design System

This project uses a custom design system built with **CSS Modules** and **CSS Variables**. We do **not** use Tailwind CSS.

- **Global Styles**: Defined in `src/app/globals.css`.
- **Colors**:
  - Primary Blue: `#3F8CFF` (`var(--primary)`)
  - Mint Green: `#4ED3A9` (`var(--secondary)`)
- **Typography**: Inter font family.

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped Styling
- [Lucide React](https://lucide.dev/) - Icons

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy.

For other hosting providers, build the project using `npm run build` and start it with `npm start`.
