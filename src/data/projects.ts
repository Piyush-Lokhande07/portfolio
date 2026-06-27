import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Gatekeeper-Go",
        description:
            "A high-performance API Gateway built in Go featuring reverse proxying, load balancing, Redis-based distributed rate limiting, JWT authentication, and request tracing through correlation IDs.",
        tech: [
            "Go",
            "Redis",
            "Docker",
            "JWT (RS256)",
            "Lua",
            "sync/atomic",
        ],
        github: "https://github.com/your-username/gatekeeper-go",
        image: "/project-images/gatekeeper-go.png",
    },
    {
        title: "Distributed Job Queue System",
        description:
            "A production-oriented distributed job queue supporting asynchronous task processing with concurrent worker pools, retry mechanisms, exponential backoff, graceful shutdown, and observability.",
        tech: [
            "Go",
            "Redis",
            "Docker",
            "Goroutines",
            "Channels",
            "net/http",
        ],
        github: "https://github.com/your-username/distributed-job-queue",
        image: "/project-images/job-queue.png",
    },
    {
        title: "BP Guardian",
        description:
            "A secure healthcare platform connecting patients and doctors with blood pressure monitoring, OTP verification, role-based access control, machine learning predictions, and Gemini-powered health guidance.",
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Random Forest",
            "Gemini AI",
        ],
        github: "https://github.com/your-username/bp-guardian",
        live: "https://your-live-demo.com",
        image: "/project-images/bp-guardian.png",
    },
];