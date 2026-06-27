"use client";

import Section from "@/components/Section";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

import {
    SiCplusplus,
    SiGo,
    SiJavascript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiLinux,
    SiGit,
} from "react-icons/si";

import {
    FaNetworkWired,
    FaCode,
    FaCubes,
    FaServer,
} from "react-icons/fa";

const techIcons: Record<string, React.ReactNode> = {
    "C++": <SiCplusplus />,
    Go: <SiGo />,
    JavaScript: <SiJavascript />,
    Python: <SiPython />,

    React: <SiReact />,
    "Next.js": <SiNextdotjs />,
    "Tailwind CSS": <SiTailwindcss />,

    "Node.js": <SiNodedotjs />,
    "Express.js": <SiExpress />,
    "REST APIs": <FaServer />,

    PostgreSQL: <SiPostgresql />,
    MongoDB: <SiMongodb />,
    Redis: <SiRedis />,

    Git: <SiGit />,
    Docker: <SiDocker />,
    Linux: <SiLinux />,

    "Data Structures & Algorithms": <FaCode />,
    "Operating Systems": <FaCubes />,
    "Computer Networks": <FaNetworkWired />,
    "Object-Oriented Programming": <FaCode />,
};

export default function Skills() {
    return (
        <Section id="skills" contentWidth="max-w-5xl">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-4xl font-bold text-white"
            >
                Skills
            </motion.h2>

            <div className="grid gap-6 md:grid-cols-2">
                {skills.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/10"
                    >
                        <h3 className="mb-5 text-lg font-semibold text-sky-400">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400 hover:text-white"
                                >
                                    <span className="text-sky-400 text-base">
                                        {techIcons[skill] ?? <FaCode />}
                                    </span>

                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}