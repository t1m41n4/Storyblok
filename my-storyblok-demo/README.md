

# NextGen Tech Blog

A simple, responsive blog built with Next.js and Storyblok CMS. Content is managed in Storyblok; the frontend uses Tailwind CSS for styling.

## Getting Started

### Install dependencies

```bash
cd my-storyblok-demo
npm install
# or
yarn install
```

### Set up the Storyblok preview token

Add your preview token to `.env.local`.

The preview token is public and safe to expose in client-side code.

### Run the development server

```bash
npm run dev
# or
yarn dev
```

### Run Storyblok proxy (for real-time visual editing in Storyblok UI)

```bash
yarn proxy
```

Only needed for the real-time visual editor (Live Preview) in the Storyblok UI.
The proxy runs at http://localhost:3010

Open http://localhost:3000 to view the blog locally.

## Project Structure

```
storyblok/           # Git repository root
	my-storyblok-demo/ # Next.js app
		components/    # React UI components
		pages/         # Next.js pages
		public/        # Static assets
		styles/        # Tailwind/global styles
		.env.local     # Environment variables
		package.json   # Dependencies
		README.md      # Documentation
```

## Usage

- All content is managed in Storyblok CMS.
- Components are mapped from Storyblok to React components in /components.
- The blog auto-fetches and renders Storyblok stories.
- Preview changes in real-time using your preview token.

## Tech Stack

- Next.js (v12.3.4) ← (update if you’re on a newer version)
- React
- Storyblok CMS
- Tailwind CSS

**Notes:**
- Run all development commands inside my-storyblok-demo.
- Commit and push from the storyblok folder (where Git is initialized).
