"use client";

import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const icons: Record<string, ReactNode> = {
    GitHub: <FaGithub size={24} />,
    LinkedIn: <FaLinkedin size={24} />,
    Email: <MdEmail size={24} />,
    Resume: <HiOutlineDocumentArrowDown size={20} />,
};

export default function Hero() {
    return (
        <Section
            id="home"
            contentWidth="max-w-5xl"
            className="min-h-screen flex items-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
            >
                <p className="text-lg font-medium text-sky-400">
                    Hello, I'm
                </p>

                <h1 className="mt-2 text-6xl font-extrabold tracking-tight text-white md:text-8xl">
                    {profile.name}
                </h1>

                <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
                    Full Stack Developer
                </h2>

                <div className="mt-3 flex items-center gap-2 text-slate-400">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>Maharashtra, India</span>
                </div>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                    {profile.tagline}
                </p>

                <div className="mt-10 flex items-center gap-5">
                    {profile.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target={social.name !== "Email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="transition-all duration-300 hover:-translate-y-1"
                        >
                            {social.name === "Resume" ? (
                                <span className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-sky-400 hover:bg-slate-900 hover:text-white">
                                    {icons[social.name]}
                                    Resume
                                </span>
                            ) : (
                                <span className="text-slate-400 transition hover:text-sky-400">
                                    {icons[social.name]}
                                </span>
                            )}
                        </a>
                    ))}
                </div>

                <div className="mt-20 flex justify-start">
                    <span className="animate-bounce text-3xl text-slate-600">
                        ↓
                    </span>
                </div>
            </motion.div>
        </Section>
    );
}