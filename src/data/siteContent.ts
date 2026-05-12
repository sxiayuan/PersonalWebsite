export const SITE_CONTENT = {
  hero: {
    name: 'Stephanie Xia',
    tagline: 'Engineer • Builder • Creator',
    description:
      'Exploring growth through creative engineering. This is a cinematic journey through memories, projects, and evolving identity.',
    primaryCta: {
      label: 'Explore',
      href: '#me',
    },
    secondaryCta: {
      label: 'Get in Touch',
      href: '#contact',
    },
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Me', href: '#me' },
    { label: 'Summers', href: '#summers' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Fashion', href: '#fashionista' },
    { label: 'Contact', href: '#contact' },
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
