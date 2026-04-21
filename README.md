# Katerina Bischel — Portfolio Website

Live: **https://katerinabischel.github.io/my_site/index.html**

Personal portfolio site for Katerina Bischel, Environmental Scientist at Applied Marine Sciences. M.E.S.M. 2026, UC Santa Barbara Bren School. Water Resources · Pollution Remediation · Data Science.

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
- Animated employment badge (pulsing glow)
- Grouped skills grid (Technical / Environmental / Professional)
- Research feature sections with citation block

## Assets

All assets live in the repository root alongside HTML files:
- `panorama_1.jpeg` – `panorama_9.jpeg` — background panoramas
- `profile_photo.PNG` — circular hero photo
- `bee_model.png` — YOLOv8 pollinator detection model output
- `Bischel_resume_AMS_format_2pp.docx` — primary AMS format resume (featured)
- `Katerina_Bischel_ Resume.pdf` — general format resume
- `diploma.pdf` — UCSB academic credential
- `River Remedy Final Report.pdf` — graduate capstone report
- `whitewater_river_watershed_management_plan.pdf` — watershed management plan
- `senior_thesis.pdf` — undergraduate thesis
- `biodegradation_writing_sample.pdf` — technical writing sample

## Deployment

```bash
git add .
git commit -m "Major content expansion — Pilcomayo paper, Applied Marine Sciences, education, bee model, resume swap"
git push origin main
```

GitHub Pages serves from the `main` branch root.
