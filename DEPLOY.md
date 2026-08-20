# Deploying glendaleanalytics.com (GitHub Pages)

The repo is pre-configured: the deploy workflow builds and publishes the site
automatically on every push to `main`, and `public/CNAME` tells GitHub Pages
the site lives at glendaleanalytics.com.

## 0. Move the workflow file into place (one time)

Security tooling prevents writing into `.github\workflows` remotely, so the
workflow file is at the project root as `deploy.yml`. Move it before pushing:

```
mkdir .github\workflows
move deploy.yml .github\workflows\deploy.yml
```

## 1. Push the code to GitHub (one time)

Create an empty repo on github.com (e.g. `glendale-analytics-site`, private or
public — Pages works on private repos only with a paid plan, so public is the
free option; the code contains nothing sensitive). Then, in this folder:

```
git init
git add .
git commit -m "Glendale Analytics website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/glendale-analytics-site.git
git push -u origin main
```

## 2. Turn on GitHub Pages (one time)

Repo → Settings → Pages → under "Build and deployment", set **Source: GitHub
Actions**. The deploy workflow will run on the push you just made (check the
Actions tab). The site will first be live at
`https://YOUR_USERNAME.github.io/glendale-analytics-site/`.

## 3. Connect the domain

Still in Settings → Pages, enter `glendaleanalytics.com` under **Custom
domain** and save. Check **Enforce HTTPS** once it's verified (can take a few
minutes to an hour).

## 4. Point DNS at GitHub (at Squarespace)

In Squarespace → Settings → Domains → glendaleanalytics.com → DNS settings,
replace the current Squarespace records with:

| Type  | Host | Value               |
|-------|------|---------------------|
| A     | @    | 185.199.108.153     |
| A     | @    | 185.199.109.153     |
| A     | @    | 185.199.110.153     |
| A     | @    | 185.199.111.153     |
| CNAME | www  | YOUR_USERNAME.github.io |

Delete the old Squarespace A/CNAME records for @ and www (leave any MX /
email records alone — those handle contact@glendaleanalytics.com mail).

DNS changes usually propagate within an hour, sometimes up to 24–48h. The
Squarespace site keeps serving until DNS flips, so there's no downtime window.

## 5. After it's live

- Keep the Squarespace subscription only if you still need it for email or
  the domain registration itself; cancel the website plan.
- Future edits: change the code, `git push` — the workflow rebuilds and
  deploys automatically in ~2 minutes.

## Contact form note

The contact form currently opens the visitor's email client pre-filled
(mailto) — that works on static hosting with zero setup, but is clunky for
some visitors. For true in-page submissions, create a free form at
formspree.io and point the form at it (a small change in
`src/components/Contact.js` — happy to make it when you have the form ID).
