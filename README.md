# Israel Oyeboade - Software Engineer Portfolio

A modern, high-performance portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Sanity.io**. This project showcases my work as a Senior Backend & Full Stack Engineer, featuring dynamic content management, smooth animations, and a responsive design.

## 🚀 Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **CMS:** [Sanity.io](https://www.sanity.io/) (Headless CMS)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** [Figtree](https://fonts.google.com/specimen/Figtree) & [Monoton](https://fonts.google.com/specimen/Monoton)

## ✨ Features

-   **Dynamic Content:** Projects, Work Experience, Tech Stack, and Blog posts are managed via Sanity Studio.
-   **Responsive Design:** Fully optimized for all device sizes.
-   **Dark Mode:** Sleek dark-themed UI with vibrant accents.
-   **Interactive UI:** Smooth scroll animations and hover effects using Framer Motion.
-   **Embedded Studio:** Sanity Studio embedded directly at `/studio` for easy content updates.

## 🛠️ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/israel-oye/portfolio-new.git
    cd portfolio-new
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env.local` file in the root directory and add your Sanity credentials:

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the site.
    Access the CMS at [http://localhost:3000/studio](http://localhost:3000/studio).

## 📝 Content Management (Sanity)

This project uses Sanity.io for content management. The schemas are defined in `src/sanity/schemaTypes/`.

-   **Projects:** Add featured projects with images, descriptions, and links.
-   **Experience:** Manage work history (currently hardcoded fallback available).
-   **Tech Stack:** Define technologies with categories and icons.
-   **Blog:** Create and publish blog posts.
-   **Settings:** Upload your resume PDF.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/).

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add the Environment Variables in Vercel settings.
4.  Deploy!
