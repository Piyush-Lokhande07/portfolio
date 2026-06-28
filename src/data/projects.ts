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
        github: "https://github.com/Piyush-Lokhande07/gatekeeper-go",
        image: "https://opengraph.githubassets.com/1/Piyush-Lokhande07/gatekeeper-go",
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
        image: "https://opengraph.githubassets.com/1/Piyush-Lokhande07/distributed-job-queue",
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
        image: "https://opengraph.githubassets.com/1/Piyush-Lokhande07/BP_Guardian",
    },
    {
        title: "Smart Parking System",
        description:
            "An IoT-enabled smart parking platform that allows users to locate, reserve, and pay for parking slots online. Integrated with Arduino, NodeMCU, IR sensors, and servo motors for automated gate control, along with JWT authentication, PostgreSQL, and Razorpay for secure booking and payments.",
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Arduino",
            "NodeMCU",
            "JWT",
            "Razorpay",
        ],
        github: "https://github.com/Piyush-Lokhande07/smart-parking-system",
        image: "https://opengraph.githubassets.com/1/Piyush-Lokhande07/smart-parking-system",
      },
];