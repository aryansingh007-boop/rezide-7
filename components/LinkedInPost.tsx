'use client'

import { useState } from 'react'
import Image from 'next/image'
import { images, fallbackImages } from '../lib/images'

interface LinkedInPostProps {
  onLike: () => void
  onShare: () => void
  likes: number
  isLiked: boolean
}

export default function LinkedInPost({ onLike, onShare, likes, isLiked }: LinkedInPostProps) {
  const [showShareMessage, setShowShareMessage] = useState(false)

  const handleShare = () => {
    onShare()
    setShowShareMessage(true)
    setTimeout(() => setShowShareMessage(false), 3000)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto relative">
      {/* Post Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
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
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Rezide</h3>
            <p className="text-sm text-gray-500">Real Estate Platform • 2h</p>
          </div>
          <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-900 mb-4 leading-relaxed">
          Rezide is a modern real estate discovery platform designed to make property search simple, transparent, and hassle-free. Whether you're looking to buy, sell, or rent, Rezide brings together verified listings, rich property details, and an intuitive search experience to help you make confident decisions.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
          {/* Large image - takes up 2 columns */}
          <div className="col-span-2 row-span-2">
            <div className="relative w-full h-64">
              <Image
                src={images.presentation}
                alt="Real Estate Presentation"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImages.presentation;
                }}
              />
            </div>
          </div>
          
          {/* Three smaller images */}
          <div className="relative w-full h-32">
            <Image
              src={images.workshop}
              alt="Real Estate Workshop"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImages.workshop;
              }}
            />
          </div>
          <div className="relative w-full h-32">
            <Image
              src={images.event}
              alt="Real Estate Event"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImages.event;
              }}
            />
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={onLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                isLiked 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg 
                className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              <span className="text-sm font-medium">{likes > 0 ? likes : 'Like'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" 
                />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Share Success Message */}
      {showShareMessage && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-10">
          <p className="text-sm font-medium">Hurray! Link copied to clipboard</p>
        </div>
      )}
    </div>
  )
}
