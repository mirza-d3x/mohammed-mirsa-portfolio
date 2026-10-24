# Mohammed Mirsa — Personal Portfolio

An editorial-style personal portfolio website for **Mohammed Mirsa**, Lead Software Engineer specializing in cross-platform mobile and web applications, native Android/iOS platforms, and resilient product engineering.

Designed with an editorial, minimalist aesthetic: warm ivory, charcoal typography, neutral grey accents, and muted olive highlights.

---

## Design Philosophy

- **Mature & Professional:** Content-first presentation emphasizing verified engineering work, ownership, and technical leadership.
- **Strictly Grounded in Reality:** 100% of the experience, projects, skills, and dates are directly backed by Mohammed Mirsa's verified resume. Zero invented metrics or fake testimonials.
- **Editorial Typography:** Generous whitespace, clean visual hierarchy, centered 780px container, and subtle borders.
- **Light Theme Default:** Warm ivory background (`#F7F6F2`), charcoal primary text (`#20211F`), neutral secondary text (`#777873`), and muted olive accents (`#777B68`).

---

## Color Palette

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Main Background** | `#F7F6F2` | Warm ivory canvas |
| **Primary Text** | `#20211F` | Deep charcoal for headlines & body |
| **Secondary Text** | `#777873` | Balanced neutral grey for supporting copy |
| **Accent** | `#777B68` | Muted olive for subtle tags, buttons, & links |
| **Borders** | `#E5E3DC` | Thin dividers and container outlines |
| **Surfaces** | `#FFFFFF` | Cards and elevated containers |

---

## Directory Structure

```
Mirza_profile/
├── index.html            # Semantic HTML5 document with accessible navigation & metadata
├── css/
│   ├── style.css         # Design tokens, variables, typography, reset, and base layout
│   └── editorial.css     # Editorial project cards, career timeline, skills list, print styles
├── js/
│   ├── projects-data.js  # Verified technical case study data from resume
│   └── main.js           # Lightweight modal manager, scrollspy, copy utility, toast
└── README.md             # Project documentation
```

---

## Running Locally

Because this website uses zero build tools and zero external npm dependencies, it can be viewed immediately in any modern web browser.

### Option 1: Direct File Opening
Double-click `index.html` or open it with your favorite browser:
```bash
open index.html
```

### Option 2: Local Python HTTP Server
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## Deploying to Production

### 1. GitHub Pages
1. Push this folder to a GitHub repository (e.g. `username/portfolio`).
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`. Click **Save**.
4. Your site will be live at `https://<username>.github.io/<repo>/` in under 60 seconds.

### 2. Vercel
```bash
npx vercel deploy --prod
```

### 3. Netlify
Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop) or link your Git repository.
