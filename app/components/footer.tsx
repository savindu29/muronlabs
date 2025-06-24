"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import {
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-stone-100 via-white to-stone-100 border-t border-dashed border-stone-400 text-gray-700">
      <div className="container mx-auto px-4 lg:px-20 py-12 space-y-10">

        {/* CTA Section */}
        <div className="bg-indigo-50 text-black rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center lg:justify-between gap-6  border border-indigo-200">
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            <h3 className="text-3xl lg:text-4xl font-semibold">
              Contact Us for Your Solutions
            </h3>
            <p className="text-lg max-w-md text-indigo-600">
              Experienced Software development and design solutions for your
              business growth.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-semibold px-6 py-3 rounded-full flex items-center gap-1"
            >
              New Successes <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center lg:text-left">
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/faqs", label: "FAQs" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Careers
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/press", label: "Press" },
                { href: "/partnerships", label: "Partnerships" },
                { href: "/support", label: "Support" },
                { href: "/help", label: "Help Center" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 ">
              <li className="flex items-center space-x-3 text-stone-600 hover:text-indigo-600">
                <PhoneIcon className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-600 hover:text-indigo-600">
                <EnvelopeIcon className="w-5 h-5" />
                <span>info@muronlab.com</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-600 hover:text-indigo-600">
                <MapPinIcon className="w-5 h-5" />
                <span>123 Legal Street, Justice City</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start space-x-5 hover:text-indigo-600">
              {[
                { href: "https://facebook.com", label: "Facebook" },
                { href: "https://instagram.com", label: "Instagram" },
                { href: "https://linkedin.com", label: "LinkedIn" },
                { href: "https://youtube.com", label: "YouTube" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-indigo-700 transition-colors"
                >
                  <ChatBubbleOvalLeftIcon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-dashed border-stone-400 pt-6 text-sm text-center lg:text-left text-gray-600">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8">
            <div>© 2024 Muronlab. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <Link
                href="/privacy"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-indigo-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-indigo-600 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
