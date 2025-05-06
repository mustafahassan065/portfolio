// app/projects/page.js
"use client";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout";

export default function ProjectsPage() {
  return (
    <Layout>
      <section id="projects" className="px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            All <span className="bg-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-white-300 max-w-2xl mx-auto">
            Explore my complete portfolio of development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="https://www.linkedin.com/posts/mustafa-hassan-11022530a_hi-i-have-created-an-eccomerce-website-activity-7208918976549048320-QY2n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6y_FwBb42hkuXM3J_S3pz_I-EPoxNJJCs

" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/eccomerce.jpg"
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Platform</h3>
                    <p className="text-gray-300 mb-3">Full-featured online store with payment integration</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">PYTHON</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">FLASK</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
               
              </div>
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="https://www.linkedin.com/posts/mustafa-hassan-11022530a_introducing-wellness-wise-a-comprehensive-activity-7230569282114338817-cvI4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6y_FwBb42hkuXM3J_S3pz_I-EPoxNJJCs" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/wellness.jpg"
                  alt="Social Media Dashboard"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Wellness Wise Website</h3>
                    <p className="text-gray-300 mb-3">A Wellness Platform offering expert advice,health tips and a secure dashboard for expert patient interaction</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">DJANGO</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">PYTHON</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">JAVASCRIPT</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                
              </div>
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="#" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/CRM.webp"
                  alt="AI Content Generator"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Customer Relationship Management</h3>
                    <p className="text-gray-300 mb-3">A centralized CRM platform streamlining customer interactions,enhancing relationships and driving business growth</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">NODE JS</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">EXPRESS</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">MONGODB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                
              </div>
            </a>
          </motion.div>
           {/* Project 4 */}
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="#" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/video.jpeg"
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Video Distribution Website</h3>
                    <p className="text-gray-300 mb-3">Streamlining video content delivery and management for diverse audience</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">REACT</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">DJANGO</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
               
              </div>
            </a>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="#" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/law.webp"
                  alt="Social Media Dashboard"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Law and Firm Website</h3>
                    <p className="text-gray-300 mb-3">Expert legal services and resources at your fingertips</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">NEXT JS</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">FLASK</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">MYSQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              
              </div>
            </a>
          </motion.div>

          {/* Projects 3-9 would follow the same pattern */}
          {/* I'm showing 3 as example, you would duplicate and modify for all 9 projects */}
          
          {/* Project 6 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-xl shadow-2xl"
          >
            <a href="#" className="block">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/portfolio.png"
                  alt="AI Content Generator"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Company Portfolio</h3>
                    <p className="text-gray-300 mb-3">Showcasing innovative projects,expertise and stories that define company excellence.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">PHP</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">LAREVAL</span>
                      <span className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full">MYSQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
    
              </div>
            </a>
          </motion.div>

          {/* Add 6 more projects following the same pattern */}
        </div>
      </section>
    </Layout>
  );
}