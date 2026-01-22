'use client';

import Image from 'next/image';

/**
 * Footer Component
 * Complete footer with contact info, quick links, and newsletter signup
 * From Figma: Footer frame (node-id 2:2093)
 */
export default function CopilotFooter() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Contact Form Section */}
        <div className="grid grid-cols-2 gap-12">
          {/* Newsletter */}
          <div />

          {/* Email Signup */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-[18px] font-semibold mb-2">
                Stay Connected
              </h3>
              <p className="text-[#a0a0a0] text-[16px] leading-relaxed">
                Sign Up with your email address to receive updates from Revive the Nations Ministry
              </p>
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#2a2a2a] border border-[#404040] rounded-[16px] px-4 py-3 text-[#a0a0a0] text-[18px] placeholder:text-[#a0a0a0]"
              />
              <button className="bg-[#ffb600] text-[#0e0e0e] px-6 py-3 rounded-full font-medium hover:bg-[#ffc233] transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a]" />

        {/* Footer Content */}
        <div className="grid grid-cols-3 gap-12">
          {/* Logo & Quick Links */}
          <div className="space-y-8">
            <div className="relative w-24 h-24">
              <Image
                src="/copilot-assets/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-[18px] font-bold">Quick Links</h4>
              <ul className="space-y-2 text-[#a0a0a0] text-[16px] opacity-78">
                <li>Home</li>
                <li>Outreaches</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-[18px] font-semibold">Contact</h4>
            <ul className="space-y-3 text-[#a0a0a0] text-[16px] opacity-78">
              <li>+234 707 330 2623</li>
              <li>Godspromise Anthony</li>
              <li>Revivethenationministry@gmail.com</li>
              <li>New Ring Road, Uyo Akwa Ibom State Nigeria</li>
            </ul>
          </div>

          {/* Empty */}
          <div />
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2a2a2a] pt-6 text-center text-[#a0a0a0] text-[16px]">
          <p>© 2025 Revive The Nation | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
