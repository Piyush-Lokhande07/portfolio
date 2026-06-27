export interface SocialLink {
    name: string;
    href: string;
}

export interface Profile {
    name: string;
    role: string;
    tagline: string;
    socials: SocialLink[];
}

export interface Education {
    institute: string;
    degree: string;
    duration: string;
    location: string;
    score: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image: string;
}

export interface SectionProps {
    id?: string;
    className?: string;
  }