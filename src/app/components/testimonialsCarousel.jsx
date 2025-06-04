import React, { useState, useEffect } from "react";
import Image from "next/image";
const testimonials = [
                  {
                    img: "/user1.jpg",
                    alt: "Buyer 1",
                    text: `"The guide made everything so simple! I avoided costly mistakes and found my dream home in just weeks."`,
                    name: "Amit S., Gomti Nagar",
                  },
                  {
                    img: "/user2.jpg",
                    alt: "Buyer 2",
                    text: `"I was nervous about paperwork, but the consultation cleared all my doubts. Highly recommend!"`,
                    name: "Priya T., Indira Nagar",
                  },
                  {
                    img: "/user3.jpg",
                    alt: "Buyer 3",
                    text: `"Thanks to the expert tips, I saved money and got the best deal. The team truly cares!"`,
                    name: "Rahul K., Alambagh",
                  },
                ];

                function TestimonialsCarousel() {
                  const [index, setIndex] = useState(0);

                  useEffect(() => {
                    const timer = setInterval(() => {
                      setIndex((prev) => (prev + 1) % testimonials.length);
                    }, 4000);
                    return () => clearInterval(timer);
                  }, []);

                  return (
                    <div className="mb-16">
                      <h3 className="font-playfair text-[#0A1F44] text-2xl md:text-3xl mb-6 text-center">
                        What Buyers Like You Say...
                      </h3>
                      <div className="relative w-full flex justify-center items-center min-h-[320px]">
                        {testimonials.map((t, i) => (
                          <div
                            key={i}
                            className={`absolute transition-all duration-700 ease-in-out w-full max-w-md mx-auto ${
                              i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
                            }`}
                          >
                            <div className="bg-[#F4EDE6] border border-[#C7A740] rounded-lg p-6 text-[#333333] font-poppins text-base md:text-lg shadow flex flex-col items-center">
                              <Image
                                src={t.img}
                                alt={t.alt}
                                width={64}
                                height={64}
                                className="rounded-full mb-4"
                                unoptimized
                              />
                              <p className="mb-2 text-center">{t.text}</p>
                              <span className="font-semibold mt-2">{t.name}</span>
                            </div>
                          </div>
                        ))}
                        {/* Dots */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                          {testimonials.map((_, i) => (
                            <button
                              key={i}
                              className={`h-2 w-2 rounded-full ${i === index ? "bg-[#C7A740]" : "bg-[#e0e0e0]"}`}
                              onClick={() => setIndex(i)}
                              aria-label={`Go to testimonial ${i + 1}`}
                              tabIndex={0}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-[#F4EDE6] rounded-lg p-6 mt-8">
                        <p className="font-poppins text-[#333333] text-base md:text-lg mb-4">
                          We believe <b>buying a home should be exciting, not stressful.</b> Most buyers don't have the right guidance—and they make costly mistakes. That's why we're giving away this expert guide and free call—<b>so you can make the smartest choice for your family's future.</b>
                        </p>
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
                        <h3 className="font-playfair text-[#333333] text-xl md:text-2xl mb-4 text-center">
                          No gimmicks.<br />No hidden fees.<br />Just real help.
                        </h3>
                        <p className="font-playfair text-[#333333] text-xl md:text-2xl mb-4 text-center">
                          Because your search for a dream home should never feel like a nightmare.
                        </p>
                      </div>
                    </div>
                  );
                }
export default TestimonialsCarousel;