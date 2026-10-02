import React, { useState } from "react";

import cognifyzCert from "./Certificates/cognifyz.jpeg";
import deloitteCert from "./Certificates/deloitte.jpeg";
import employmentCert from "./Certificates/employment-communication.jpeg";
import equityCert from "./Certificates/equity-edge.jpeg";
import eyCert from "./Certificates/ey-techathon.jpeg";
import genathonCert from "./Certificates/genathon.jpeg";
import hackindiaCert from "./Certificates/hackindia.jpeg";
import persevexCert from "./Certificates/persevex.jpeg";
import tataCert from "./Certificates/tata-crucible.jpeg";

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const projects = [
    {
      title: "AI-Powered Data Analyst & SQL Copilot",
      description:
        "An AI-powered analytics application that allows users to upload datasets, explore data, generate SQL queries and obtain meaningful analytical insights.",
      tags: ["Python", "SQL", "AI", "Data Analytics", "Streamlit"],
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A Python desktop application for tracking expenses, managing budgets and savings, organizing spending categories and generating analytical reports.",
      tags: ["Python", "Tkinter", "OpenPyXL", "Matplotlib"],
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "An interactive Power BI dashboard built to explore retail data, identify trends, analyze revenue and present business insights.",
      tags: ["Power BI", "Power Query", "Excel", "Data Analytics"],
    },
    {
      title: "Medi-4-U",
      description:
        "A community-focused concept designed to help collect unused medicines and make them available for people who need them.",
      tags: ["Social Impact", "Technology", "Community"],
    },
  ];

  const experiences = [
    {
      role: "Power BI Intern",
      organization: "Cognifyz Technologies",
      description:
        "Worked on data exploration, analysis and visualization using Power BI. Created dashboards and transformed raw datasets into meaningful business insights.",
    },
    {
      role: "Data Analytics Job Simulation",
      organization: "Deloitte Australia",
      description:
        "Completed a practical data analytics simulation involving data analysis, visualization and business-focused insights.",
    },
    {
      role: "Data Visualisation Job Simulation",
      organization: "Tata",
      description:
        "Worked with business datasets, data cleaning and visualization tasks to communicate analytical findings through dashboards.",
    },
  ];

  const certificates = [
    {
      title: "Data Analytics Internship",
      organization: "Cognifyz Technologies",
      image: cognifyzCert,
    },
    {
      title: "Data Analytics Job Simulation",
      organization: "Deloitte",
      image: deloitteCert,
    },
    {
      title: "Employment Communication",
      organization: "NPTEL",
      image: employmentCert,
    },
    {
      title: "Equity Edge E-Summit '25",
      organization: "Jadavpur University",
      image: equityCert,
    },
    {
      title: "EY Techathon 6.0",
      organization: "EY",
      image: eyCert,
    },
    {
      title: "Genathon 3.0",
      organization: "IIIT Nagpur",
      image: genathonCert,
    },
    {
      title: "HackIndia × BrainForge.AI Hackathon",
      organization: "HackIndia",
      image: hackindiaCert,
    },
    {
      title: "Data Analytics Experience",
      organization: "Persevex",
      image: persevexCert,
    },
    {
      title: "TATA Crucible Campus Quiz 2025",
      organization: "TATA",
      image: tataCert,
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "C",
    "C++",
    "Java",
    "Power BI",
    "Excel",
    "Pandas",
    "Matplotlib",
    "Tkinter",
    "Git & GitHub",
    "Data Analytics",
  ];

  return (
    <div className="min-h-screen bg-[#070b2b] text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#05081f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tight text-[#818cf8]"
          >
            Vaishnavi.
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#certifications" className="transition hover:text-white">
              Certifications
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#818cf8]">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Vaishnavi
              <br />
              <span className="text-[#818cf8]">Sonwane</span>
            </h1>

            <h2 className="mt-7 text-2xl font-bold leading-tight text-slate-200 sm:text-3xl">
              Data Analyst & Computer
              <br className="hidden sm:block" />
              Engineering Student
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 lg:mx-0">
              I enjoy transforming data into meaningful insights and building
              practical technology solutions using Python, SQL, Power BI and
              modern development tools.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              <a
                href="#projects"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-500"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-indigo-400 hover:text-white"
              >
                Contact Me
              </a>

            </div>

            <div className="mt-7 flex justify-center gap-6 text-sm lg:justify-start">

              <a
                href="https://github.com/Vaishnavi-Sonwane"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-400 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi-sonwane-ba4274342/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-slate-400 transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:vaishnaviksonwane2006@gmail.com"
                className="font-medium text-slate-400 transition hover:text-white"
              >
                Email ↗
              </a>

            </div>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-[-18px] rounded-full border border-indigo-500/10" />

              <div className="absolute inset-[-9px] rounded-full border-2 border-indigo-500/30" />

              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#11184a] shadow-[0_0_60px_rgba(99,102,241,0.18)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">

                <img
                  src="/profile.jpg"
                  alt="Vaishnavi Sonwane"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Turning data into useful insights.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            I am Vaishnavi Sonwane, a Computer Engineering student interested
            in Data Analytics, Python, SQL, Power BI and practical technology
            solutions. I enjoy working with datasets, creating dashboards and
            developing applications that solve real-world problems.
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1035]/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-[#0e1442]"
              >

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-lg font-bold text-indigo-400">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Experience & Simulations
          </h2>

          <div className="mt-10 space-y-6">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1035]/70 p-7"
              >

                <div className="flex flex-col justify-between gap-2 sm:flex-row">

                  <div>
                    <h3 className="text-xl font-bold">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-semibold text-indigo-400">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="text-sm font-bold text-slate-600">
                    0{index + 1}
                  </span>

                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  {experience.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Achievements
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Certifications
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1035]/70 transition hover:-translate-y-2 hover:border-indigo-500/40"
              >

                <div className="h-48 overflow-hidden bg-slate-900">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-5">

                  <h3 className="font-bold">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {certificate.organization}
                  </p>

                  <button
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold transition hover:bg-indigo-500"
                  >
                    View Certificate
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Technical Skills
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Skills
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">

            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-xl border border-white/10 bg-[#0b1035] px-5 py-3 font-semibold text-slate-200 transition hover:border-indigo-500/40 hover:text-indigo-300"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Interested in collaborating, discussing a project or connecting
            professionally? Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:vaishnaviksonwane2006@gmail.com"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Vaishnavi-Sonwane"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-indigo-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-sonwane-ba4274342/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-indigo-400"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vaishnavi Sonwane. All rights reserved.
      </footer>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-2xl border border-white/10 bg-[#0b1035] p-4"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-2 text-white hover:bg-black"
            >
              ✕
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[80vh] w-auto rounded-lg"
            />

          </div>

        </div>
      )}

    </div>
  );
}

export default App;