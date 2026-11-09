# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ef9369ff-9201-4b04-86eb-83e91fe5567b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ef9369ff-9201-4b04-86eb-83e91fe5567b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### External hosting on o2switch (cbleu.re)

After rebuilding the static site, upload the complete contents of `dist/` to the site’s document root, including the hidden `.htaccess` file. Vite copies `public/robots.txt`, `public/sitemap.xml` and `public/.htaccess` into `dist/`.

The `.htaccess` redirects HTTP to HTTPS with a permanent 301 before handling SPA routes. Enable a valid SSL certificate for cbleu.re (and www.cbleu.re if used) in the hosting control panel. This Apache file has no effect on Lovable hosting.

After deployment, verify that `http://cbleu.re/robots.txt` redirects to `https://cbleu.re/robots.txt`, which returns status 200 and plain text. Verify the same redirect for the homepage and legal pages, and refresh each legal page directly. Paths and query strings should be preserved.

In Google Search Console, submit `https://cbleu.re/sitemap.xml` under Sitemaps, not `robots.txt`. The robots file tells crawlers which URLs they may fetch; it is not a page that needs indexing. It currently allows all crawlers. If Google still reports a robots fetch failure after deployment, check the exact error and the hosting firewall or bot protection: a successful request here does not prove that every Googlebot request succeeds.

The privacy policy is a draft based on the current site. Before publication, confirm actual retention periods, technical providers and processing practices. The visible contact form currently has no sending service; direct visitors to email or telephone until it is connected.

Simply open [Lovable](https://lovable.dev/projects/ef9369ff-9201-4b04-86eb-83e91fe5567b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
