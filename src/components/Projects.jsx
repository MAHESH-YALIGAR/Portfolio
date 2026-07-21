// src/components/Projects.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  Sparkles,
  Brain,
  Globe,
} from "lucide-react";

const categories = ["All", "AI/ML", "Full Stack"];

const projectData = [
  {
    id: 1,
    title: "ResumeIQ Analyzer",
    category: "AI/ML",
    featured: true,

    description:
      "AI-powered resume analyzer that predicts suitable job roles, identifies missing skills, and recommends a personalized learning roadmap using NLP.",

    image:
      "/projects/resumeiq.png",

    github:
      "https://github.com/MAHESH-YALIGAR/AIResume-Analyzer.git",

    live:
      "https://airesume-analyzer-d0co.onrender.com/",

    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "TF-IDF",
      "Matplotlib",
    ],
  },

  {
    id: 2,
    title: "Mini Drive",

    category: "Full Stack",

    featured: true,

    description:
      "Cloud storage platform with secure authentication, AWS S3 integration, OTP verification, folders, sharing, recycle bin and responsive dashboard.",

    image:
      "/projects/minidrive.png",

    github:
      "https://github.com/MAHESH-YALIGAR/MiniDrive-AWS-Service",

    live: "",

    technologies: [
      "React",
      "Node",
      "MongoDB",
      "AWS S3",
      "JWT",
      "Express",
    ],
  },

  // {
  //   id: 3,

  //   title: "Spam Protection System",

  //   category: "AI/ML",

  //   featured: false,

  //   description:
  //     "Hackathon winning MERN application that automatically analyzes incoming emails using LLM APIs and classifies spam with intelligent filtering.",

  //   image:
  //     "/projects/spam.png",

  //   github: "#",

  //   live: "#",

  //   technologies: [
  //     "React",
  //     "Node",
  //     "MongoDB",
  //     "OpenAI",
  //     "Express",
  //   ],
  // },

  {
    id: 4,

    title: "Weapon Detection",

    category: "AI/ML",

    featured: false,

    description:
      "Custom YOLO model trained from scratch on annotated datasets to detect guns and knives in real-time CCTV streams with automatic alerts.",

    image:
      "/projects/yolo.png",

    github:
      "https://github.com/MAHESH-YALIGAR/suspence-detection",

    live: "#",

    technologies: [
      "YOLO",
      "PyTorch",
      "OpenCV",
      "Python",
    ],
  },

  {
    id: 5,

    title: "API Test AI",

    category: "Full Stack",

    featured: false,

    description:
      "AI powered API testing platform with analytics dashboard, team collaboration, authentication and automated testing.",

    image:
      "/projects/api.png",

    github:
      "https://github.com/MAHESH-YALIGAR/Test-Api.Ai",

    live: "#",

    technologies: [
      "React",
      "Node",
      "MongoDB",
      "OpenAI",
      "JWT",
    ],
  },

  // {
  //   id: 6,

  //   title: "AgroSmart AI",

  //   category: "AI/ML",

  //   featured: false,

  //   description:
  //     "Smart agriculture platform providing disease detection, AI chatbot, weather alerts, crop prices and government schemes.",

  //   image:
  //     "/projects/agro.png",

  //   github: "#",

  //   live: "#",

  //   technologies: [
  //     "React Native",
  //     "FastAPI",
  //     "MongoDB",
  //     "Gemini",
  //     "YOLO",
  //   ],
  // },
];

const Projects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectData
      : projectData.filter(
          (project) => project.category === selected
        );

  return (
    <section
      id="projects"
      className="relative py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">

            <Sparkles size={16} />

            Featured Work

          </span>

          <h2 className="mt-6 text-5xl font-black">
            Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-8">
            A collection of AI applications, production-ready
            full-stack software and cloud solutions built using
            modern technologies.
          </p>

        </motion.div>

        {/* Filter */}

        <div className="mt-16 flex justify-center gap-4 flex-wrap">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-full px-6 py-3 transition-all duration-300 font-medium ${
                selected === category
                  ? "bg-cyan-500 text-black"
                  : "border border-white/10 text-gray-300 hover:border-cyan-500"
              }`}
            >
              {category === "AI/ML" && (
                <Brain
                  size={16}
                  className="inline mr-2"
                />
              )}

              {category === "Full Stack" && (
                <Globe
                  size={16}
                  className="inline mr-2"
                />
              )}

              {category}

            </button>

          ))}

        </div>

        {/* Grid Starts Here */}

        <motion.div
          layout
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
              }}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                project.featured
                  ? "border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-slate-900"
                  : "border-white/10 bg-white/5 backdrop-blur-xl"
              }`}
            >
              {/* Glow */}

              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold text-black">
                    FEATURED
                  </div>
                )}

              </div>

              {/* Content */}

              <div className="relative z-10 p-7">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex gap-4">

                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank", "noopener,noreferrer");
                      }}
                      className="relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 py-3 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
                      aria-label={`Open ${project.title} GitHub repository`}
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  ) : (
                    <span className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-gray-500">
                      <FaGithub size={18} />
                      GitHub
                    </span>
                  )}

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.live, "_blank", "noopener,noreferrer");
                      }}
                      className="relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  ) : null}

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>
              {/* =============================== */}
        {/* More Projects CTA */}
        {/* =============================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10">

            {/* Background Glow */}

            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10 text-center">

              <h3 className="text-4xl font-black">
                Want to See More?
              </h3>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
                These are some of my featured projects.
                I enjoy building scalable web applications,
                AI-powered software, cloud platforms,
                and solving real-world engineering problems.
                Explore my GitHub for more repositories and
                ongoing work.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="https://github.com/MAHESH-YALIGAR"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition"
                >
                  <FaGithub size={20} />
                  Visit GitHub
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href="mailto:yaligarmahesh75@gmail.com"
                  className="flex items-center gap-2 rounded-full border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
                >
                  <ExternalLink size={20} />
                  Let's Connect
                </motion.a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;