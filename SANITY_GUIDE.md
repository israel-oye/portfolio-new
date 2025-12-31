# Sanity CMS Integration Guide

Since you are new to Sanity, this guide will walk you through setting up your project, connecting it to your portfolio, and populating your content.

## 1. Create a Sanity Project

1.  Go to [Sanity.io](https://www.sanity.io/) and sign up (free tier is very generous).
2.  Once logged in, create a new project from the dashboard or via CLI.
    *   **Recommended**: Use the CLI for easier setup.
    *   Open your terminal (not in the VS Code terminal running the dev server, open a new one).
    *   Run: `npm create sanity@latest`
    *   It might ask you to log in.
    *   When asked "Select project to use", choose **Create new project**.
    *   Give it a name (e.g., `portfolio-backend`).
    *   Use the default dataset configuration (`production`).
    *   **Important**: You don't need to initialize a new path or download the studio code since we already have the studio embedded in your Next.js app (`src/app/studio`). You just need the **Project ID**.

## 2. Get Your Credentials

1.  Go to [Sanity Manage](https://www.sanity.io/manage).
2.  Select your newly created project.
3.  Copy the **Project ID** displayed on the dashboard.
4.  Go to **Settings** > **API**.
5.  Scroll down to **CORS Origins**.
    *   Add `http://localhost:3000` (Allow credentials).
    *   Add your production URL (once you deploy to Vercel).
    *   *This allows your website to fetch data from Sanity.*

## 3. Connect to Your Portfolio

1.  In your VS Code project, create a file named `.env.local` in the root directory (same level as `package.json`).
2.  Add the following lines, replacing `YOUR_PROJECT_ID` with the ID you copied:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

3.  Restart your development server (`Ctrl+C` to stop, then `npm run dev`).

## 4. Populate Content

We have built an embedded Studio right into your website!

1.  Open your browser and go to: `http://localhost:3000/studio`
2.  You will see the Sanity Desk tool.
3.  Log in if prompted.
4.  You will see three content types on the left: **Project**, **Experience**, and **Tech Stack**.

### Step-by-Step Data Entry:

**A. Tech Stack (Do this first)**
Create entries for your skills so you can reference them in Projects and Experience.
*   **Name**: Python
*   **Category**: Language
*   **Icon**: Upload an SVG or PNG icon (e.g., from [Simple Icons](https://simpleicons.org/)).

**B. Experience**
Add your work history.
*   **Company**: ScalaWares
*   **Role**: Backend Developer
*   **Start Date**: 2025-08-01
*   **Technologies**: Select "Python", "Django" (that you created in step A).

**C. Projects**
Add your portfolio projects.
*   **Title**: Stash-It
*   **Slug**: Click "Generate" (creates `stash-it`).
*   **Main Image**: Upload a screenshot.
*   **Technologies**: Select "Flask", "Backblaze B2".

## 5. Verify

Once you publish your content in the Studio:
1.  Go back to the home page `http://localhost:3000`.
2.  Refresh the page.
3.  Your real data from Sanity should now replace the fallback/dummy data!

## Troubleshooting

*   **"Fetch failed" error**: Ensure you added `http://localhost:3000` to the CORS origins in Sanity Manage.
*   **Images not showing**: Make sure you uploaded images in the Studio and published the documents.
