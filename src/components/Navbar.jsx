// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenu(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ============================ */}
      {/* Navbar */}
      {/* ============================ */}

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h2 className="text-2xl font-black tracking-tight">
              <span className="text-cyan-400">M</span>
              ahesh
            </h2>
          </motion.div>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {item.name}

                {active === item.id && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-cyan-400"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Buttons */}

          <div className="hidden items-center gap-4 md:flex">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
            >
              <Download size={18} />
              Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:scale-105"
            >
              Hire Me

              <ArrowUpRight size={18} />
            </button>

          </div>

          {/* Mobile Menu */}

          <button
            className="text-white md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
      </motion.nav>

      {/* ============================ */}
      {/* Mobile Drawer */}
      {/* ============================ */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 300,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed right-0 top-0 z-[60] h-screen w-72 border-l border-white/10 bg-[#020617]/95 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between border-b border-white/10 p-6">

              <h2 className="text-xl font-bold text-cyan-400">
                Menu
              </h2>

              <button
                onClick={() => setMobileMenu(false)}
              >
                <X size={28} />
              </button>

            </div>

            <div className="mt-10 flex flex-col gap-2 px-6">

              {navLinks.map((item) => (

                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-xl px-4 py-4 text-left text-lg transition ${
                    active === item.id
                      ? "bg-cyan-500 text-black"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>

              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-cyan-400 py-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
              >
                <Download size={20} />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-4 rounded-xl bg-cyan-500 py-4 font-semibold text-black transition hover:scale-105"
              >
                Let's Connect
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;