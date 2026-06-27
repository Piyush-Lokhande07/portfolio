import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    contentWidth?: string;
}

export default function Section({
    children,
    id,
    className = "",
    contentWidth = "max-w-6xl",
}: SectionProps) {
    return (
        <section
            id={id}
            className={`px-6 py-24 scroll-mt-24 ${className}`}
        >
            <div className={`mx-auto w-full  ${contentWidth}`}>
                {children}
            </div>
        </section>
    );
}