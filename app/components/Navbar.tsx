'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile View - Home Header */}
      <div className="md:hidden ">
        {/* Status Bar */}


        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black z-50 relative">
          {/* Avatar/Profile Icon */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/Logo.svg"
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side: Button and Hamburger */}
          <div className="flex items-center gap-4">
            {/* Boost Button */}
            <button className="bg-[#FFB600] text-black px-4 py-1.5 rounded-full text-base font-medium">
              Donate
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="21" y1="6" x2="3" y2="6" stroke="#FFB600" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="12" x2="12" y2="12" stroke="#FFB600" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="18" x2="3" y2="18" stroke="#FFB600" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">
          

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black">
            {/* Logo */}
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right side: Button and Close */}
            <div className="flex items-center gap-4">
              {/* Donate Button */}
              <button className="bg-[#FFB600] text-black px-4 py-1.5 rounded-full text-base font-medium">
                Donate
              </button>

              {/* Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="#FFB600" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18" y1="6" x2="6" y2="18" stroke="#FFB600" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center gap-8 py-20 px-4">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl ${pathname === '/' ? 'text-[#D4AF37]' : 'text-[#A0A0A0]'}`}
            >
              Home
            </Link>
            <Link 
              href="/outreaches" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl ${pathname === '/outreaches' ? 'text-[#D4AF37]' : 'text-[#A0A0A0]'}`}
            >
              Outreaches
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl ${pathname === '/projects' ? 'text-[#D4AF37]' : 'text-[#A0A0A0]'}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl ${pathname === '/contact' ? 'text-[#D4AF37]' : 'text-[#A0A0A0]'}`}
            >
              Contact
            </Link>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/20">
            <div className="flex items-center justify-center gap-8 py-4">
              {/* Phone Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {/* Facebook Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              {/* Email Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Web View */}
      <div className="hidden md:block z-50">
        <div className="flex items-center justify-between px-24 py-4 bg-transparent relative">
        {/* Logo */}
        <div className="relative w-12 h-12">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-base font-medium ${pathname === '/' ? 'text-[#D4AF37]' : 'text-[#A0A0A0] hover:text-[#D4AF37]'}`}
          >
            Home
          </Link>
          <Link 
            href="/outreaches" 
            className={`text-base font-medium ${pathname === '/outreaches' ? 'text-[#D4AF37]' : 'text-[#A0A0A0] hover:text-[#D4AF37]'}`}
          >
            Outreaches
          </Link>
          <Link 
            href="/projects" 
            className={`text-base font-medium ${pathname === '/projects' ? 'text-[#D4AF37]' : 'text-[#A0A0A0] hover:text-[#D4AF37]'}`}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={`text-base font-medium ${pathname === '/contact' ? 'text-[#D4AF37]' : 'text-[#A0A0A0] hover:text-[#D4AF37]'}`}
          >
            Contact
          </Link>
        </div>

        {/* Donate Button */}
        <button className="bg-[#FFB600] text-black px-6 py-2 rounded-full text-base font-medium hover:bg-[#FFB600]">
          Donate
        </button>
        </div>
      </div>
    </>
  );
}

