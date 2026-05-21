import { SITE_CONTENT } from '@/data/siteContent';

export default function ContactSection() {
  const { title, intro } = SITE_CONTENT.sections.contact;
  const { socialLinks } = SITE_CONTENT;

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center">
      <article className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-warmGold mb-8">{title}</h2>
        <p className="text-xl text-gray-300 mb-12">{intro}</p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href={`mailto:${socialLinks.email}`}
            className="px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition"
          >
            Email
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition"
          >
            GitHub
          </a>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-warmGold text-warmGold rounded hover:bg-warmGold hover:text-warmDark transition"
          >
            Resume
          </a>
        </div>
      </article>
    </section>
  );
}
