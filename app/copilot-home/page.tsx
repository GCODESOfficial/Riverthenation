'use client';

/**
 * Copilot Home Page - Figma Design Reproduction
 * 
 * This is an isolated, independent implementation of the Revive the Nations
 * home page from the Figma design (node-id 2:2073)
 * 
 * No existing files have been modified. All components live here.
 */

import CopilotNavigation from './components/Navigation';
import CopilotHero from './components/Hero';
import QuoteCard from './components/QuoteCard';
import WhoWeAreSection from './components/WhoWeAre';
import MissionVisionSection from './components/MissionVision';
import CoreActivitiesSection from './components/CoreActivities';
import RevivingHeartsSection from './components/RevivingHearts';
import StoriesOfTransformationSection from './components/StoriesOfTransformation';
import ConnectWithUsSection from './components/ConnectWithUs';
import CopilotFooter from './components/Footer';

export default function CopilotHomePage() {
  return (
    <div className="min-h-screen bg-[#e0d6ca]">
      {/* Fixed Navigation */}
      <CopilotNavigation />

      {/* Hero Section */}
      <CopilotHero />

      {/* Main Content Container */}
      <div className="bg-[#faf7f3]">
        {/* Quote Card Section */}
        <div className="mx-auto max-w-6xl px-6 pt-24 lg:px-12">
          <QuoteCard />
        </div>

        {/* Who We Are Section */}
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
          <WhoWeAreSection />
        </div>

        {/* Mission & Vision Section */}
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
          <MissionVisionSection />
        </div>

        {/* Core Activities Section */}
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
          <CoreActivitiesSection />
        </div>

        {/* Reviving Hearts Section */}
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">
          <RevivingHeartsSection />
        </div>

        {/* Stories of Transformation Section */}
        <StoriesOfTransformationSection />

        {/* Connect With Us Section */}
        <ConnectWithUsSection />
      </div>

      {/* Footer */}
      <CopilotFooter />
    </div>
  );
}
