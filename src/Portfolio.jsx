import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Vatsalya Bhardwaaj</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Hi, I'm Vatsalya 👋
          </motion.h2>
          <p className="text-lg mb-6">
            MCA 2nd Year Student @ Galgotias College of Engineering and Technology
          </p>
          <p className="text-md max-w-2xl mx-auto">
            I am passionate about building scalable applications using <b>Spring Boot Microservices</b> and creating interactive frontends with <b>HTML, CSS, and JavaScript</b>.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          I'm currently pursuing my <b>MCA (2nd Year)</b> at Galgotias College of Engineering and Technology. I have hands-on experience in <b>Microservices Architecture</b>, <b>Spring Boot</b>, and <b>REST APIs</b>. My interests lie in <b>full-stack development</b>, <b>cloud technologies</b>, and creating impactful digital solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-2">Hotel Rating Microservices System</h4>
              <p className="text-gray-600 mb-4">
                A distributed microservices project built using Spring Boot, Eureka Server, API Gateway, and MySQL. It allows users to rate and review hotels with secure communication between services.
              </p>
              <span className="text-blue-600 font-medium">Spring Boot | Microservices | Eureka</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-2">E-commerce Platform</h4>
              <p className="text-gray-600 mb-4">
                A full-stack web application with product catalog, cart, order management, and Razorpay integration. Backend in Spring Boot, frontend with HTML/CSS/JS, and database with MySQL.
              </p>
              <span className="text-blue-600 font-medium">Spring Boot | MySQL | Razorpay</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-xl font-semibold mb-2">Movie Watchlist App</h4>
              <p className="text-gray-600 mb-4">
                A CRUD application that lets users add, update, and delete movies from their personal watchlist. Built with Spring Boot and MySQL.
              </p>
              <span className="text-blue-600 font-medium">CRUD | Spring Boot | MySQL</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-700 mb-6">
          Let's connect on LinkedIn and GitHub, or drop me an email.
        </p>
        <div className="space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-900 hover:underline">GitHub</a>
          <a href="mailto:vatsalya@example.com" className="text-red-600 hover:underline">Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Vatsalya Bhardwaaj. All rights reserved.</p>
      </footer>
    </div>
  );
}
