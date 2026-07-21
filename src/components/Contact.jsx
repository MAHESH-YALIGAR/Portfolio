// src/components/Contact.jsx

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "FFaKXPm7ev2DVbWvb";
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_mmydujl";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lgyrkjc";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "FFaKXPm7ev2DVbWvb";

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email service is not configured yet. Please contact the site owner.");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      const detail = error?.text || error?.message || "Please try again later.";
      setStatus(`Failed to send the message. ${detail}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I'm actively looking for Full Stack Developer,
            Software Engineer and AI Engineer opportunities.
            Feel free to reach out if you'd like to collaborate.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you have an internship opportunity,
              freelance project, or just want to connect,
              my inbox is always open.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <Mail />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    yaligarmahesh75@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <Phone />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +91 8296256433
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <MapPin />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-semibold">
                    Karnataka, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-10 flex gap-5">

              <a
                href="https://github.com/MAHESH-YALIGAR"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/mahesh-yaligar-247b852a3"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

            {/* Availability */}

            <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                <h4 className="font-bold text-cyan-300">
                  Available for Work
                </h4>

              </div>

              <p className="mt-4 leading-7 text-gray-300">
                ✔ Full Stack Developer Roles
                <br />
                ✔ AI Engineer Roles
                <br />
                ✔ Internship Opportunities
                <br />
                ✔ Freelance Projects
              </p>

            </div>

          </motion.div>

          {/* RIGHT SIDE STARTS HERE */}
                    {/* =============================== */}
          {/* RIGHT SIDE */}
          {/* =============================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              Send Me a Message
            </h3>

            <p className="mt-3 text-gray-400">
              I'll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Mahesh Yaligar"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Subject */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Hiring for Full Stack Developer"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Mahesh, we'd like to discuss an opportunity with you..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: isSending ? 1 : 1.04,
                }}
                whileTap={{
                  scale: isSending ? 1 : 0.95,
                }}
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={20} />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {status ? (
                <p className={`text-sm ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                  {status}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>

        {/* =============================== */}
        {/* Bottom CTA */}
        {/* =============================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-28 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-10 text-center"
        >
          <h3 className="text-4xl font-black">
            Let's Build Something Great Together 🚀
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            I'm passionate about building modern web applications,
            AI-powered products, scalable backend systems, and solving
            real-world problems through technology. If you're looking for
            someone who enjoys learning, building, and shipping products,
            let's connect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="mailto:yaligarmahesh75@gmail.com"
              className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://github.com/MAHESH-YALIGAR"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mahesh-yaligar-247b852a3"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
            >
              LinkedIn
            </a>

          </div>
        </motion.div>

      </div>

      {/* =============================== */}
      {/* Footer */}
      {/* =============================== */}

      <footer className="mt-28 border-t border-white/10 pt-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 pb-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Mahesh M Yaligar.
            All Rights Reserved.
          </p>

          <p className="text-cyan-400">
            Designed & Built with React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </footer>

    </section>
  );
};

export default Contact;