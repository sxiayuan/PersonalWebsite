import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/sections/Projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-y-auto pt-16">
      <Navigation />
      <ProjectsSection />
    </main>
  );
}
