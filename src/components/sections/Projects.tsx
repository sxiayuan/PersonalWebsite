import { SITE_CONTENT } from '@/data/siteContent';

export default function ProjectsSection() {
  const { title, cards } = SITE_CONTENT.sections.projects;

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat px-4 py-10 pb-20 md:px-8 md:pb-28"
      style={{ backgroundImage: "url('/projects-background.jpg')" }}
    >
      <h2 className="absolute left-6 top-8 text-4xl font-light tracking-wide text-white md:text-6xl">
        {title.toUpperCase()}
      </h2>

      <div className="flex w-full justify-end pt-14 md:pt-6">
        <div className="grid w-full gap-x-10 gap-y-14 md:w-[56%] md:gap-x-12 md:grid-cols-2">
          {cards.map((project) => (
            <article
              key={`${project.name}-${project.date}`}
              className="w-full border border-[#d2d2d2] bg-[#ececec] p-3 sm:p-4 md:p-5 shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
            >
              <div
                aria-label={project.imageAlt}
                className="aspect-[16/8.8] w-full border border-[#cfcfcf] bg-gradient-to-br from-[#d2d2d2] via-[#bcbcbc] to-[#a9a9a9] sm:aspect-[16/8.7]"
              >
                <div className="flex h-full items-center justify-center text-base font-medium text-white/90">
                  Photo Placeholder
                </div>
              </div>

              <div className="mt-7 px-3 pb-4 pt-1 sm:mt-8 sm:px-4 sm:pb-5 md:px-5 md:pb-6">
                <div className="flex items-start justify-between gap-4 pr-1 sm:gap-5 sm:pr-2">
                  <h3 className="text-[21px] font-semibold leading-tight text-[#111111] md:text-[26px]">
                    {project.name}
                  </h3>
                  <p className="shrink-0 pl-3 pr-1 text-[22px] font-semibold leading-none text-[#888888] md:pr-2 md:text-[28px]">
                    {project.date}
                  </p>
                </div>

                <p className="mt-6 text-left text-[15px] leading-relaxed text-[#7a7a7a] sm:mt-7">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
