import { SITE_CONTENT } from '@/data/siteContent';

export default function ProjectsSection() {
  const { title, intro, points } = SITE_CONTENT.sections.projects;

  return (
    <section id="projects" className="min-h-screen w-full bg-gradient-to-b from-warmDark to-gray-900 flex items-center justify-center">
      <article className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-warmGold mb-8">{title}</h2>
        <p className="text-xl text-gray-300 leading-relaxed">{intro}</p>
        <ul className="list-disc list-inside mt-6 space-y-2 text-lg text-gray-400">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
