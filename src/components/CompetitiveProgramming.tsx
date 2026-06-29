"use client";

import Section from "@/components/Section";
import { competitiveProfiles } from "@/data/competitiveProgramming";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import CountUp from "react-countup";

export default function CompetitiveProgramming() {
    return (
        <Section id="competitive-programming" contentWidth="max-w-6xl">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-4xl font-bold text-white"
            >
                Competitive Programming
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-3">
                {competitiveProfiles.map((profile, index) => {
                    const Icon = profile.icon;

                    return (
                        <motion.div
                            key={profile.platform}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10"
                        >
                            <div className="flex items-center gap-4">
                                <Icon
                                    size={36}
                                    style={{ color: profile.color }}
                                />

                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {profile.platform}
                                    </h3>

                                    <p className="text-sm text-slate-400">
                                        @{profile.username}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Rating
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="mt-2"
                                >
                                    <span className="text-5xl font-extrabold text-white">
                                        <CountUp
                                            end={Number(profile.rating)}
                                            duration={2}
                                        />
                                    </span>
                                </motion.div>

                                <p className="mt-4 text-slate-300">
                                    {profile.description}
                                </p>
                            </div>

                            <a
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 text-sky-400 transition hover:text-sky-300"
                            >
                                View Profile
                                <FiExternalLink size={16} />
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}