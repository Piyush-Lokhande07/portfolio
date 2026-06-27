"use client";

import Section from "@/components/Section";
import { education } from "@/data/education";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <Section id="education" contentWidth="max-w-5xl">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-4xl font-bold text-white"
            >
                Education
            </motion.h2>

            <div className="space-y-6">
                {education.map((item, index) => (
                    <motion.div
                        key={item.institute}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.12,
                        }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-white">
                                    {item.institute}
                                </h3>

                                <p className="mt-2 text-lg text-slate-300">
                                    {item.degree}
                                </p>

                                <p className="mt-2 text-slate-500">
                                    {item.location}
                                </p>
                            </div>

                            <div className="shrink-0 text-left md:text-right">
                                <p className="font-medium text-sky-400">
                                    {item.duration}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}