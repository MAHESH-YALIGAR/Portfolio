// src/components/Hero.jsx

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Download,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32"
    >
      {/* ========================= */}
      {/* Background */}
      {/* ========================= */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[150px]" />

        <div className="absolute right-[-150px] top-40 h-96 w-96 rounded-full bg-blue-500/15 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/15 blur-[160px]" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* ========================= */}
        {/* Left Side */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .7,
          }}
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            👋 Welcome to my Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Mahesh

            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              M Yaligar

            </span>

          </h1>

          {/* Typing */}

          <div className="mt-8 text-2xl font-semibold text-cyan-400">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Python Developer",
                2000,
                "AI Application Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 max-w-xl leading-8 text-gray-400">

            Passionate Full Stack Developer focused on
            building scalable web applications,
            AI-powered products, and modern software
            solutions using React, Node.js, FastAPI,
            MongoDB, and Generative AI.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              View Projects

              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              <Download size={18} />

              Resume
            </a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/MAHESH-YALIGAR"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6">

            <div>

              <h2 className="text-4xl font-black text-cyan-400">
                15+
              </h2>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

            {/* <div>

              <h2 className="text-4xl font-black text-cyan-400">
                15+
              </h2>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>

            </div> */}

            <div>

              <h2 className="text-4xl font-black text-cyan-400">
                3
              </h2>

              <p className="mt-2 text-gray-400">
                Hackathons
              </p>

            </div>

          </div>

        </motion.div>

        {/* ========================= */}
        {/* Right Side Starts Here */}
                {/* ========================= */}
        {/* VS Code Window */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative flex items-center justify-center"
        >

          {/* Floating Badges */}

          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -left-8 top-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl"
          >
            ⚛ React
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -right-8 top-20 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300 backdrop-blur-xl"
          >
            🍃 MongoDB
          </motion.div>

          <motion.div
            animate={{
              y: [-8, 12, -8],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
            }}
            className="absolute bottom-16 -left-4 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 backdrop-blur-xl"
          >
            🐍 Python
          </motion.div>

          <motion.div
            animate={{
              y: [12, -8, 12],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="absolute bottom-6 right-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-xl"
          >
            🚀 FastAPI
          </motion.div>

          {/* Code Window */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl"
          >

            {/* Top Bar */}

            <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

              <span className="ml-6 text-sm text-gray-400">
                Portfolio.jsx
              </span>

            </div>

            {/* Code */}

            <div className="overflow-x-auto p-8 font-mono text-sm leading-8">

<pre>{`const developer = {

  name: "Mahesh M Yaligar",

  role: "Full Stack Developer",

  specialization: [
    "React",
    "Node.js",
    "FastAPI",
    "MongoDB",
    "Python",
    "OpenAI"
  ],

  currentlyBuilding: "AI Powered Products",

  openToWork: true,

  passion: "Building scalable software",

};

export default developer;
`}</pre>

            </div>

          </motion.div>

        </motion.div>

      </div>
              {/* =============================== */}
        {/* Animated Terminal */}
        {/* =============================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="absolute -bottom-20 left-1/2 w-[95%] max-w-md -translate-x-1/2 overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b1220]/95 shadow-2xl backdrop-blur-xl"
        >

          {/* Terminal Header */}

          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-5 py-3">

            <div className="flex gap-2">

              <div className="h-3 w-3 rounded-full bg-red-500" />

              <div className="h-3 w-3 rounded-full bg-yellow-500" />

              <div className="h-3 w-3 rounded-full bg-green-500" />

            </div>

            <span className="text-xs text-gray-400">
              terminal
            </span>

          </div>

          {/* Terminal Body */}

          <div className="space-y-2 p-5 font-mono text-sm">

            <p className="text-green-400">
              mahesh@portfolio:~$
              <span className="text-white">
                {" "}npm run dev
              </span>
            </p>

            <p className="text-cyan-400">
              ✓ Vite Server Started
            </p>

            <p className="text-cyan-400">
              ✓ React Loaded
            </p>

            <p className="text-cyan-400">
              ✓ Tailwind CSS Ready
            </p>

            <p className="text-cyan-400">
              ✓ MongoDB Connected
            </p>

            <p className="text-cyan-400">
              ✓ FastAPI Running
            </p>

            <p className="text-cyan-400">
              ✓ AI Services Initialized
            </p>

            <p className="text-green-400">
              Portfolio Ready 🚀
            </p>

            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="inline-block h-5 w-2 bg-cyan-400"
            />

          </div>

        </motion.div>

        {/* =============================== */}
        {/* Floating Tech Stack */}
        {/* =============================== */}

        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute top-[-30px] right-10 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
        >
          React
        </motion.div>

        <motion.div
          animate={{
            y: [10, -10, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute right-[-40px] top-44 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 backdrop-blur-xl"
        >
          Node.js
        </motion.div>

        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute left-[-35px] bottom-40 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 backdrop-blur-xl"
        >
          Python
        </motion.div>

        <motion.div
          animate={{
            y: [8, -8, 8],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
          }}
          className="absolute bottom-0 right-16 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-xl"
        >
          MongoDB
        </motion.div>

        <motion.div
          animate={{
            y: [-12, 12, -12],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute left-10 top-1/2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 backdrop-blur-xl"
        >
          AI
        </motion.div>

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute -z-10 h-[550px] w-[550px] rounded-full border border-cyan-500/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="absolute -z-10 h-[650px] w-[650px] rounded-full border border-blue-500/5"
        />
                {/* ============================== */}
        {/* Scroll Indicator */}
        {/* ============================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center"
        >
          <span className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Scroll Down
          </span>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="flex h-14 w-8 justify-center rounded-full border border-cyan-500/40"
          >
            <motion.div
              animate={{
                y: [2, 18, 2],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
            />
          </motion.div>
        </motion.div>

        {/* ============================== */}
        {/* Background Particles */}
        {/* ============================== */}

        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className="absolute left-20 top-20 h-2 w-2 rounded-full bg-cyan-400"
        />

        <motion.div
          animate={{
            y: [20, -20, 20],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute right-28 top-40 h-3 w-3 rounded-full bg-blue-400"
        />

        <motion.div
          animate={{
            y: [-25, 25, -25],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute left-1/3 bottom-24 h-2 w-2 rounded-full bg-purple-400"
        />

        <motion.div
          animate={{
            y: [15, -15, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
          }}
          className="absolute right-1/4 bottom-32 h-2 w-2 rounded-full bg-cyan-300"
        />

    </section>
  );
};

export default Hero;