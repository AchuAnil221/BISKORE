import HeroSection from '@/components/home/HeroSection';
import GroupSnapshot from '@/components/home/GroupSnapshot';
import SectorsGrid from '@/components/home/SectorsGrid';
import HowWeWork from '@/components/home/HowWeWork';
import WhyBiskore from '@/components/home/WhyBiskore';
import VisionSection from '@/components/home/VisionSection';
import LeadershipCta from '@/components/home/LeadershipCta';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GroupSnapshot />
      <SectorsGrid />
      <HowWeWork />
      <WhyBiskore />
      <VisionSection />
      <LeadershipCta />
    </main>
  );
}
