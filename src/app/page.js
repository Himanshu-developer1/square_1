"use client";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";
import TestimonialsCarousel from "../app/components/testimonialsCarousel"; 

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
  const [showSuccessForm1, setShowSuccessForm1] = useState(false);
  const [showSuccessForm2, setShowSuccessForm2] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e,showForm) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new URLSearchParams();
    data.append("name", form.name.value);
    data.append("email", form.email.value);
    data.append("phone", form.phone.value);
    try {
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
        // setShowSuccess(true);
        (showForm === setShowSuccessForm1) ? setShowSuccessForm1(true) : setShowSuccessForm2(true);
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

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`flex flex-col min-h-screen ${playfair.variable} ${poppins.variable} bg-[#F4EDE6]`}>
      {/* Header */}
      <header className="w-full bg-[#F4EDE6] px-10 py-4 flex items-center justify-between rounded-tl-[32px] rounded-tr-[32px]">
        <Image
          src="/SIR_Logo.png"
          alt="SquareInchesRealty Logo"
          width={120}
          height={80}
          className="h-20 w-auto object-contain"
          priority
          unoptimized
        />
        <button
          className="text-base md:text-xl font-poppins font-medium text-[#9B9B9B] hover:text-[#0A1F44] transition-colors"
          style={{ letterSpacing: "0", lineHeight: "1.2" }}
          onClick={handleScrollToForm}
          type="button"
        >
          Get your free guide & consultation now! <span role="img" aria-label="point right">👉</span>
        </button>
      </header>
      <main className="flex-grow pt-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section with Logo */}
          <div className="text-center mb-16">
            <div className="flex mb-8">
              {/* <Image
                src="/logo.jpg"
                alt="SquareInchesRealty Logo"
                width={500}
                height={200}
                className="h-40 w-auto object-contain"
                priority
                unoptimized
              /> */}
            </div>
            <div className="text-center mb-10 mt-8">
              <h1 className="font-playfair text-[#333333] font-bold text-3xl md:text-5xl mb-4 tracking-tight leading-tight" style={{ letterSpacing: "-0.01em", lineHeight: "1.2" }}>
                Finding Your Dream Home in Lucknow? Start Here First!
              </h1>
              <p className="font-poppins text-[#333333] text-base md:text-2xl mb-6" style={{ lineHeight: "1.5" }}>
                Smart buyers know where to look—unlock hidden deals and expert insights before you buy!
              </p>
              {/* Optional: Video or Hero Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/hero-video-thumb.jpg"
                  alt="Hero Video"
                  width={400}
                  height={220}
                  className="rounded-lg shadow-lg object-cover"
                  unoptimized
                />
                {/* If you want a play button overlay, add it here */}
              </div>
              <button
                className="bg-[#D72638] text-white font-poppins px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-[#b91c2b] transition-all"
                onClick={handleScrollToForm}
                type="button"
              >
                Get Your Free Guide & Consultation Now!
              </button>
            </div>
          </div>

          {/* Problem Section */}
          <div className="bg-[#F4EDE6] rounded-lg p-6 md:p-8 mb-10">
            <h3 className="font-playfair text-[#333333] text-xl md:text-2xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-0.01em", lineHeight: "1.2" }}>
              Finding Your Dream Home Shouldn't be this Hard...
            </h3>
              <h3 className="font-playfair text-[#333333] text-xl md:text-2xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-0.01em", lineHeight: "1.2" }}>
             Buying a home is one of the biggest decision of your life.
            </h3>
            
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-4" style={{ lineHeight: "1.5" }}>
              It’s not just a house. It’s your future.
Your security. Your family’s happiness.
            </p>
             
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-4" style={{ lineHeight: "1.5" }}>
          But let’s be real... The process is
confusing, risky, and full of hidden
traps.
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-center font-poppins text-[#333333]"><span className="text-[#D72638] mr-2">❌</span> Overpriced properties that drain your budget.</li>
              <li className="flex items-center font-poppins text-[#333333]"><span className="text-[#D72638] mr-2">❌</span> Fake promises and misleading ads.</li>
              <li className="flex items-center font-poppins text-[#333333]"><span className="text-[#D72638] mr-2">❌</span> Legal paperwork that feels impossible to understand.</li>
              <li className="flex items-center font-poppins text-[#333333]"><span className="text-[#D72638] mr-2">❌</span> Banks rejecting loans because of tiny mistakes.</li>
            </ul>
            <p className="font-poppins text-[#333333] text-base md:text-lg font-medium">
              👉 Sounds familiar? You're not alone!
            </p>
          </div>

         <div className="flex justify-center mb-4">
                      <Image
                        src="/blue-logo.jpg"
                        alt="Guide Cover"
                        width={180}
                        height={240}
                        className="rounded-lg shadow"
                        unoptimized
                      />
                    </div>


                     {/* Problem Section */}
          <div className="bg-[#F4EDE6] rounded-lg p-6 md:p-8 mb-10">
            
            <p className="font-poppins text-[#333333] text-base md:text-lg mb-4" style={{ lineHeight: "1.5" }}>
             Most homebuyers struggle with these problems. And some even lose lakhs because of one wrong step! 😰
            </p>

              <p className="font-poppins text-[#333333] text-base md:text-lg mb-4" style={{ lineHeight: "1.5" }}>
            But don’t worry. We’re here to make sure this doesn’t happen to you.</p>
        
          <p className="font-poppins text-[#333333] text-base md:text-lg mb-4" style={{ lineHeight: "1.5" }}>
         What If Buying a Home Was Easy & Stress-Free? 😅
Imagine...   </p>
        
            <ul className="list-none space-y-2 mb-4">
               <li className="flex items-start font-poppins text-[#333333]"><span className="text-[#C7A740] mr-2">✅</span>Knowing the EXACT steps to find the best home at the right price.</li>
                  <li className="flex items-start font-poppins text-[#333333]"><span className="text-[#C7A740] mr-2">✅</span>Avoiding legal & financial mistakes that could cost you a fortune.</li>
                  <li className="flex items-start font-poppins text-[#333333]"><span className="text-[#C7A740] mr-2">✅</span>Getting expert guidanceto negotiate like a pro and save lakhs!</li>
                  <li className="flex items-start font-poppins text-[#333333]"><span className="text-[#C7A740] mr-2">✅</span>Having a team that works for YOU  (not just builders & sellers).</li>
               </ul>
               <div className="flex justify-center mb-4">
                      <Image
                        src="/image.jpg"
                        alt="Guide Cover"
                        width={180}
                        height={240}
                        className="rounded-lg shadow"
                        unoptimized
                      />
                    </div>
          </div>


           <div className="bg-[#F4EDE6] p-6 rounded-lg flex flex-col justify-center">
                <p className="font-poppins text-[#333333] text-base md:text-lg mb-4">
                  This is exactly what we do. We help homebuyers in Lucknow <b>find their dream home, hassle-free.</b>
                </p>
                <p className="font-poppins text-[#333333] text-base md:text-lg italic">
                  "We are a UP RERA Certified Real Estate Agency, ensuring every deal is transparent, secure, and in your best interest. Your dream home is in safe hands!"
                </p>
              </div>

           { /* Guide Section  */}
            <div className="text-center mb-16">
              <h2 className="font-playfair text-[#0A1F44] text-3xl md:text-4xl font-bold mb-8">
                Introducing: The Lucknow Home Buying Guide!
              </h2>
              <p className="font-poppins text-[#333333] text-base md:text-lg mb-8">
                This isn't just another boring real estate guide. <b>This is your
                step-by-step plan to buying a perfect home in Lucknow—without
                regrets.</b>
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ul className="text-left space-y-4">
                  <li className="flex items-start font-poppins text-[#333333]">
                    <span className="text-[#C7A740] mr-2">🔹</span> How to find the best locations (and avoid overpriced areas).
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
              <div className="flex justify-center mb-4">
                      <Image
                        src="/guide-cover.jpg"
                        alt="Guide Cover"
                        width={180}
                        height={240}
                        className="rounded-lg shadow"
                        unoptimized
                      />
                    </div>
            </div>

           { /* CTA Section */}
            <div className="text-[#333333] rounded-lg p-6 mb-10 text-center">
              <h3 className="font-playfair text-2xl md:text-3xl mb-4">
                Grab Your FREE Guide & Book a Free Consultation Now!
              </h3>
              {showSuccessForm1 && (
                <div
                  className="flex flex-col items-center justify-center bg-[#F4EDE6] border-2 border-[#C7A740] shadow-lg rounded-xl px-6 py-6 mb-6 max-w-md mx-auto"
                  style={{
                    boxShadow: "0 4px 24px 0 rgba(199, 167, 64, 0.10)",
                  }}
                >
                  <div className="flex mt-0 justify-end w-full " onClick={() => setShowSuccessForm1(false)}>
                        <button className="bg-[rgb(215,38,56)] rounded-[4px] text-white px-5 py-0">X</button>
                      </div>

                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D72638] mb-3 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#D72638" />
                      <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
                    </svg>
                  </div>
                  <span className="font-playfair text-[#D72638] text-xl font-bold mb-1">
                    Thank you!
                  </span>
                  <span className="font-poppins text-[#333333] text-base">
                    Your details have been submitted.<br />Check your email for the guide.
                  </span>
                </div>
              )}
              <div className="flex justify-center">
                <form
                  onSubmit={async (e) => {
                    await handleSubmit(e, setShowSuccessForm1);
                  }}
                  className="bg-[#F4EDE6] rounded-lg  p-8 w-full max-w-md text-left"
                  ref={formRef}
                >
                  <div className="mb-4">
                    <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="name">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your first name"
                      required
                      className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your valid email address"
                      required
                      className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your valid phone number"
                      pattern="[0-9]{10,15}"
                      required
                      className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D72638] text-white font-poppins px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Unlock Exclusive Guide!'}
                  </button>
                </form>
              </div>
            </div>
            <div className="bg-[#F4EDE6] rounded-lg p-6 mb-8">
              <p className="font-poppins text-base md:text-lg mb-3">
                <span className="font-bold">And the best part?</span> You get a FREE{' '}
                15-min consultation
                to answer all your personal questions
              </p>
              <p className="font-bold font-poppins text-base md:text-lg mb-1">
                <span className="font-bold">Home prices in Lucknow are rising FAST.</span>
                <span className="font-normal"> Every month your wait could cost you lakhs! <span role="img" aria-label="money bag">💰</span></span>
              </p>
              <p className="font-poppins text-base md:text-lg">
                Don't take risks. Get the expert guidance you need—before it’s too late!
              </p>
            </div>

            <TestimonialsCarousel />

            <div className="text-center">
              <div className="text-center mb-10">
                <p className="font-poppins text-[#333333] text-base md:text-lg mb-4 font-semibold">
                  Don't Wait! This Free Offer Won't Last Forever!
                </p>
           { /*  CTA Section  */}

                <div className="text-[#333333] rounded-lg p-6 mb-10 text-center">
                 
                  {showSuccessForm2 && (
                    <div
                      className="flex flex-col items-center justify-center bg-[#F4EDE6] border-2 border-[#C7A740] shadow-lg rounded-xl px-6 py-6 mb-6 max-w-md mx-auto"
                      style={{
                        boxShadow: "0 4px 24px 0 rgba(199, 167, 64, 0.10)",
                      }}
                    >


                      <div className="flex mt-0 justify-end w-full " onClick={() => setShowSuccessForm2(false)}>
                        <button className="bg-[rgb(215,38,56)] rounded-[4px] text-white px-5 py-0">X</button>
                      </div>

                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#D72638] mb-3 shadow-lg">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#D72638" />
                          <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
                        </svg>
  
                      </div>
                      <span className="font-playfair text-[#D72638] text-xl font-bold mb-1">
                        Thank you!
                      </span>
                      <span className="font-poppins text-[#333333] text-base">
                        Your details have been submitted.<br />Check your email for the guide.
                      </span>
                    </div>
                  )}
                  <div className="flex justify-center">
                    <form
                      onSubmit={async (e) => {
                        await handleSubmit(e, setShowSuccessForm2);
                      }}
                      className="bg-[#F4EDE6] rounded-lg  p-8 w-full max-w-md text-left"
                      ref={formRef}
                    >
                      <div className="mb-4">
                        <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="name">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your first name"
                          required
                          className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your valid email address"
                          required
                          className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block font-poppins text-[#0A1F44] mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Enter your valid phone number"
                          pattern="[0-9]{10,15}"
                          required
                          className="w-full px-4 py-3 rounded border border-[#C7A740] focus:outline-none focus:ring-2 focus:ring-[#C7A740] bg-white text-[#333333] font-poppins"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#D72638] text-white font-poppins px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Start Your Home Buying Journey!'}
                      </button>
                    </form>
                  </div>
                </div>
              <p className="font-poppins text-[#333333] text-base md:text-lg mb-6">
                The best properties in Lucknow <b>are selling FAST</b>.<br />
                🎯 Make sure you're making the right choice—before it's too late!<br />
                📥 Grab your FREE guide & expert consultation now!
              </p>
         <div className="flex justify-center mb-4">
                      <Image
                        src="/image.jpg"
                        alt="Guide Cover"
                        width={180}
                        height={240}
                        className="rounded-lg shadow"
                        unoptimized
                      />
                    </div>
              <p className="font-poppins text-[#333333] text-base md:text-lg italic mb-6">
                P.S. Buying a home isn't just about money—it's about your family's future. Let's make sure you do it right. 💙
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
