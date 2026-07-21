// src/components/Skills.jsx

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Server,
  Cloud,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    color: "cyan",
    level: 95,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    color: "blue",
    level: 90,
    technologies: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
      "Nodemailer",
    ],
  },

  {
    title: "Database",
    icon: Database,
    color: "green",
    level: 90,
    technologies: [
      "MongoDB",
      "Mongoose",
      
    ],
  },

  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    color: "purple",
    level: 88,
    technologies: [
      "Python",
      "YOLO",
      "PyTorch",
      "OpenCV",
      "Numpy",
      "Pandas",
      "Scikit-Learn",
      "OpenAI API",
      "Gemini API",
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "orange",
    level: 82,
    technologies: [
      "AWS S3",
      "Git",
      "GitHub",
      "Render",
     
    ],
  },

  {
    title: "Tools",
    icon: Wrench,
    color: "pink",
    level: 90,
    technologies: [
      "VS Code",
      "Postman",
      "Docker",
      "Google Colab"
     
    ],
  },
];

const colors = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    progress: "bg-cyan-400",
  },

  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    progress: "bg-blue-400",
  },

  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    progress: "bg-green-400",
  },

  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    progress: "bg-purple-400",
  },

  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    progress: "bg-orange-400",
  },

  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-400",
    progress: "bg-pink-400",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />

      </div>

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
            duration: .6,
          }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            My Skills
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            I enjoy building scalable full-stack applications,
            AI-powered software, cloud solutions, and modern
            web experiences using the latest technologies.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const color = colors[skill.color];
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
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
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`rounded-3xl border ${color.border} bg-white/5 backdrop-blur-xl p-7 transition-all duration-300`}
              >
                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color.bg}`}
                >
                  <Icon
                    size={32}
                    className={color.text}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold">
                  {skill.title}
                </h3>

                {/* Progress */}

                <div className="mt-6">

                  <div className="mb-2 flex justify-between">

                    <span className="text-sm text-gray-400">
                      Proficiency
                    </span>

                    <span className={color.text}>
                      {skill.level}%
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-800">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className={`h-full rounded-full ${color.progress}`}
                    />

                  </div>

                </div>

                {/* Technologies */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {skill.technologies.map((tech) => (

                    <span
                      key={tech}
                      className={`rounded-full border ${color.border} ${color.bg} px-3 py-1 text-xs ${color.text}`}
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ============================= */}
        {/* Achievements */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="mb-10 text-center text-4xl font-black">
            Achievements & Awards
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                2st Prize
              </span>
              <h4 className="mt-4 text-2xl font-bold">
                JSS  College Mysore
              </h4>
              <p className="mt-4 leading-7 text-gray-400">
                Won 2st prize for the project <span className="font-semibold text-white">Email Spam Detection</span>.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Top 5 Shortlist
              </span>
              <h4 className="mt-4 text-2xl font-bold">
                GM University, Davanagere
              </h4>
              <p className="mt-4 leading-7 text-gray-400">
                Shortlisted among the top 5 for the project <span className="font-semibold text-white">Google Service Automation using Agentic AI</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============================= */}
        {/* Experience Timeline */}
        {/* ============================= */}

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
          className="mt-24"
        >

          <h3 className="mb-14 text-center text-4xl font-black">
            Learning Journey
          </h3>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">

              <span className="text-sm text-cyan-400">
                2024
              </span>

              <h4 className="mt-4 text-2xl font-bold">
                Frontend Development
              </h4>

              <p className="mt-4 leading-7 text-gray-400">
                Started with HTML, CSS, JavaScript,
                React.js and Tailwind CSS while
                building responsive web applications.
              </p>

            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-8">

              <span className="text-sm text-blue-400">
                2025
              </span>

              <h4 className="mt-4 text-2xl font-bold">
                Backend Development
              </h4>

              <p className="mt-4 leading-7 text-gray-400">
                Built scalable REST APIs using
                Node.js, Express, MongoDB,
                FastAPI and JWT authentication.
              </p>

            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">

              <span className="text-sm text-purple-400">
                2026
              </span>

              <h4 className="mt-4 text-2xl font-bold">
                AI Integration
              </h4>

              <p className="mt-4 leading-7 text-gray-400">
                Developed AI-powered products using
                OpenAI APIs, Gemini, YOLO,
                Computer Vision and NLP.
              </p>

            </div>

          </div>

        </motion.div>

        {/* ============================= */}
        {/* Currently Learning */}
        {/* ============================= */}

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
          className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-10"
        >

          <h3 className="text-3xl font-black">
            Currently Learning
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">

            {[
              "LangGraph",
              "LangChain",
              "React Native",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-300"
              >
                {item}
              </span>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Skills;