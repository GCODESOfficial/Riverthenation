'use client';

import Image from 'next/image';

/**
 * Mission & Vision Section Component
 * Text and stacked images layout
 * From Figma: Mission & Vision frame (node-id 2:2225)
 */
export default function MissionVisionSection() {
  return (
    <div className="bg-white border border-[#e2ded8] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden">
      <div className="grid grid-cols-2 gap-12 p-20 items-start">
        {/* Text Column */}
        <div className="space-y-8">
          <h2 className="text-[#121212] text-[44px] font-serif leading-tight tracking-[1px]">
            Our Mission & Vision
          </h2>

          <p className="text-[#6b6b6b] text-[20px] leading-[1.284] tracking-[0.4px]">
            Revive The Nations Ministry is an Evangelistic ministry with the vision to preach the gospel across the nations of the earth, bringing revival to humanity and advancing the kingdom of God.
          </p>
        </div>

        {/* Images Column - Stacked */}
        <div className="flex flex-col gap-2">
          {/* Top Image */}
          <div className="relative h-[90px] w-full rounded-bl-[18px] rounded-br-[18px] overflow-hidden">
            <Image
              src="/images/frame-1000005631.jpg"
              alt="Congregation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_24px_32px_0px_white]" />
          </div>

          {/* Middle Image - Main */}
          <div className="relative h-[357px] w-full rounded-[24px] overflow-hidden -my-2">
            <Image
              src="/images/fb-img-1730.jpg"
              alt="Minister praying"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.19)] to-[rgba(0,0,0,0.48)]" />
          </div>

          {/* Bottom Image */}
          <div className="relative h-[90px] w-full rounded-tl-[18px] rounded-tr-[18px] overflow-hidden">
            <Image
              src="/images/frame-1000005634.jpg"
              alt="Church members"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-24px_32px_0px_white]" />
          </div>
        </div>
      </div>
    </div>
  );
}
