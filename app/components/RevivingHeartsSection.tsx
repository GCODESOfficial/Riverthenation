"use client";

import Image from "next/image";

export default function RevivingHeartsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm">
          
          {/* Left Content */}
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1C1C1C] leading-tight">
              Reviving Hearts, <br />
              Transforming Lives
            </h2>

            <p className="mt-6 text-[#4A4A4A] leading-relaxed text-base">
              Welcome to Revive The Nations Ministry! Our mission is to share the
              life-changing message of Jesus Christ across the nations, bringing
              revival to hearts and communities.
            </p>

            <p className="mt-4 text-[#4A4A4A] leading-relaxed text-base">
              Whether you seek hope, purpose, or a deeper connection with God,
              you are welcome here. Join us as we worship, pray, and grow
              together, advancing the Kingdom of God, one life at a time.
            </p>

            <p className="mt-8 font-serif italic text-[#1C1C1C]">
              Godspromise Anthony, Senior Pastor
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[360px] md:h-auto">
            <Image
              src="/images/pastor.svg" // replace with your actual image path
              alt="Senior Pastor"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
