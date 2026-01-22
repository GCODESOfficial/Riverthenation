'use client';

import Image from 'next/image';

/**
 * Reviving Hearts Section Component
 * Two-column layout with text on left and pastor image on right
 * From Figma: Reviving Hearts frame (node-id 2:2246)
 */
export default function RevivingHeartsSection() {
  return (
    <div className="bg-white border border-[#e2ded8] rounded-[24px] overflow-hidden">
      <div className="grid grid-cols-2 gap-0">
        {/* Left Text Column */}
        <div className="p-20 space-y-8 flex flex-col justify-center">
          <h2 className="text-[#121212] text-[44px] font-serif leading-tight tracking-[1px]">
            Reviving Hearts, Transforming Lives
          </h2>

          <div className="text-[#6b6b6b] text-[20px] leading-[1.284] tracking-[0.4px] space-y-4">
            <p>
              Welcome to Revive The Nations Ministry! Our mission is to share the life-changing message of Jesus Christ across the nations, bringing revival to hearts and communities.
            </p>

            <p>
              Whether you seek hope, purpose, or a deeper connection with God, you are welcome here. Join us as we worship, pray, and grow together, advancing the Kingdom of God, one life at a time.
            </p>
          </div>

          <p className="text-[#121212] text-[24px] font-serif italic tracking-[0.48px]">
            Godspromise Anthony, Senior Pastor
          </p>
        </div>

        {/* Right Image Column */}
        <div className="relative h-[520px] rounded-br-[24px] rounded-tr-[24px] overflow-hidden bg-black">
          <Image
            src="/images/anthony.jpg"
            alt="Senior Pastor"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
