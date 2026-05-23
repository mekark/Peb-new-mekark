"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const reasons = [
    {
        id: "01",
        title: "We Manufacture. Not Outsource.",
        desc: "Every structure is fabricated in our own facility by experienced pre engineered building manufacturers and PEB steel structure contractors.",
    },
    {
        id: "02",
        title: "Free Engineering Consultation",
        desc: "Get optimized layouts and planning support from a leading warehouse construction company and industrial building contractor.",
    },
    {
        id: "03",
        title: "Fixed Price. On-Time Commitment.",
        desc: "Transparent pricing and committed timelines from a trusted turnkey industrial construction company.",
    },
    {
        id: "04",
        title: "450+ Industrial Projects Delivered",
        desc: "Trusted by industries nationwide for turnkey warehouse construction, factory buildings, and industrial infrastructure solutions.",
    },
];

export default function WhyMekark() {
    return (
        <section className="bg-[#E31E24] py-16 sm:py-20 lg:py-28 overflow-hidden">
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-16">
                <div
                    className="
            grid
            grid-cols-1
            gap-16

            lg:grid-cols-[1fr_720px]
            lg:gap-24
          "
                >
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {/* LABEL */}
                        <p
                            className="
                font-space-grotesk
                text-[12px]
                font-bold
                uppercase
                tracking-[1.2px]
                text-[#FFD7D7]
              "
                        >
                            Why Give Your Project to Mekark?
                        </p>

                        {/* HEADING */}
                        <h2
                            className="
                mt-7
                max-w-[860px]
                font-manrope
                text-[42px]
                font-bold
                leading-[46px]
                tracking-[-1.2px]
                text-white

                sm:text-[54px]
                sm:leading-[58px]

                lg:text-[57px]
                lg:leading-[72px]
                lg:tracking-[-1.5px]
              "
                        >
                            Your Project Deserves a Manufacturer,
                            <br />
                            <span className="text-black">
                                Not a Middleman.
                            </span>
                        </h2>

                        {/* DESCRIPTION */}
                        <div
                            className="
                mt-10
                max-w-[620px]
                space-y-8
              "
                        >
                            <p
                                className="
                  font-inter
                  text-[17px]
                  font-normal
                  leading-[32px]
                  text-white/95
                "
                            >
                                Most PEB contractors outsource fabrication and execution.
                                Mekark does everything in-house — from design and manufacturing to erection and delivery.
                                As a trusted PEB building manufacturer and industrial construction company, we deliver complete design & build turnkey EPC solutions for factories, warehouses, and industrial buildings across India.

                            </p>

                            <p
                                className="
                  font-inter
                  text-[17px]
                  font-normal
                  leading-[32px]
                  text-white/95
                "
                            >
                                With 450+ completed projects, Mekark is the preferred partner for businesses looking for reliable warehouse construction contractors, factory construction company expertise, and fast-track industrial execution.
                            </p>
                        </div>

                        {/* BUTTON */}
                        <motion.a
                            href="#quote-form"
                            whileHover={{
                                scale: 1.03,
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className="
    group
    mt-10

    inline-flex
    items-center
    gap-4

    rounded-[8px]

    bg-white

    px-6
    py-4

    font-manrope
    text-[18px]
    font-bold

    text-[#CC000A]

    transition-all
    duration-300

    hover:bg-[#FFF4F4]
  "
                        >
                            Start an export enquiry

                            <ArrowUpRight
                                className="
      h-5
      w-5

      transition-transform
      duration-300

      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
                            />
                        </motion.a>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="
    flex
    flex-col

    lg:pl-35
  "
                    >
                        {reasons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    x: 10,
                                }}
                                className="
        group
        relative
        py-7
      "
                            >
                                {/* LINE */}
                                {index !== 0 && (
                                    <div
                                        className="
            absolute
            left-0
            right-0
            top-0
            h-[1px]
            bg-white/20
          "
                                    />
                                )}

                                <div
                                    className="
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-start
        "
                                >
                                    {/* NUMBER */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2 + index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="
            font-space-grotesk
            text-[54px]
            font-bold
            leading-none
            text-white/15

            lg:text-[64px]
          "
                                    >
                                        {item.id}
                                    </motion.div>

                                    {/* CONTENT */}
                                    <div className="flex-1 pt-1">
                                        <h3
                                            className="
              font-manrope
              text-[28px]
              font-bold
              leading-[1.2]
              text-white

              transition-all
              duration-300

              group-hover:translate-x-1

              sm:text-[32px]
            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
              mt-3
              max-w-[520px]
              font-manrope
              text-[16px]
              font-medium
              leading-[28px]
              text-white/85

              transition-all
              duration-300

              group-hover:translate-x-1
            "
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}