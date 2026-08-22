# Bethel Homemade Cakes 🎂

A modern, elegant, responsive website for a homemade cake business — built with plain **HTML, CSS, and JavaScript** (no frameworks, no build step).

![Made with HTML CSS JS](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-6F4E37)

## Overview

Bethel Homemade Cakes is a premium, warm, minimal bakery landing page designed to feel handcrafted rather than templated — featuring a custom "frosting drip" section divider, scroll-reveal animations, and a fully responsive layout from mobile to desktop.

## Features

- 🎨 Custom brand system — warm cream background, chocolate brown & caramel accents, soft pink highlights
- 📱 Fully responsive, mobile-first layout
- ✨ Scroll-reveal animations (IntersectionObserver, no dependencies)
- 🧭 Sticky glassmorphism navigation with mobile menu and search toggle
- 🍰 Sections: Hero, Featured Categories, Why Choose Us, Best Sellers, Testimonials, Instagram-style Gallery, FAQ accordion, Footer
- 💬 Floating WhatsApp & Call buttons, back-to-top button
- 🔍 SEO meta tags + JSON-LD schema markup for local bakery business
- 🖋️ Playfair Display + Poppins typography via Google Fonts

## Project Structure

```
petal-and-crumb/
├── index.html      # Page structure, content sections, SEO meta tags
├── style.css       # Design system, layout, responsive breakpoints
└── script.js       # Content data, rendering, interactivity
```

## Getting Started

No installation or build tools required.

1. Clone or download this repository
2. Open `index.html` directly in your browser

   **or**, for the most reliable experience (recommended, since some browsers restrict local file requests), serve it with a simple local server:

   ```bash
   # Python
   python3 -m http.server 8000

   # Node
   npx serve .
   ```

3. Visit `http://localhost:8000` in your browser

## Customization

| What | Where |
|---|---|
| Brand colors | CSS custom properties at the top of `style.css` (`:root`) |
| Cake categories, best sellers, testimonials, FAQs, gallery images | Data arrays at the top of `script.js` |
| WhatsApp / call number | `index.html` (floating buttons + footer) |
| Contact details, address | Footer section in `index.html` and the JSON-LD schema block in `<head>` |
| Fonts | Google Fonts `<link>` in `index.html`, font-family rules in `style.css` |

Product and gallery images currently use Unsplash placeholder photography — replace the `img` URLs in `script.js` with your own product photos before launch.

## Roadmap

This repository currently covers the **Home page** only. Planned/possible additions in the same design system:

- [ ] About Us page
- [ ] Cake Collection page (full category browsing + product detail)
- [ ] Custom Cake Builder
- [ ] Gallery page with filtering + lightbox
- [ ] Contact page with form + map
- [ ] Backend (orders, enquiries, admin dashboard) — out of scope for a static HTML/CSS/JS site; would require a server-side stack (e.g. Node.js + a database)

## License

Free to use and modify for your own bakery or business.
