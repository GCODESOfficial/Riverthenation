'use client';

import Image from 'next/image';

/**
 * Hero Section Component
 * Full-screen hero with background image, gradient overlay, and CTA
 * From Figma: hero frame (node-id 2:2178)
 */
export default function CopilotHero() {
  return (
    <section className="relative w-full h-screen pt-24 overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/copilot-assets/hero.jpg"
        alt="Worship gathering"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(251.24467533520888deg, rgba(0,0,0,0) 15.547%, rgba(177,18,38,0.2) 90.303%)',
        }}
      />

      {/* Hero Content - Centered */}
      <div className="flex items-center justify-center h-full">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-white text-[72px] leading-tight font-serif tracking-[0.72px] mb-8">
            A Place to Encounter Christ
          </h1>

          <p className="text-white text-[24px] leading-[1.2] mb-8">
            Gather with believers to worship deeply, grow in faith, and experience God's presence together.
          </p>

          <button className="bg-[#ffb600] text-[#0e0e0e] px-6 py-3 rounded-full text-[18px] font-medium hover:bg-[#ffc233] transition">
            Join the Fellowship
          </button>
        </div>
      </div>
    </section>
  );
}
