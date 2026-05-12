import Navigation from '@/components/Navigation';
import LandingPage from '@/components/sections/LandingPage';
import MeSection from '@/components/sections/Me';
import SummersSection from '@/components/sections/Summers';
import ProjectsSection from '@/components/sections/Projects';
import ExperienceSection from '@/components/sections/Experience';
import FashionSection from '@/components/sections/Fashion';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <LandingPage />
      <MeSection />
      <SummersSection />
      <ProjectsSection />
      <ExperienceSection />
      <FashionSection />
      <ContactSection />
    </main>
  );
}
