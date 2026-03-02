# Happy Chatters

A modern, responsive, and accessible website for **Happy Chatters** — a training and development center for autistic children.

## Features

- **React + Vite** — Fast, modern build tooling
- **Tailwind CSS** — Utility-first styling with custom pastel palette
- **Framer Motion** — Smooth scroll-triggered animations
- **Fully Responsive** — Mobile-first design
- **Accessible** — ARIA labels, skip links, keyboard navigation, good contrast
- **SEO-Friendly** — Semantic HTML, meta tags, proper heading structure
- **Admin-Editable Content** — All content in `src/data/content.js` for easy updates

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
happy-chatters/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Enrollment.jsx
│   │   ├── Blog.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ProgramIcon.jsx
│   ├── data/
│   │   └── content.js  # Editable content (mission, programs, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customizing Content

Edit `src/data/content.js` to update:

- Organization name and contact info
- Hero headline and CTAs
- Mission, vision, and story
- Program descriptions
- Testimonials
- FAQ questions and answers
- Blog post titles and excerpts

No component code changes needed for content updates.

## Design System

- **Colors**: Pastel blue (#B8D4E8), soft yellow (#F5E6B3), pastel green (#B8E8C8)
- **Fonts**: Nunito (body), Quicksand (headings)
- **Shadows**: Soft, gentle shadows for depth
- **Border Radius**: Rounded corners (xl, 2xl, 3xl)

## License

Private — Happy Chatters Organization
