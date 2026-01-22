'use client';

import Image from 'next/image';

/**
 * Navigation Component
 * Fixed navbar with logo, nav links, and donate button
 * From Figma: Nav bar (node-id 2:2185)
 */
export default function CopilotNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e] shadow-[0px_60px_60px_0px_#0e0e0e]">
      <div className="flex items-center justify-between px-40 py-6 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src="/copilot-assets/logo.png"
            alt="Revive the Nations Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2 items-center">
          <div className="px-4 py-3 rounded text-[#d4af37] text-[18px] font-medium">
            Home
          </div>
          <a href="#" className="px-4 py-3 rounded text-[#a0a0a0] text-[18px] font-medium hover:text-[#d4af37] transition">
            Outreaches
          </a>
          <a href="#" className="px-4 py-3 rounded text-[#a0a0a0] text-[18px] font-medium hover:text-[#d4af37] transition">
            Projects
          </a>
          <div className="px-4 py-3 rounded text-[#a0a0a0] text-[18px] font-medium">
            Contact
          </div>
        </div>

        {/* Donate Button */}
        <button className="bg-[#ffb600] text-[#0e0e0e] px-6 py-3 rounded-full text-[18px] font-medium hover:bg-[#ffc233] transition">
          Donate
        </button>
      </div>
    </nav>
  );
}
