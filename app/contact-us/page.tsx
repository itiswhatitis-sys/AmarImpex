"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

export default function ContactUsPage() {
  // Ensure page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <main className="flex min-h-screen flex-col pt-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column - Contact Information */}
          <div className="md:w-5/12 lg:w-4/12">
            <div className="bg-[#990000] text-white p-6 md:p-8 rounded-2xl flex flex-col">
              <h2 className="text-xl font-medium mb-5" style={{ fontFamily: "Stolzl, sans-serif" }}>
                Get in Touch
              </h2>

              {/* Visit us */}
              <div className="mb-5">
                <h3 className="text-base font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  Visit us
                </h3>
                <div className="space-y-1 text-xs">
                  <p>
                    <span className="text-sm font-extrabold">HQ: </span>
                    Arihant Plaza 1st Floor No.84/85, Wall Tax Road, Park Town, Chennai-600003
                  </p>
                  <p>
                    <span className="text-sm font-extrabold">FA: </span>
                    No.200, Madhavaram High Road, Madhavaram, Chennai-600060
                  </p>
                  <p>
                    <span className="text-sm font-extrabold">CBE: </span>
                    104/1, Bay 6, F.G.P. Industries, Sathy Road, Saravanampatti, Coimbatore- 641035
                  </p>
                </div>
              </div>

              {/* Chat with us */}
              <div className="mb-5">
                <h3 className="text-base font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  Chat with us
                </h3>
                <div className="space-y-1 text-xs">
                  <p>Amarimpex2015@gmail.com</p>
                  <p>info@amarimpexroofs.com</p>
                </div>
              </div>

              {/* Call us */}
              <div className="mb-5">
                <h3 className="text-base font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  Call us
                </h3>
                <div className="space-y-1 text-xs">
                  <p>+91-9696636666</p>
                  <p>+91-44-42113190</p>
                </div>
              </div>

              {/* Follow Us On */}
              <div>
                <h3 className="text-base font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  Follow Us On
                </h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    <Facebook size={18} />
                  </Link>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    <Instagram size={18} />
                  </Link>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
              <FontAwesomeIcon icon={faXTwitter}  style={{ fontSize: 18 }} />
              </Link>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    <Linkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

         {/* Right Column - Contact Form */}
          <div className="md:w-7/12 lg:w-8/12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Id
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone No
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000]"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#990000] text-white py-3 px-4 rounded-full hover:bg-[#800000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#990000] focus:ring-offset-2"
                  style={{ fontFamily: "Stolzl, sans-serif" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
