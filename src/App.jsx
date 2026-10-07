// import { GitHub, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-purple-500">Nadeem</h2>

          <div className="hidden md:flex gap-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Skills
            </a>

            <a
              href="#certifications"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Certifications
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 md:hidden">
              <div className="flex flex-col px-6 py-4 gap-4">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Skills
                </a>

                <a
                  href="#certifications"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Certifications
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-purple-400 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Home */}
        <section
          id="home"
          className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white flex items-center px-6 md:px-16 pt-28"
        >
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-purple-400 text-lg font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Nadeem Shariff
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-8">
              I'm a Full Stack Developer from Chennai, passionate about building
              responsive web applications using React, JavaScript, Node.js,
              Express, and MongoDB.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-lg font-medium transition"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="border border-gray-600 hover:border-purple-400 text-white px-7 py-3 rounded-lg font-medium transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="bg-gray-950 text-white px-6 md:px-16 py-24"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-purple-400 font-semibold mb-3">GET TO KNOW ME</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-400 text-lg leading-8 max-w-3xl">
              I'm a Full Stack Developer with hands-on experience building web
              applications using React, JavaScript, Node.js, Express, and
              MongoDB. I enjoy turning ideas into responsive and user-friendly
              applications and continuously improving my development skills. I'm
              looking for an opportunity where I can contribute to real-world
              projects, learn from experienced developers, and grow as a
              software developer.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="bg-black text-white px-6 md:px-16 py-24"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-purple-400 font-semibold mb-3">
              MY TECHNOLOGIES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">JavaScript</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Programming Language
                </p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">React</h3>
                <p className="text-gray-500 text-sm mt-1">Frontend Library</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">TypeScript</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Programming Language
                </p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">Node.js</h3>
                <p className="text-gray-500 text-sm mt-1">Backend Runtime</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">Express.js</h3>
                <p className="text-gray-500 text-sm mt-1">Backend Framework</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">MongoDB</h3>
                <p className="text-gray-500 text-sm mt-1">Database</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">HTML</h3>
                <p className="text-gray-500 text-sm mt-1">Markup Language</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">CSS</h3>
                <p className="text-gray-500 text-sm mt-1">Styling</p>
              </div>

              <div className="border border-white/10 bg-gray-950 rounded-xl p-5 hover:border-purple-500 hover:-translate-y-1 transition">
                <h3 className="font-semibold">Git & GitHub</h3>
                <p className="text-gray-500 text-sm mt-1">Version Control</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="bg-gray-950 text-white px-6 md:px-16 py-24"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-purple-400 font-semibold mb-3">
              MY CERTIFICATION
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Certifications
            </h2>

            <div className="border border-white/10 bg-black rounded-xl p-6 hover:border-purple-500 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-3">
                GUVI Full Stack Development Certification
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                Certified in Full Stack Development with hands-on learning in
                JavaScript, React, Node.js, Express, MongoDB and related web
                development technologies.
              </p>

              <a
                href="https://drive.google.com/file/d/1sqATu79S1ck4IjgUYhcd3s_ECpoO4wyB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg text-sm font-medium transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="bg-gray-950 text-white px-6 md:px-16 py-24"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-purple-400 font-semibold mb-3">MY WORK</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Hostel Hub */}
              <div className="border border-white/10 bg-black rounded-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
                <h3 className="text-xl font-bold mb-4">
                  Hostel Hub Management System
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  A full-stack hostel management application for managing rooms,
                  complaints, invoices, payments and user authentication.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    React
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    Node.js
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    Express
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://hostel-hub-management.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/S-Nadeem-shariff/hostel-hub-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 hover:border-purple-400 px-4 py-2 rounded-lg text-sm transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Movie Review */}
              <div className="border border-white/10 bg-black rounded-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
                <h3 className="text-xl font-bold mb-4">
                  Movie Review Application
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  A React-based movie review application where users can browse
                  movies and interact with movie reviews.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    React
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    JavaScript
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    CSS
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://movie-review-app-react-p1.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/S-Nadeem-shariff/movie-review-app-react-p1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 hover:border-purple-400 px-4 py-2 rounded-lg text-sm transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Notes App */}
              <div className="border border-white/10 bg-black rounded-xl p-6 hover:border-purple-500 hover:-translate-y-2 transition">
                <h3 className="text-xl font-bold mb-4">Notes Application</h3>

                <p className="text-gray-400 leading-7 mb-5">
                  A simple React notes application for creating, editing,
                  deleting and storing notes using browser storage.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    React
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    JavaScript
                  </span>

                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
                    LocalStorage
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://quicknotes-taking-app.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/S-Nadeem-shariff/notes-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 hover:border-purple-400 px-4 py-2 rounded-lg text-sm transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-black text-white px-6 md:px-16 py-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-400 font-semibold mb-3">GET IN TOUCH</p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
              I'm currently looking for an opportunity as a Full Stack Developer
              where I can apply my skills, learn from experienced developers,
              and contribute to real-world projects.
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-300">📍 Chennai, Tamil Nadu, India</p>

              <div className="flex gap-5 mt-6">
                <a
                  href="https://github.com/S-Nadeem-shariff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition"
                  aria-label="GitHub"
                >
                  {/* <GitHub size={28} /> */}
                </a>

                <a
                  href="https://www.linkedin.com/in/nadeem-shariff-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition"
                  aria-label="LinkedIn"
                >
                  {/* <Linkedin size={28} /> */}
                </a>

                <a
                  href="mailto:46nadeemshariff@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition"
                  aria-label="Email"
                >
                  {/* <Mail size={28} /> */}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/10 text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Nadeem Shariff. All rights reserved.
          </p>

          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}

export default App;
