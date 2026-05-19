"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "What is a Pre-Engineered Building (PEB)?",
    answer:
      "A PEB is a steel structure where all components — primary frames, secondary members, roofing, and cladding — are precision-manufactured in a factory and assembled on-site. This results in faster, more cost-effective, and structurally superior buildings compared to conventional RCC construction.",
  },
  {
    id: "02",
    question:
      "How long does a PEB project take to complete?",
    answer:
      "Typical PEB projects take 30–40% less time than RCC. Depending on size and complexity, a standard industrial shed or warehouse can be completed in 45–90 days from design finalisation. Mekark's in-house manufacturing and erection teams ensure no cross-vendor delays.",
  },
  {
    id: "03",
    question:
      "Does Mekark offer turnkey PEB solutions?",
    answer:
      "Yes. Mekark is a full-service turnkey EPC contractor. We handle everything — structural design, engineering, fabrication, surface treatment, logistics, site erection, and project handover. You deal with one accountable partner from start to finish.",
  },
  {
    id: "04",
    question:
      "What is Mekark's production capacity?",
    answer:
      "Mekark operates one of Tamil Nadu's highest capacity PEB manufacturing facilities, capable of producing up to 3000 tons of structural steel per month from our 6,00,000 sq.ft. integrated campus in Chennai — enabling us to handle multiple large-scale projects simultaneously.",
  },
  {
    id: "05",
    question:
      "Is Mekark certified for quality and safety?",
    answer:
      "Yes. Mekark is ISO 9001 certified and green certified. All structures are designed and fabricated to IS standards and international specifications. Our in-house QC lab inspects every production stage to ensure structural accuracy, surface quality, and dimensional compliance.",
  },
  {
    id: "06",
    question:
      "What industries does Mekark serve?",
    answer:
      "Mekark serves warehousing & logistics, factories & industrial plants, manufacturing, multi-storey steel buildings, energy & power, pharma & food processing, and infrastructure & defence sectors. We deliver customised PEB solutions for each sector's specific structural requirements.",
  },
  {
    id: "07",
    question:
      "How do I get a quote from Mekark?",
    answer:
      "Simply fill in the enquiry form on this page with your building type, approximate area, and location. Our engineering team will respond within 2 business hours with a preliminary assessment and schedule a detailed consultation at zero cost to you.",
  },
  {
    id: "08",
    question:
      "Does Mekark deliver outside Chennai and Tamil Nadu?",
    answer:
      "Yes. While our manufacturing facility is in Chennai, Tamil Nadu, Mekark delivers PEB projects across PAN India. Our logistics hub and dedicated dispatch fleet enable timely component delivery to any project site, accompanied by our certified erection teams.",
  },
];

export default function PEBFaqSection() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index ? -1 : index
    );
  };

  return (
    <section className="w-full bg-[#F4F4F4] overflow-hidden py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14">
        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-[440px_1fr]
            xl:grid-cols-[500px_1fr]

            gap-10
            sm:gap-12
            lg:gap-16
            xl:gap-20

            items-start
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                justify-center

                px-[14px]
                py-[6px]

                rounded-full

                border
                border-[#FCD5D0]

                bg-[#FEEAE7]

                mb-6
              "
            >
              <span className="text-[13px] font-semibold leading-[19.5px] text-[#CC000A]">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[34px]
                sm:text-[46px]
                lg:text-[64px]

                leading-[0.95]

                font-bold

                tracking-[-2px]

                text-black

                max-w-[520px]
              "
            >
              Frequently asked{" "}
              <span className="text-[#CC000A]">
                questions.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6

                text-[16px]
                sm:text-[18px]

                leading-[28px]

                font-medium

                text-[#070506A6]

                max-w-[420px]
              "
            >
              Everything you need to know
              about PEB construction and our
              manufacturing capability.
            </p>

            {/* FAQ IMAGE - DESKTOP ONLY */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="
                relative

                hidden
                lg:flex

                mt-24
                xl:mt-28

                w-full

                justify-start

                lg:pl-2
              "
            >
              <div
                className="
                  relative

                  w-full

                  max-w-[580px]
                  xl:max-w-[620px]
                "
              >
                <Image
                  src="/Images/faq.png"
                  alt="Industrial Building"
                  width={620}
                  height={920}
                  priority
                  className="
                    w-full
                    h-auto

                    object-contain

                    scale-[1.66]

                    origin-center

                    drop-shadow-[0_35px_70px_rgba(0,0,0,0.16)]
                  "
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="border-t border-[#DDDDDD]">
              {faqData.map((faq, index) => {
                const isOpen =
                  activeIndex === index;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="border-b border-[#DDDDDD]"
                  >
                    <button
                      onClick={() =>
                        toggleFAQ(index)
                      }
                      className="
                        w-full

                        flex
                        items-start

                        gap-4

                        py-6

                        text-left

                        group
                      "
                    >
                      {/* Number */}
                      <span
                        className="
                          text-[14px]
                          sm:text-[15px]

                          font-semibold

                          text-[#CC000A]

                          min-w-[34px]

                          pt-[2px]
                        "
                      >
                        {faq.id}
                      </span>

                      {/* Content */}
                      <div className="flex-1 pr-4">
                        <h3
                          className="
                            text-[17px]
                            sm:text-[19px]

                            leading-[30px]

                            font-semibold

                            text-black

                            transition-all
                            duration-300

                            group-hover:text-[#CC000A]
                          "
                        >
                          {faq.question}
                        </h3>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height:
                                  "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="overflow-hidden"
                            >
                              <p
                                className="
                                  pt-4

                                  text-[15px]
                                  sm:text-[16px]

                                  leading-[28px]

                                  text-[#6B6B6B]

                                  max-w-[900px]
                                "
                              >
                                {
                                  faq.answer
                                }
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Icon */}
                      <div
                        className={`
                          min-w-[30px]
                          h-[30px]

                          rounded-full

                          flex
                          items-center
                          justify-center

                          transition-all
                          duration-300

                          mt-1

                          ${
                            isOpen
                              ? "bg-[#CC000A] text-white"
                              : "bg-[#ECECEC] text-[#8D8D8D]"
                          }
                        `}
                      >
                        {isOpen ? (
                          <X
                            size={14}
                            strokeWidth={
                              2.5
                            }
                          />
                        ) : (
                          <Plus
                            size={14}
                            strokeWidth={
                              2.5
                            }
                          />
                        )}
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}