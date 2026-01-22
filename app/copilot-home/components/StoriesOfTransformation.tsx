'use client';

/**
 * Stories of Transformation Section Component
 * Testimonial section with quote card and rotating profile images
 * From Figma: Stories of Transformation frame (node-id 2:2076)
 */
export default function StoriesOfTransformationSection() {
  return (
    <section className="bg-gradient-to-b from-[#a68006] to-[#060606] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-white text-[44px] font-serif leading-tight tracking-[1px]">
            Stories of Transformation
          </h2>
          <p className="text-white text-[18px] leading-[1.284] tracking-[0.36px]">
            See how lives are being touched and faith is growing.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#fff8e2] rounded-[24px] p-10 space-y-6 max-w-2xl mx-auto">
          {/* Opening quotation mark */}
          <div className="text-[#121212] text-[118px] leading-none">
            &ldquo;
          </div>

          {/* Testimonial text */}
          <p className="text-[#6b6b6b] text-[18px] leading-normal tracking-[0.36px]">
            I came to Revive the Nation one million conference feeling depressed, fearful, and lost. Through the love, worship, and teachings at the church, God healed her, restored her sense of purpose, and empowered her to live in freedom and serve others.
          </p>

          {/* Name */}
          <p className="text-[#121212] text-[24px] font-serif italic tracking-[0.48px]">
            Godspromise
          </p>
        </div>
      </div>
    </section>
  );
}
