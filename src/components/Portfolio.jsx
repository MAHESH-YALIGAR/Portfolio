// src/components/Portfolio.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / height) * 100;

      setScrollProgress(progress);
      setShowTop(scrollTop > 500);
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#030712] text-white">

      {/* =============================== */}
      {/* Animated Background */}
      {/* =============================== */}

      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-[-150px] top-[250px] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="absolute bottom-[-150px] left-[40%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>

      {/* =============================== */}
      {/* Custom Cursor */}
      {/* =============================== */}

      <div
        id="cursor"
        className="pointer-events-none fixed z-[999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[1px]"
      />

      {/* =============================== */}
      {/* Scroll Progress */}
      {/* =============================== */}

      <motion.div
        className="fixed left-0 top-0 z-[999] h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* =============================== */}
      {/* Navbar */}
      {/* =============================== */}

      <Navbar />

      {/* =============================== */}
      {/* Hero */}
      {/* =============================== */}

      <section id="home">
        <Hero />
      </section>

      {/* =============================== */}
      {/* Skills */}
      {/* =============================== */}

      <section id="skills">
        <Skills />
      </section>

      {/* =============================== */}
      {/* Projects */}
      {/* =============================== */}

      <section id="projects">
        <Projects />
      </section>

      {/* =============================== */}
      {/* Contact */}
      {/* =============================== */}

      <section id="contact">
        <Contact />
      </section>

      {/* =============================== */}
      {/* Scroll To Top */}
      {/* =============================== */}

      <AnimatePresence>

        {showTop && (

          <motion.button
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 text-xl backdrop-blur-xl transition hover:bg-cyan-500 hover:text-white"
          >
            ↑
          </motion.button>

        )}

      </AnimatePresence>

      {/* =============================== */}
      {/* Footer */}
      {/* =============================== */}

      {/* <footer className="border-t border-white/10 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Mahesh M Yaligar.
            All rights reserved.
          </p>

          <p className="text-cyan-400">
            Designed & Built with React + Tailwind CSS
          </p>

        </div>

      </footer> */}

    </main>
  );
};

export default Portfolio;