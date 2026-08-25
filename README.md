# Safwat Khan Portfolio Website

Static, deployment-ready portfolio site for the Mimetic UI/UX application.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/`

## Fastest DigitalOcean deployment

### Option 1 — DigitalOcean App Platform (recommended)
1. Unzip this folder.
2. Create a new GitHub repository (for example `portfolio`).
3. Upload the files in this folder to the repository root.
4. In DigitalOcean: **Create → App Platform**.
5. Connect the GitHub repo.
6. DigitalOcean should detect this as a static site.
7. Build command: leave blank.
8. Output directory: `/` or repo root.
9. Deploy.
10. DigitalOcean gives you a public `ondigitalocean.app` URL. Send that URL to Coleman.

### Option 2 — Existing Droplet
Upload the folder contents to your web root (commonly `/var/www/html`) and serve with nginx.

Example:
```bash
scp -r * root@YOUR_SERVER_IP:/var/www/html/
```

## Before sending
- Open the site on desktop and mobile.
- Verify GitHub, LinkedIn and email links.
- Replace any wording you want personalized.
- If you have a custom domain, point it to the DigitalOcean deployment after the site is live.
