# Trip2Go - Premium Travel Agency Website

**Live Website:** [https://trip2go.co.uk/](https://trip2go.co.uk/)

Trip2Go is a modern, high-performance travel agency website built with [Astro](https://astro.build). It offers premium travel packages, flight/hotel booking quotes, and document services, all delivered via a blazing fast, SEO-optimized interface.

## 🚀 Key Features

*   **Premium Package Pages**: Dedicated, immersive pages for destinations like Toronto, Paris, and Athens with pricing, itineraries, and galleries.
*   **Dynamic Booking Forms**: Integrated "Get a Quote" and "Contact Us" forms powered by **Web3Forms** for backend-free email delivery.
*   **Responsive Design**: Fully responsive, mobile-first layout utilizing **Tailwind CSS**.
*   **SEO Optimized**: Automatic Sitemap generation (`sitemap-index.xml`), semantic HTML, and fast load times.
*   **Interactive UI**: Smooth animations using GSAP and intuitive navigation.

## 🛠️ Tech Stack

*   **Framework**: [Astro](https://astro.build) (Static Site Generation)
*   **Styling**: Tailwind CSS
*   **Icons**: Astro Icon (Iconify)
*   **Forms**: Web3Forms (Email API)
*   **Animations**: GSAP (GreenSock)

## 🧞 Project Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds your production site to `./dist/` |
| `npm run preview` | Preview your build locally before deploying |

## 📦 Deployment

This project is configured for static deployment.

1.  Run `npm run build` to generate the `dist/` folder.
2.  Upload the contents of `dist/` to your hosting provider (Netlify, Vercel, FTP, etc.).
3.  **Environment Variables**: ensuring `PUBLIC_WEB3FORMS_KEY` is set in your local `.env` file during build.

## 📝 Configuration

*   **Sitemap**: Configured in `astro.config.mjs` with site URL.
*   **Server Config**: Includes critical `.htaccess` for HTTPS enforcement and error handling.
