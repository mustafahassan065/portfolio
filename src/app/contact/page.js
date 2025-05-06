// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-12 px-4 sm:px-8 md:px-16 flex items-center justify-center"
      >
        <div className="w-full max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
              Contact <span className="bg-cyan-300 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-cyan-300 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-300 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              Let's connect! Here's how you can reach me.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl sm:shadow-2xl shadow-cyan-300/10 border border-gray-700 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8">
                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-cyan-300/10 rounded-full flex-shrink-0">
                    <span className="text-cyan-300 text-base sm:text-lg">📱</span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 font-bold text-xs sm:text-sm">Phone</h3>
                    <a 
                      href="tel:+923304576247" 
                      className="text-white hover:text-cyan-300 transition text-base sm:text-lg"
                    >
                      +92 330 4576 247
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-cyan-300/10 rounded-full flex-shrink-0">
                    <span className="text-cyan-300 text-base sm:text-lg">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 font-bold text-xs sm:text-sm">Email</h3>
                    <a 
                      href="mailto:mustafaprogrammer786@gmail.com" 
                      className="text-white hover:text-cyan-300 transition text-sm sm:text-base md:text-lg break-all"
                    >
                      mustafaprogrammer786@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-cyan-300/10 rounded-full flex-shrink-0">
                    <span className="text-cyan-300 text-base sm:text-lg">📍</span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 font-bold text-xs sm:text-sm">Location</h3>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      Shakargarh, Punjab, Pakistan
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-cyan-300">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/mustafa-hassan-11022530a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700 hover:bg-cyan-300/10 rounded-lg sm:rounded-xl border border-gray-600 hover:border-cyan-300 transition"
                  >
                    <span className="text-cyan-300 text-base sm:text-lg">🔗</span>
                    <span className="text-white font-medium sm:font-bold text-sm sm:text-base">
                      LinkedIn
                    </span>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/mustafahassan065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700 hover:bg-cyan-300/10 rounded-lg sm:rounded-xl border border-gray-600 hover:border-cyan-300 transition"
                  >
                    <span className="text-cyan-300 text-base sm:text-lg">💻</span>
                    <span className="text-white font-medium sm:font-bold text-sm sm:text-base">
                      GitHub
                    </span>
                  </motion.a>

                  {/* Fiverr */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.fiverr.com/sellers/mh_tech11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700 hover:bg-cyan-300/10 rounded-lg sm:rounded-xl border border-gray-600 hover:border-cyan-300 transition"
                  >
                    <span className="text-cyan-300 text-base sm:text-lg">🖥️</span>
                    <span className="text-white font-medium sm:font-bold text-sm sm:text-base">
                      Fiverr
                    </span>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:mustafaprogrammer786@gmail.com"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700 hover:bg-cyan-300/10 rounded-lg sm:rounded-xl border border-gray-600 hover:border-cyan-300 transition"
                  >
                    <span className="text-cyan-300 text-base sm:text-lg">📧</span>
                    <span className="text-white font-medium sm:font-bold text-sm sm:text-base">
                      Email
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}