export const SITE_CONTENT = {
  hero: {
    name: 'Stephanie Xia',
    tagline: 'Engineer • Builder • Creator',
    description:
      'Exploring growth through creative engineering. This is a cinematic journey through memories, projects, and evolving identity.',
    primaryCta: {
      label: 'Explore',
      href: '/me',
    },
    secondaryCta: {
      label: 'Get in Touch',
      href: '/reach-out',
    },
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Me', href: '/me' },
    { label: 'Summers', href: '/summers' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Fashion', href: '/fashionista' },
    { label: 'Contact', href: '/reach-out' },
  ],
  sections: {
    me: {
      title: 'About Me',
      intro:
        'Building products and systems that balance technical depth with human-centered storytelling.',
      points: [
        'Identity statement and the builder mindset',
        'Engineering interests and systems thinking',
        'Startup curiosity and product execution',
        'Themes: AI, robotics, product thinking, storytelling, entrepreneurship',
      ],
    },
    summers: {
      title: 'Summers',
      intro:
        'A memory archive from 2023 through 2025 that documents experimentation, growth, and identity formation.',
      points: [
        'Each summer as a chapter with a clear growth theme',
        'Environmental storytelling that feels cinematic but readable',
        'Scroll-based transitions with intentional pacing',
        'Interactive memory objects for photos and details',
      ],
      slides: [
        {
          yearLabel: 'summer 2023',
          heading: 'summer to me ........',
          body:
            'Write your 2023 story here.\nWhat changed?\nWhat did you build?\nWhat did you learn?',
        },
        {
          yearLabel: 'summer 2024',
          heading: 'summer to me ........',
          body:
            'Write your 2024 story here.\nMoments, projects, and growth.\nMake this as personal as you want.',
        },
        {
          yearLabel: 'summer 2025',
          heading: 'summer to me ........',
          body:
            'Write your 2025 story here.\nYou can replace this text directly in siteContent.ts.',
        },
      ],
    },
    projects: {
      title: 'Projects',
      intro:
        'Technical work presented with context, tradeoffs, and outcomes rather than only screenshots.',
      points: [
        'Project cards with problem, solution, and process',
        'Tech stack, architecture decisions, and constraints',
        'Challenges, iterations, and measurable outcomes',
        'Direct links to demos and repositories',
      ],
      cards: [
        {
          name: 'Lotus',
          date: "Mar '26",
          description:
            'A web application that turns any book synopsis into a motion, high-quality trailer. Allows users to edit film manually and through chat box prompting.',
          imageAlt: 'Lotus project photo placeholder',
        },
        {
          name: 'Lost on the Line',
          date: "Nov '25",
          description:
            'Interactive, multiplayer game that features live changes. Players must solve 3 stages of puzzle to escape being trapped in the NYC subway.',
          imageAlt: 'Lost on the Line project photo placeholder',
        },
        {
          name: 'Mimicoo',
          date: "Oct '25",
          description:
            'AI speech disorder screening tool for children ages 0-5. Detects speech pattern anomalies and provides visual analytics and clinical referral support.',
          imageAlt: 'Mimicoo project photo placeholder',
        },
        {
          name: 'Arduino: Autonomous Path-Finding Robot',
          date: "Aug '25",
          description:
            'Built and coded a line tracker robot that can avoid obstacles using sensors. Won 1st place at University of Toronto CREATE Program 2026 Cohort.',
          imageAlt: 'Autonomous path-finding robot project photo placeholder',
        },
        {
          name: 'Proactive',
          date: "March '25",
          description:
            'All-in-one productivity app that tracks calendars, to-do lists, and habit goals.',
          imageAlt: 'Proactive project photo placeholder',
        },
      ],
    },
    experience: {
      title: 'Experience',
      intro:
        'A timeline of execution, leadership, and systems work across internships, teams, and initiatives.',
      points: [
        'Timeline layout with clear chronology and scope',
        'SHAD, FBLC, Finance International, VEX Robotics, and leadership highlights',
        'Skills and ownership called out per role',
        'Subtle motion only where it improves comprehension',
      ],
    },
    fashion: {
      title: 'Fashion & Creativity',
      intro:
        'A multidimensional creative lane that complements engineering through visual storytelling and editorial direction.',
      points: [
        'Magazine-inspired layout and curated collections',
        'Thoughtful hover interactions and transitions',
        'Runway-inspired motion with restrained styling',
        'Confidence, artistic expression, and identity',
      ],
    },
    contact: {
      title: "Let's Build Something Cool",
      intro:
        'If you are hiring, collaborating, or just want to connect, reach out directly through any channel below.',
    },
  },
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    resume: '/resume.pdf',
    email: 'stephanie@example.com',
  },
} as const;
