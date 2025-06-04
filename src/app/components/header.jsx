"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header({ onGuideClick }) {
  const [activeTab, setActiveTab] = useState("");

  const getButtonClass = (tab) =>
    `hover:text-blue-600 ${
      activeTab === tab ? "text-blue-600 font-semibold" : "text-gray-800"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="mx-auto max-w-[100%] bg-white/90 shadow-md backdrop-blur-md px-6 py-3 flex items-center justify-between border-b border-gray-200">
        {/* Logo */}
        <Link href="/" className="text-blue-600 font-semibold text-lg">
          Squre inches Reality
        </Link>

        <div className="flex items-center space-x-8">
          {/* Navigation */}
          <nav className="flex space-x-6 items-center text-sm">
            <Link
              href="/"
              onClick={() => setActiveTab("home")}
              className={getButtonClass("home")}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setActiveTab("about")}
              className={getButtonClass("about")}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setActiveTab("contact")}
              className={getButtonClass("contact")}
            >
              Contact Us
            </Link>
          </nav>
          {/* Guide CTA */}
          <button
            className="ml-6 text-[#D72638] font-semibold font-poppins hover:underline text-base md:text-lg transition-colors"
            onClick={onGuideClick}
            type="button"
          >
            Get your free guide now !
          </button>
        </div>
      </div>
    </header>
  );
}
