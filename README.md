# ORBIT – Harshavardhan A V | Futuristic Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF.svg)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160-black.svg)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **"Exploring Technology. Engineering Possibilities."**  
> *MCA Student | Software Developer | AI & Machine Learning Enthusiast | Big Data Analytics Explorer*

---

## 🌌 Project Overview

**ORBIT** is a production-grade, futuristic personal portfolio web application built for **Harshavardhan A V**. Conceived around a digital universe aesthetic, it places the engineer at the center of an interactive 3D computing landscape.

Unlike standard static templates, ORBIT is a fully responsive, module-driven application featuring:
- **Interactive 3D WebGL Hero**: Built with Three.js, React Three Fiber, and Drei, with orbiting satellites, particle clouds, and mouse-reactive parallax.
- **Strict Academic & Industry Honesty**: True academic credentials (MCA at Sapthagiri NPS University CGPA: 8.64, BCA Kristu Jayanti CGPA: 6.84), corporate Genpact ServiceNow ITSM internship timeline, and real project statuses without fabricated metrics.
- **Dynamic Project Showcase**: Interactive filtering across AI/ML, Big Data, Full Stack, Data Analytics, and Web Development with comprehensive architectural modal breakdowns.
- **Centralized Data Architecture**: All content is cleanly organized in `src/data/` for instantaneous, zero-code updates.
- **Production-Ready Contact Channel**: Two-column contact suite with form validation, anti-spam honeypot, and Formspree integration.
- **Resume Distribution System**: Direct PDF download, viewer, and in-place document replacement.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React.js 18, Vite |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Custom Cyberpunk Glassmorphism |
| **3D & Visual Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`) |
| **Animations & Interactions** | Framer Motion, Smooth Scroll, Scroll Progress Spy |
| **Icons & Typography** | Lucide React, Space Grotesk, Inter, JetBrains Mono |
| **Routing** | React Router DOM v6 (Hash anchors + dedicated `/project/:id` and `/404` pages) |
| **Deployment Target** | Vercel / GitHub Pages / Netlify |

---

## 📁 System Architecture & Directory Structure

```text
Harsha Portfolio/
├── public/
│   ├── certificates/             # Place your certificate files/images here
│   ├── images/                   # Place your profile photograph (profile.jpg) here
│   ├── resume/
│   │   ├── Harshavardhan_AV_Resume.pdf  # Replace with your actual resume PDF
│   │   └── README.txt
│   └── favicon.svg               # Futuristic orbital SVG favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with mobile drawer & active spy
│   │   ├── Footer.jsx            # Multi-column footer with social links & modules
│   │   ├── Hero3D.jsx            # Interactive 3D Canvas with orbital rings & particles
│   │   ├── ProjectCard.jsx       # Glassmorphism project cards with tech tags
│   │   ├── ProjectModal.jsx      # In-depth architectural modal
│   │   ├── SkillCard.jsx         # Technical skills dashboard with honest levels
│   │   ├── EducationTimeline.jsx # Vertical animated academic timeline
│   │   ├── ExperienceTimeline.jsx# Genpact ServiceNow ITSM internship showcase
│   │   ├── CertificationCard.jsx # 9 verified certifications with credentials
│   │   ├── AchievementCard.jsx   # Fest honors & leadership appointments
│   │   ├── ResumeViewer.jsx      # Resume download, preview, and update guidance
│   │   ├── ContactForm.jsx       # Validated contact form + mail client fallback
│   │   ├── ScrollProgress.jsx    # Glowing progress bar
│   │   └── BackToTop.jsx         # Floating back-to-top button
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Flagship unified single-page portal
│   │   ├── ProjectDetails.jsx    # Standalone direct project detail view
│   │   └── NotFound.jsx          # Futuristic deep-space 404 page
│   │
│   ├── data/
│   │   ├── personal.js           # Identity, taglines, about intro, and highlights
│   │   ├── education.js          # Exact degree dates, CGPA, and institutions
│   │   ├── skills.js             # Categorized skill badges and competencies
│   │   ├── experience.js         # Genpact internship responsibilities & ITIL
│   │   ├── projects.js           # AI/ML, Big Data, Full Stack projects & datasets
│   │   ├── certifications.js     # 9 certifications & credential links
│   │   └── achievements.js       # ADVAYA 2026, Synchronize, XACTITUDE, etc.
│   │
│   ├── styles/
│   │   └── global.css            # Cyberpunk glassmorphism, neon glows & scrollbars
│   │
│   ├── App.jsx                   # React Router routing configuration
│   └── main.jsx                  # Application entry point
│
├── index.html                    # SEO tags, fonts, and orbital metadata
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .env.example
└── README.md
```

---

## 🚀 Getting Started (VS Code & Local Development)

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) installed:
```bash
node -v
npm -v
```

### 2. Installation
Open the project directory in VS Code or your terminal:
```bash
# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 4. Create Production Build
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 📝 Updating Your Content (No Coding Required)

All personal and academic details are isolated inside the `src/data/` folder:

| File | What to Update |
|---|---|
| `src/data/personal.js` | Update your bio, email, LinkedIn, or GitHub URL. |
| `src/data/education.js` | Academic details, CGPA updates, or graduating status. |
| `src/data/skills.js` | Add new frameworks, libraries, or adjust experience badges. |
| `src/data/experience.js` | Add new employment, internships, or responsibilities. |
| `src/data/projects.js` | Update project statuses, GitHub repositories, live demo URLs, or ML accuracy results once validated. |
| `src/data/certifications.js` | Add verification links and credential URLs. |
| `src/data/achievements.js` | Add new competitive awards and fest accomplishments. |

### How to Add Your Photograph & Resume:
1. **Profile Photograph**: Save your picture as `profile.jpg` in `public/images/profile.jpg`.
2. **Resume PDF**: Save your latest resume as `Harshavardhan_AV_Resume.pdf` in `public/resume/Harshavardhan_AV_Resume.pdf`.

---

## 🌐 GitHub & Vercel Deployment Guide

### Deploying to GitHub
```bash
# Initialize Git repository
git init

# Stage all files
git add .

# Commit changes
git commit -m "Initial release of ORBIT - Harshavardhan A V Portfolio"

# Set main branch
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/orbit-portfolio.git

# Push to GitHub
git push -u origin main
```

### Deploying to Vercel (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your GitHub repository `orbit-portfolio`.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Your portfolio will be live with free global CDN and SSL!

---

## 🔒 Security & Privacy Notice
- Never commit private API secrets or credentials to GitHub.
- Form submissions use public Formspree endpoints or direct `mailto:` links, preventing token leakage.

---

## 👨‍💻 Author & Contact
- **Owner**: Harshavardhan A V
- **Email**: [harshavardhan.a.v007@gmail.com](mailto:harshavardhan.a.v007@gmail.com)
- **LinkedIn**: [harsha-vardhan-a05b51316](https://www.linkedin.com/in/harsha-vardhan-a05b51316)
- **Location**: Bengaluru, India

*Built with passion, precision, and futuristic technology.*
