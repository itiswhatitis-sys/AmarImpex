"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add this effect to handle scroll restoration
  useEffect(() => {
    // Function to scroll to top when route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-[#242424] text-white transition-all duration-300",
        isScrolled ? "py-2 shadow-lg" : "py-3 md:py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/amar-apex-logo.png"
                alt="Amar Apex Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
            style={{ fontFamily: "Stolzl, sans-serif" }}
          >
            <Link
              href="/"
              scroll={false}
              className={cn(
                "text-sm lg:text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/") && "text-white",
              )}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              scroll={false}
              className={cn(
                "text-sm lg:text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/about-us") && "text-white",
              )}
            >
              About us
            </Link>
            <Link
              href="/products"
              scroll={false}
              className={cn(
                "text-sm lg:text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/products") && "text-white",
              )}
            >
              Products
            </Link>
            <Link
              href="/our-supplier"
              scroll={false}
              className={cn(
                "text-sm lg:text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/our-supplier") && "text-white",
              )}
            >
              Our supplier
            </Link>
            <Link
              href="/contact-us"
              scroll={false}
              className={cn(
                "text-sm lg:text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/contact-us") && "text-white",
              )}
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-[53px] z-50 flex flex-col bg-[#242424] p-4 transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ fontFamily: "Stolzl, sans-serif" }}
        >
          <nav className="flex flex-col space-y-6 pt-8">
            <Link
              href="/"
              scroll={false}
              className={cn(
                "text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/") && "text-white",
              )}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              scroll={false}
              className={cn(
                "text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/about-us") && "text-white",
              )}
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              href="/products"
              scroll={false}
              className={cn(
                "text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/products") && "text-white",
              )}
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/our-supplier"
              scroll={false}
              className={cn(
                "text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/our-supplier") && "text-white",
              )}
              onClick={toggleMenu}
            >
              Our supplier
            </Link>
            <Link
              href="/contact-us"
              scroll={false}
              className={cn(
                "text-base font-normal text-gray-300 transition-colors hover:text-white",
                isActive("/contact-us") && "text-white",
              )}
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
