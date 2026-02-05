import { CustomCursor } from '@/app/components/CustomCursor';
import { ModernNavigation } from '@/app/components/ModernNavigation';
import { AnimatedHero } from '@/app/components/AnimatedHero';
import { AnimatedAbout } from '@/app/components/AnimatedAbout';
import { AnimatedProjects } from '@/app/components/AnimatedProjects';
import { AnimatedTestimonials } from '@/app/components/AnimatedTestimonials';
import { AnimatedContact } from '@/app/components/AnimatedContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden cursor-none">
      <CustomCursor />
      <ModernNavigation />
      
      <main id="home">
        <AnimatedHero />
        <AnimatedAbout />
        <AnimatedProjects />
        <AnimatedTestimonials />
        <AnimatedContact />
      </main>
    </div>
  );
}
