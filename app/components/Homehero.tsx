'use client';

import Image from 'next/image';

export default function Homehero() {
  return (
    <div className="relative w-full">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen w-full">
        {/* Background Image - starts from very top */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero.svg"
            alt="Worship gathering"
            fill
            priority
            className="object-contain"
            style={{ objectPosition: 'center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content - centered, accounting for navbar on mobile */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-20 md:pt-0">
          <h1 className="mb-6 text-center text-4xl font-serif text-white md:text-6xl lg:text-7xl">
            A Place to Encounter Christ
          </h1>
          <p className="mb-8 max-w-2xl text-center text-base text-white md:text-lg lg:text-xl">
            Gather with believers to worship deeply, grow in faith, and experience God's presence together.
          </p>
          <button className="rounded-full bg-[#FFB600] px-8 py-3 text-base font-medium text-black transition-colors hover:bg-[#FFC633]">
            Join the Fellowship
          </button>
        </div>
      </div>

    
    </div>
  );
}

