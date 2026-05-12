# Stephanie's Interactive 3D Personal Website

A cinematic, interactive personal portfolio built with modern web technologies to showcase engineering, creativity, and storytelling.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: React Three Fiber + Three.js + Drei
- **Animation**: Framer Motion + GSAP
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── LoadingScreen.tsx    # Loading animation
│   └── sections/
│       ├── LandingPage.tsx  # Landing section with hero
│       ├── Me.tsx           # About section (TODO)
│       ├── Summers.tsx      # Summers/timeline section (TODO)
│       ├── Projects.tsx     # Projects showcase (TODO)
│       ├── Experience.tsx   # Experience/timeline (TODO)
│       ├── Fashion.tsx      # Fashion/creativity section (TODO)
│       └── Contact.tsx      # Contact section (TODO)
├── lib/
│   ├── types.ts           # TypeScript type definitions
│   └── constants.ts       # Site-wide constants
└── hooks/
    └── useDarkMode.ts     # Dark mode hook

public/
├── assets/                # Images, videos, etc.
└── favicon.svg
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

### Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel
```

## Design Principles

✨ **Intentional** - Every animation serves a purpose
🌍 **Immersive** - Explore a world, not a resume
✨ **Elegant** - Minimal, refined aesthetic
❤️ **Human** - Personal and emotional
⚙️ **Technical** - Engineering visible through design
⚡ **Performant** - Smooth, responsive experience

## Creative Direction

- Warm cinematic futurism
- Engineering systems
- Nostalgic elements
- Elegant minimalism
- Atmospheric depth

## Next Steps

1. **Set up 3D scenes** - Create React Three Fiber components for each section
2. **Build section components** - Me, Summers, Projects, Experience, Fashion, Contact
3. **Implement animations** - GSAP scroll triggers and Framer Motion transitions
4. **Add interactive features** - 3D memory objects, hover effects, scroll storytelling
5. **Content population** - Fill in your actual projects, experiences, and stories
6. **Performance optimization** - Optimize 3D models, lazy load components
7. **Mobile responsiveness** - Ensure great mobile experience
8. **Testing & refinement** - Cross-browser testing, performance audit

## Key Features (Planned)

- [ ] Interactive 3D landing environment
- [ ] Scroll-triggered animations
- [ ] Memory archive system
- [ ] Project showcase with interactive demos
- [ ] Timeline/experience visualization
- [ ] Fashion portfolio integration
- [ ] Dark mode (implemented by default)
- [ ] Mobile-responsive design
- [ ] Sound effects & ambience (future)
- [ ] Music system with Spotify integration (future)

## Performance Goals

- Fast loading times
- High FPS smooth animations
- Mobile-friendly
- Optimized 3D rendering

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)

## License

Personal project - 2026

---

**Happy building! 🚀**
