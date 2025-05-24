'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { getPhotographerAlbums } from './../sanity/lib/sanityUtils' // adjust this path if needed
import { PhotographerAlbum } from '@/types/PhotographerAlbum'

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hideNavbar, setHideNavbar] = useState(false)
  const [albums, setAlbums] = useState<PhotographerAlbum[]>([])

  // Hide on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHideNavbar(currentScrollY > lastScrollY && currentScrollY > 50)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch albums
  useEffect(() => {
    async function fetchAlbums() {
      const data = await getPhotographerAlbums()
      setAlbums(data)
    }
    fetchAlbums()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#portfolio-button-desktop') && !target.closest('#portfolio-menu-desktop')) {
        setShowDropdown(false)
      }
    }
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showDropdown])

  return (
    <nav
      className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center bg-white shadow-md z-50 transform transition-transform duration-1000 ${
        hideNavbar ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Logo */}
      <div className="text-2xl sm:text-3xl p-3 sm:p-6 font-bold text-black cursor-default select-none">
        Artist Name Photography
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 text-lg text-black">
        <Link href="/" className="cursor-default select-none">
          Home
        </Link>

        <div className="relative">
          <button
            id="portfolio-button-desktop"
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer focus:outline-none select-none"
            aria-expanded={showDropdown}
            aria-controls="portfolio-menu-desktop"
          >
            Portfolio
          </button>
          {showDropdown && (
            <div
              id="portfolio-menu-desktop"
              className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl border border-gray-200 shadow-xl z-10 py-2"
            >
              {albums.map((album) => (
                <Link
                  key={album._id}
                  href={`/portfolio/${album.slug.current}`}
                  className="block px-5 py-2 text-sm text-left text-black hover:bg-gray-100 transition select-none"
                >
                  {album.albumTitle}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/about" className="cursor-default select-none">
          About
        </Link>

        <Link href="/contact" className="cursor-default select-none">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="text-black"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-6 py-4 space-y-3 z-10 text-lg text-black">
          <Link href="/" className="w-full block cursor-default select-none">
            Home
          </Link>

          <div className="w-full">
            <button
              className="w-full text-left cursor-pointer select-none"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-expanded={showDropdown}
              aria-controls="portfolio-menu-mobile"
            >
              Portfolio
            </button>
            {showDropdown && (
              <div id="portfolio-menu-mobile" className="ml-4 mt-2 space-y-2">
                {albums.map((album) => (
                  <Link
                    key={album._id}
                    href={`/portfolio/${album.slug.current}`}
                    className="block cursor-default select-none"
                  >
                    {album.albumTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="w-full block cursor-default select-none">
            About
          </Link>

          <Link href="/contact" className="w-full block cursor-default select-none">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
