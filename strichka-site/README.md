# Strichka-site (static)

## Run locally (macOS/Linux/Windows)
From this folder, start a simple local server.

### Option A: Python
python3 -m http.server 8080

Then open:
http://localhost:8080/

### Option B: Node (if you have it)
npx serve .

## Add news posts
Edit: data/posts.json
- Add a new object to the array
- Use unique "id"
- Provide title/excerpt/body in both "uk" and "en"


## Admin panel (login + add news) — Decap CMS (Netlify CMS)

This site is static, so a real admin panel needs a content backend.
The simplest working option is **Decap CMS + Netlify Identity** (no server code).

### 1) Put the site on GitHub
- Create a GitHub repo
- Upload all files from this folder (commit to `main`)

### 2) Deploy on Netlify
- New site from Git
- Choose your repo
- Publish directory: `.`

### 3) Enable Identity + Git Gateway (this gives you login)
- Netlify dashboard → **Identity** → Enable
- Identity → **Registration preferences** → set to "Invite only" (recommended)
- Identity → **Services** → Enable **Git Gateway**
- Invite your email in Identity → Users

### 4) Open the admin
After deploy:
- https://YOUR-SITE.netlify.app/admin/

### 5) Add/edit news posts
In Admin → "Site data" → "News posts"
- Add new item in the list
- Save → Publish
It will update `data/posts.json`, and your website news will update.

Notes:
- Localhost admin won't work fully (login requires Netlify Identity).
- For Cloudflare Pages, Decap CMS needs a separate auth service; Netlify is easiest.
