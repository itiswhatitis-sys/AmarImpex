import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, X } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12">
        {/* Top section with logo, products, links, and social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/amar-impex-white-logo.png"
                alt="Amar Impex Logo"
                width={200}
                height={150}
                className="h-auto w-36 md:w-40 lg:w-48"
                priority={false}
                loading="lazy"
              />
            </Link>
          </div>

          {/* Our products */}
          <div>
            <h3 className="text-[#E31E25] font-medium text-lg mb-4">Our products</h3>
            <div className=" text-xs">
                <ul className="space-y-2 text-sm ">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span className=" text-xs font-extralight">GP COILS / SHEETS</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span className=" text-xs font-extralight">AMAR FLEXI PROFILE</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span className=" text-xs font-extralight">AMAR TILE PROFILE</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span className=" text-xs font-extralight">AMAR CORRUGATION PROFILE</span>
              </li>
            </ul></div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[#E31E25] font-medium text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2 ">•</span>
                <Link href="/" className="hover:text-gray-300 transition-colors text-xs font-extralight ">
                  HOME
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <Link href="/about-us" className="hover:text-gray-300 transition-colors text-xs font-extralight">
                  ABOUT US
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <Link href="/products" className="hover:text-gray-300 transition-colors text-xs font-extralight">
                  PRODUCTS
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <Link href="/our-supplier" className="hover:text-gray-300 transition-colors text-xs font-extralight ">
                  MAJOR SUPPLIERS
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <Link href="/contact-us" className="hover:text-gray-300 transition-colors text-xs font-extralight">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[#E31E25] font-medium text-lg mb-4">Follow Us on</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
              <FontAwesomeIcon icon={faXTwitter}  style={{ fontSize: 24 }} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 24 }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider line between top section and middle section - with white filter */}
        <div className="py-4 mb-6">
          <img
            src="/images/divider-line.png"
            alt="Divider"
            className="w-full h-auto opacity-70"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Middle section with locations and contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Locations */}
          <div>
            <h3 className="text-[#E31E25] font-medium text-lg mb-4">Locations</h3>
            <div className="space-y-3  text-xs font-extralight">
              <p>ARIHANT PLAZA 1ST FLOOR NO.84/85, WALL TAX ROAD PARK TOWN, CHENNAI 600003</p>
              <p>KKR GARDEN, MADHAVARAM, CHENNAI, TAMIL NADU 600118</p>
              <p>NO 239/2A-2B, BOMMINAICHENPATTY POST, MUTHUNAICKENPATTY, OMALUR TALUK, SALEM - 636304</p>
              <p>104/1, BAY 6, SATHY ROAD, SARAVANAMPATTI, COIMBATORE - 641035</p>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-[#E31E25] font-medium text-lg mb-4">Contacts</h3>
            <div className="space-y-3  text-xs font-extralight">
              <p>AMARIMPEX2015@GMAIL.COM</p>
              <p>INFO@AMARIMPEXROOFS.COM</p>
              <p>+91-44-42113190</p>
              <p>+91-9696636666</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full width black section */}
      <div className="w-full bg-black mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="border-t border-gray-700 pt-6 pb-4">
            <p className="text-center text-xs">
              Copyright 2025 - AMAR IMPEX | All Rights Reserved | Designed By PLUGIN STUDIOS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
