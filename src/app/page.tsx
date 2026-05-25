import { HeroSection } from '@/components/home/HeroSection';
import { PracticeAreasSummary } from '@/components/home/PracticeAreasSummary';
import { TeamTeaser } from '@/components/home/TeamTeaser';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PracticeAreasSummary />
      <TeamTeaser />
      <CtaSection />
    </>
  );
}
