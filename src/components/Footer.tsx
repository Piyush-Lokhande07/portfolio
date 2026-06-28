"use client";

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-slate-800">
            <div className="mx-auto max-w-5xl px-6 py-8 text-center">
                <p className="text-slate-500">
                    © {new Date().getFullYear()} Piyush Lokhande • Built with Next.js, TypeScript & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}