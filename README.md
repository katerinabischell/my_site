# Katerina Bischel — Personal Portfolio

Personal portfolio website for Katerina Bischel, Environmental Scientist & Water Resources Specialist.

**Live URL:** https://katerinabischel.github.io/my_site

## Pages

| Page | File | Background |
|------|------|------------|
| Home | `index.html` | panorama_4.jpeg |
| About | `about.html` | panorama_1.jpeg |
| Resume | `resume.html` | panorama_2.jpeg |
| Projects | `projects.html` | panorama_3.jpeg |
| Research | `research.html` | panorama_5.jpeg |
| Writing | `writing.html` | panorama_6.jpeg |
| Contact | `contact.html` | panorama_7.jpeg |

## Tech Stack

Pure HTML / CSS / JavaScript — no frameworks, no build step. Deploys directly to GitHub Pages as static files.

**Design features:**
- Glassmorphism cards with `backdrop-filter: blur`
- Particle canvas animation (home page)
- Scroll-triggered fade-in via `IntersectionObserver`
- Parallax panorama hero backgrounds
- Typewriter animation on home headline
- Fully responsive with hamburger mobile menu
- Google Fonts: Space Grotesk + Outfit

## Assets

All assets live in the repository root alongside HTML files:
- `panorama_1.jpeg` – `panorama_9.jpeg` — background panoramas
- `profile_photo.PNG` — circular hero photo
- `Katerina_Bischel_ Resume.pdf` — primary resume
- `Bischel_resume_AMS_format_2pp.docx` — AMS format resume
- `diploma.pdf` — academic credential
- `River Remedy Final Report.pdf` — project report
- `whitewater_river_watershed_management_plan.pdf` — watershed plan
- `senior_thesis.pdf` — undergraduate research
- `biodegradation_writing_sample.pdf` — technical writing

## Manual Steps Before Launch

1. **Education** — fill in `[Field]`, `[University]`, `[Year]` placeholders in `about.html`
2. **Email** — replace `[your.email@domain.com]` in `contact.html` with real address
3. **Master's thesis** — add `masters_thesis.pdf` to the folder and update `research.html`

## Deployment

```bash
cd ~/Desktop/my_website
git init
git remote add origin https://github.com/katerinabischel/my_site.git
git add .
git commit -m "Initial portfolio site — Katerina Bischel"
git branch -M main
git push -u origin main
```

Then in GitHub → repo Settings → Pages → Source: **main branch, / (root)**.
