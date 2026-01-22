'use client';

/**
 * Quote Card Component
 * Large quote card with Bible verse
 * From Figma: Quote card (node-id 2:2212)
 */
export default function QuoteCard() {
  return (
    <div className="bg-white border border-[#e2ded8] rounded-[24px] p-10 text-center shadow-lg max-w-4xl mx-auto">
      {/* Opening quotation mark */}
      <div className="text-[#121212] text-[118px] leading-none mb-4">
        &ldquo;
      </div>

      {/* Quote text */}
      <p className="text-[#121212] text-[28px] leading-[1.3] font-serif mb-6">
        And this gospel of the kingdom will be preached in the whole world as a testimony to all nations, and then the end will come.
      </p>

      {/* Citation */}
      <p className="text-[#b11226] text-[24px] font-medium">
        -Matthew 24:14 (NIV)
      </p>
    </div>
  );
}
