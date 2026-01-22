'use client';

/**
 * Connect With Us Section Component
 * Contact form section with dark background
 * From Figma: Connect with us frame (node-id 2:2097)
 */
export default function ConnectWithUsSection() {
  return (
    <section className="bg-[#060606] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-[#161616] rounded-[24px] p-12 space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-[#f2f2f2] text-[48px] font-serif leading-tight tracking-[1px]">
            Connect With Us
          </h2>
          <div className="text-[#a0a0a0] text-[18px] leading-[1.5] space-y-2">
            <p>We'd love to hear from you!</p>
            <p>Your message will be responded to as soon as possible.</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-[#f2f2f2] text-[18px] font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-[16px] px-4 py-3 text-[#a0a0a0] text-[18px] placeholder:text-[#a0a0a0]"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-[#f2f2f2] text-[18px] font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-[16px] px-4 py-3 text-[#a0a0a0] text-[18px] placeholder:text-[#a0a0a0]"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="block text-[#f2f2f2] text-[18px] font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-[16px] px-4 py-3 text-[#a0a0a0] text-[18px] placeholder:text-[#a0a0a0]"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-[#f2f2f2] text-[18px] font-medium">
              Message
            </label>
            <textarea
              placeholder="Type your message here…"
              rows={5}
              className="w-full bg-[#2a2a2a] border border-[#404040] rounded-[16px] px-4 py-3 text-[#a0a0a0] text-[18px] placeholder:text-[#a0a0a0]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#ffb600] text-[#0e0e0e] py-3 rounded-full text-[18px] font-medium hover:bg-[#ffc233] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
