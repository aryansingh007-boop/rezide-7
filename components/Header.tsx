'use client'

import { useState } from 'react'
import Image from 'next/image'
import { images, fallbackImages } from '../lib/images'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 relative">
                  <Image
                    src={images.logo}
                    alt="Rezide Logo"
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackImages.logo;
                    }}
                  />
                </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-rezide-primary px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-rezide-primary px-3 py-2 text-sm font-medium">
              My Network
            </a>
            <a href="#" className="text-gray-700 hover:text-rezide-primary px-3 py-2 text-sm font-medium">
              Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-rezide-primary px-3 py-2 text-sm font-medium">
              Messaging
            </a>
            <a href="#" className="text-gray-700 hover:text-rezide-primary px-3 py-2 text-sm font-medium">
              Notifications
            </a>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-8 h-8 bg-rezide-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <span className="text-sm text-gray-700">John Doe</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rezide-primary hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#" className="text-gray-700 hover:text-rezide-primary block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-rezide-primary block px-3 py-2 text-base font-medium">
                My Network
              </a>
              <a href="#" className="text-gray-700 hover:text-rezide-primary block px-3 py-2 text-base font-medium">
                Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-rezide-primary block px-3 py-2 text-base font-medium">
                Messaging
              </a>
              <a href="#" className="text-gray-700 hover:text-rezide-primary block px-3 py-2 text-base font-medium">
                Notifications
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
