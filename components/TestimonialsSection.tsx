"use client";

import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Quote,
    Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        title:
            "Industrial Warehouse | Logistics Company Owner",
        content:
            "We needed a large-scale warehouse built quickly without compromising quality. The team delivered a 50,000 sq. ft. pre-engineered structure in just 11 weeks — on time and within budget. The build quality is outstanding, and the after-sales support has been excellent. We've already placed an order for our second facility.",
        name: "Ramesh Subramaniam",
        role: "Director",
        location: "Chennai",
    },
    {
        id: 2,
        title:
            "Manufacturing Factory | Auto Components Firm",
        content:
            "Our production facility required precise engineering and a fast turnaround. Right from design to erection, the entire process was seamless. The PEB structure is sturdy, well-ventilated, and perfectly suited for our heavy machinery operations. I would recommend them without hesitation to any industrialist.",
        name: "Arvind Mehta",
        role: "MD",
        location: "Pune",
    },
    {
        id: 3,
        title:
            "Commercial Building | Retail Chain",
        content:
            "We were skeptical about using a pre-engineered structure for a commercial showroom, but the results exceeded every expectation. The aesthetics, column-free space, and natural lighting solutions transformed our retail experience. Our customers constantly compliment the look and feel of the building.",
        name: "Priya Nair",
        role: "CEO",
        location: "Bengaluru",
    },
    {
        id: 4,
        title:
            "Cold Storage Facility | Food Processing Unit",
        content:
            "Temperature-controlled construction is highly specialized, and this team handled every detail with expertise. Our cold storage plant was completed with proper insulation, vapor barriers, and structural integrity — all built to international standards. Downtime during construction was minimal, which was critical for our operations.",
        name: "Suresh Patel",
        role: "Operations Head",
        location: "Ahmedabad",
    },
    {
        id: 5,
        title:
            "Multi-Purpose Commercial Complex | Real Estate Developer",
        content:
            "As a developer, I have worked with several construction firms, but this PEB manufacturer stands apart in professionalism and execution. The speed of construction saved us nearly 4 months compared to conventional methods, and the cost savings were significant. The structure is robust, modern, and our tenants are extremely satisfied.",
        name: "K. Venkatesh",
        role: "Managing Partner",
        location: "Hyderabad",
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] =
        useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1
                ? 0
                : prev + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0
                ? testimonials.length - 1
                : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials"
            className="relative overflow-hidden bg-[#050505] py-20 lg:py-28">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E40015]/10 blur-[140px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E40015]/10 blur-[140px]" />

            <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-14">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
                    {/* LEFT */}
                    <div className="max-w-[760px]">
                        {/* Badge */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
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
                mb-7
              "
                        >
                            <span className="text-[13px] font-semibold leading-[19.5px] text-[#CC000A]">
                                Client Testimonials
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            viewport={{ once: true }}
                            className="
                text-white
                text-[42px]
                sm:text-[56px]
                lg:text-[52px]
                leading-[1]
                tracking-[-2px]
                font-bold
              "
                        >
                            Trusted by{" "}
                            <span className="text-[#E40015]">
                                industrial leaders.
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{ once: true }}
                            className="
                mt-7
                text-white/65
                text-[17px]
                sm:text-[18px]
                leading-[30px]
                font-medium
                max-w-[620px]
              "
                        >
                            Real experiences from
                            manufacturers, developers,
                            logistics companies and
                            industrial businesses across
                            India.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSlide}
                            className="
                w-14
                h-14
                rounded-full
                border
                border-white/10
                bg-white/5
                hover:bg-[#E40015]
                transition-all
                duration-300
                flex
                items-center
                justify-center
                text-white
              "
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="
                w-14
                h-14
                rounded-full
                border
                border-white/10
                bg-[#E40015]
                hover:bg-red-700
                transition-all
                duration-300
                flex
                items-center
                justify-center
                text-white
              "
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                {/* CAROUSEL */}
                {/* CAROUSEL */}
                <div className="relative overflow-hidden">
                    <motion.div
                        animate={{
                            x: `-${activeIndex * 100}%`,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                        }}
                        className="flex"
                    >
                        {testimonials.map(
                            (testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className="
            min-w-full

            flex
            justify-center

            px-2
          "
                                >
                                    <div
                                        className="
              relative
              overflow-hidden

              w-full
              max-w-[980px]

              rounded-[26px]

              border
              border-white/10

              bg-[linear-gradient(180deg,#161616_0%,#0C0C0C_100%)]

              p-6
              sm:p-7
              lg:p-9

              min-h-[420px]
              lg:min-h-[360px]
            "
                                    >
                                        {/* Quote */}
                                        <div
                                            className="
                absolute
                top-6
                right-6

                w-14
                h-14

                rounded-full
                bg-[#E40015]/10

                flex
                items-center
                justify-center
              "
                                        >
                                            <Quote
                                                className="text-[#E40015]"
                                                size={24}
                                            />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map(
                                                (star) => (
                                                    <Star
                                                        key={star}
                                                        className="
                      w-4
                      h-4
                      fill-[#FFB800]
                      text-[#FFB800]
                    "
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* Category */}
                                        <p
                                            className="
                mt-5

                text-[#E40015]

                text-[11px]
                sm:text-xs

                font-bold
                uppercase

                tracking-[1px]
              "
                                        >
                                            {testimonial.title}
                                        </p>

                                        {/* Content */}
                                        <p
                                            className="
                mt-5

                text-white/90

                text-[15px]
                sm:text-[17px]
                lg:text-[19px]

                leading-[30px]
                lg:leading-[34px]

                font-medium
              "
                                        >
                                            “
                                            {testimonial.content}
                                            ”
                                        </p>

                                        {/* Bottom */}
                                        <div
                                            className="
                mt-8

                flex
                flex-col
                sm:flex-row

                sm:items-center
                sm:justify-between

                gap-5
              "
                                        >
                                            {/* User */}
                                            <div className="flex items-center gap-4">
                                                {/* Avatar */}
                                                <div
                                                    className="
                    w-14
                    h-14

                    rounded-full

                    bg-[#E40015]

                    flex
                    items-center
                    justify-center

                    text-white
                    font-bold
                    text-lg

                    shrink-0
                  "
                                                >
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map(
                                                            (word) =>
                                                                word[0]
                                                        )
                                                        .slice(0, 2)
                                                        .join("")}
                                                </div>

                                                {/* Details */}
                                                <div>
                                                    <h4
                                                        className="
                      text-white

                      text-[18px]
                      sm:text-[20px]

                      font-bold
                    "
                                                    >
                                                        {testimonial.name}
                                                    </h4>

                                                    <p
                                                        className="
                      text-white/60

                      text-[13px]
                      sm:text-[14px]

                      mt-1
                    "
                                                    >
                                                        {testimonial.role} •{" "}
                                                        {testimonial.location}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Slide Number */}
                                            <div
                                                className="
                  text-white/20

                  text-[48px]
                  lg:text-[70px]

                  font-bold

                  leading-none
                "
                                            >
                                                0{index + 1}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </motion.div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-3 mt-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                setActiveIndex(index)
                            }
                            className={`
                transition-all
                duration-300
                rounded-full

                ${activeIndex === index
                                    ? "w-10 h-3 bg-[#E40015]"
                                    : "w-3 h-3 bg-white/20"
                                }
              `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}