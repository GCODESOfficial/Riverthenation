'use client';

import Image from 'next/image';

/**
 * Who We Are Section Component
 * Two-column layout with images and text content
 * From Figma: Who We Are frame (node-id 2:2216)
 */
export default function WhoWeAreSection() {
  return (
    <div className="grid grid-cols-2 gap-12 items-center">
      {/* Images Column */}
      <div className="flex gap-1">
        {/* Left image - larger */}
        <div className="relative h-[480px] w-[400px] rounded-[24px] rounded-br-[16px] rounded-tr-[16px] overflow-hidden flex-shrink-0">
          <Image
            src="/images/frame-2085661807.jpg"
            alt="Worship leader"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.26)] to-[rgba(200,55,55,0.4)]" />
        </div>

        {/* Right image - smaller */}
        <div className="relative h-[480px] w-[200px] rounded-[24px] rounded-bl-[16px] rounded-tl-[16px] overflow-hidden -ml-[2px] flex-shrink-0">
          <Image
            src="/images/frame-2085661808.jpg"
            alt="Praise session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.26)] to-[rgba(200,55,55,0.4)]" />
        </div>
      </div>

      {/* Text Column */}
      <div className="space-y-6">
        <h2 className="text-[#121212] text-[44px] font-serif leading-tight tracking-[1px]">
          Who We Are
        </h2>

        <div className="text-[#6b6b6b] text-[18px] leading-[1.284] tracking-[0.36px] space-y-4">
          <p>
            We are a Christian fellowship committed to creating a spiritual home where believers worship, study scripture, grow in faith, and build meaningful relationships in the love of Christ.
          </p>

          <p>
            Our fellowship is a place for people who desire more than routine religion. It is a place where we open the Bible together, pray together, ask honest questions, share real life, and allow the Holy Spirit to transform us from the inside out.
          </p>

          <p>
            Whether you are just beginning your journey of faith or have walked with God for many years, there is a space for you here.
          </p>
        </div>

        <button className="bg-[#b11226] text-white px-6 py-3 rounded-full text-[18px] font-medium hover:bg-[#8a0d1e] transition">
          Become a Member
        </button>
      </div>
    </div>
  );
}
