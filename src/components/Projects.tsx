"use client";

import Section from "@/components/Section";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
    return (
        <Section id="projects" contentWidth="max-w-6xl">
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-4xl font-bold text-white"
            >
                Projects
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.12,
                        }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10"
                    >
                        {/* Project Image */}
                        <div className="px-4 pt-4">
                            <div className="overflow-hidden rounded-xl border border-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="aspect-[2/1] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col p-6">
                            <h3 className="text-2xl font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-sky-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-sky-400 hover:text-white"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-sky-400"
                                    >
                                        <FiExternalLink />
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}