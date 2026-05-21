export default function FashionSection() {
  const placeholderCards = Array.from({ length: 6 }, (_, index) => index + 1);
  const archiveCards = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="w-full bg-[#e9e9e9] py-8 md:py-10">
      <section id="fashionista" className="-min-h-[200vh] w-full">
        <article className="relative min-h-[200vh] w-full px-4 pb-24 pt-8 md:px-0 md:pb-[18vh] md:pt-0">
          <div className="pointer-events-none absolute left-0 right-0 top-[10.4%] hidden h-px rotate-[-0.8deg] bg-[#b8b8b8] md:block" />
          <div className="pointer-events-none absolute left-[17.8%] top-0 hidden h-full w-px rotate-[0.7deg] bg-[#b8b8b8] md:block" />

          <header className="md:absolute md:left-[22%] md:top-[5.4%]">
            <h2 className="text-5xl font-normal tracking-tight text-black md:text-[64px]">FASHIONista</h2>
          </header>

          <div className="mt-16 pb-10 md:absolute md:bottom-[40%] md:right-[8%] md:mt-0 md:pb-0">
            <div className="flex w-full justify-start">
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-auto md:grid-cols-3 md:gap-x-[4.1vw] md:gap-y-[4.1vh] lg:w-auto lg:grid-cols-3 lg:gap-x-[4.1vw] lg:gap-y-[4.1vh]">
                {placeholderCards.map((card) => (
                  <div
                    key={card}
                    aria-label={`Outfit placeholder ${card}`}
                    className="aspect-square w-full rounded-sm border border-[#bebebe] bg-[#cfcfcf] md:w-[18.7vw] md:aspect-[8/9] lg:w-[18.7vw] lg:aspect-[8/9]"
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

    
    </div>
  );
}
