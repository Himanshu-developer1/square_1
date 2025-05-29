"use client";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new URLSearchParams();
    data.append("name", form.name.value);
    data.append("email", form.email.value);

    try {
    // In a React component

      
      const response = await fetch(
        process.env.NEXT_PUBLIC_SHEET,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data.toString(),
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${playfair.variable} ${poppins.variable}`}
    >
      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center border-2 border-[#C7A740] animate-fade-in">
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-[#0A1F44] mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#C7A740"
                  strokeWidth="2"
                  fill="#F4EDE6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2l4-4"
                  stroke="#0A1F44"
                />
              </svg>
              <h2 className="font-playfair text-2xl text-[#0A1F44] mb-2">
                Thank you!
              </h2>
              <p className="font-poppins text-[#333333] mb-4">
                Thanks! Check your email for the PDF download link.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-2 px-6 py-2 bg-[#D72638] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <main className="flex-grow ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section with Logo */}
          <div className="text-center mb-16">
            <div className="flex mb-8">
              <Image
                src="/logo.jpg"
                alt="Real Estate Logo"
                width={500}
                height={200}
                className="h-40 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <h1 className="font-playfair text-[#0A1F44] text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Finding Your Dream Home in Lucknow? Start Here First!
            </h1>
            <p className="font-poppins text-[#333333] text-lg md:text-2xl mb-8">
              Smart buyers know where to look—unlock hidden deals and expert
              insights before you buy!
            </p>
            <h3 className="font-playfair text-[#0A1F44] text-2xl md:text-3xl mb-8">
              Finding Your Dream Home Shouldn't Be This Hard... 😔
            </h3>
          </div>

          {/* Problem Section */}
          <div className="bg-[#F4EDE6] rounded-lg p-8 mb-16">
            <h3 className="font-playfair text-[#0A1F44] text-2xl md:text-3xl mb-6">
              Buying a home is one of the biggest decisions of your life.
            </h3>
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
              It's not just a house. It's your future. Your security. Your
              family's happiness.
            </p>
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
              But let's be real... The process is confusing, risky, and full of
              hidden traps.
            </p>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center font-poppins text-[#333333]">
                <span className="text-[#D72638] mr-2">❌</span> Overpriced
                properties that drain your budget.
              </li>
              <li className="flex items-center font-poppins text-[#333333]">
                <span className="text-[#D72638] mr-2">❌</span> Fake promises
                and misleading ads.
              </li>
              <li className="flex items-center font-poppins text-[#333333]">
                <span className="text-[#D72638] mr-2">❌</span> Legal paperwork
                that feels impossible to understand.
              </li>
              <li className="flex items-center font-poppins text-[#333333]">
                <span className="text-[#D72638] mr-2">❌</span> Banks rejecting
                loans because of tiny mistakes.
              </li>
            </ul>
            <p className="font-poppins text-[#333333] text-base md:text-lg font-medium">
              👉 Sounds familiar? You're not alone!
            </p>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h2 className="font-playfair text-[#0A1F44] text-3xl md:text-4xl font-bold mb-8 text-center">
              What If Buying a Home Was Easy & Stress-Free? 🤩
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#C7A740]">
                <h3 className="font-playfair text-[#0A1F44] text-2xl mb-6">
                  Imagine...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start font-poppins text-[#333333]">
                    <span className="text-[#C7A740] mr-2">✅</span> Knowing the
                    EXACT steps to find the best home at the right price.
                  </li>
                  <li className="flex items-start font-poppins text-[#333333]">
                    <span className="text-[#C7A740] mr-2">✅</span> Avoiding
                    legal & financial mistakes that could cost you a fortune.
                  </li>
                  <li className="flex items-start font-poppins text-[#333333]">
                    <span className="text-[#C7A740] mr-2">✅</span> Getting
                    expert guidance to negotiate like a pro and save lakhs!
                  </li>
                  <li className="flex items-start font-poppins text-[#333333]">
                    <span className="text-[#C7A740] mr-2">✅</span> Having a
                    team that works for YOU (not just builders & sellers).
                  </li>
                </ul>
              </div>
              <div className="bg-[#F4EDE6] p-8 rounded-lg">
                <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
                  This is exactly what we do. We help homebuyers in Lucknow find
                  their dream home, hassle-free.
                </p>
                <p className="font-poppins text-[#333333] text-base md:text-lg italic">
                  "We are a UP RERA Certified Real Estate Agency, ensuring every
                  deal is transparent, secure, and in your best interest. Your
                  dream home is in safe hands!"
                </p>
              </div>
            </div>
          </div>

          {/* Guide Section */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[#0A1F44] text-3xl md:text-4xl font-bold mb-8">
              Introducing: The Lucknow Home Buying Guide!
            </h2>
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-8">
              This isn't just another boring real estate guide. This is your
              step-by-step plan to buying a perfect home in Lucknow—without
              regrets.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ul className="text-left space-y-4">
                <li className="flex items-start font-poppins text-[#333333]">
                  <span className="text-[#C7A740] mr-2">🔹</span> How to find
                  the best locations (and avoid overpriced areas).
                </li>
                <li className="flex items-start font-poppins text-[#333333]">
                  <span className="text-[#C7A740] mr-2">🔹</span> The 7-step
                  checklist to buy your home safely & smartly.
                </li>
                <li className="flex items-start font-poppins text-[#333333]">
                  <span className="text-[#C7A740] mr-2">🔹</span> The biggest
                  mistakes buyers make—and how to avoid them.
                </li>
                <li className="flex items-start font-poppins text-[#333333]">
                  <span className="text-[#C7A740] mr-2">🔹</span> How to secure
                  the BEST loan deal (even if your credit score isn't perfect).
                </li>
                <li className="flex items-start font-poppins text-[#333333]">
                  <span className="text-[#C7A740] mr-2">🔹</span> The legal
                  paperwork checklist (so you don't get scammed).
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#0A1F44] text-white rounded-lg p-8 mb-16 text-center">
            <h3 className="font-playfair text-2xl md:text-3xl mb-6">
              Grab Your FREE Guide & Book a Free Consultation Now!
            </h3>
            <p className="font-poppins text-lg mb-8">
              And the best part? You get a FREE 15-min consultation to answer
              all your personal questions
            </p>
            <p className="font-poppins text-lg mb-8">
              Home prices in Lucknow are rising FAST. Every month your wait
              could cost you lakhs! 💰
            </p>
            <button className="bg-[#D72638] text-white font-poppins px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all">
              Get Your Free Guide Now
            </button>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h3 className="font-playfair text-[#0A1F44] text-2xl md:text-3xl mb-8 text-center">
              What Buyers Like You Say...
            </h3>
            <div className="bg-[#F4EDE6] rounded-lg p-8">
              <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
                We believe buying a home should be exciting, not stressful. Most
                buyers don't have the right guidance—and they make costly
                mistakes. That's why we're giving away this expert guide and
                free call—so you can make the smartest choice for your family's
                future.
              </p>
              <h3 className="font-playfair text-[#0A1F44] text-xl md:text-2xl mb-6 text-center">
                No gimmicks.
                <br />
                No hidden fees.
                <br />
                Just real help.
              </h3>
              <p className="font-poppins text-[#333333] text-base md:text-lg text-center">
                Because your search for a dream home should never feel like a
                nightmare.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
              Don't Wait! This Free Offer Won't Last Forever!
            </p>
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-8">
              The best properties in Lucknow are selling FAST.
              <br />
              🎯 Make sure you're making the right choice—before it's too late!
              <br />
              📥 Grab your FREE guide & expert consultation now!
            </p>
            <p className="font-poppins text-[#333333] text-base md:text-lg italic">
              P.S. Buying a home isn't just about money—it's about your family's
              future. Let's make sure you do it right. 💙
            </p>
          </div>

          {/* Form Section */}
           <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="font-playfair text-[#0A1F44] text-2xl md:text-3xl mb-6 text-center">
              Get Your Free Guide
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-[#F4EDE6] text-[#333333]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-[#F4EDE6] text-[#333333]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D72638] text-white font-poppins px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Guide'}
              </button>
            </form>
          </div> 
        </div>
      </main>
    </div>
  );
}
