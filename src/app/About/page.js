// app/about/page.js
"use client";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-20 px-8 md:px-16"
      >
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              About <span className="bg-cyan-300 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-300 mx-auto mb-8"></div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-300/10 border border-gray-700"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-300/30 relative">
                  <img
                    src="/mustafa.png"
                    alt="Mustafa Hassan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-indigo-500/10"></div>
                </div>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold mb-4">Mustafa Hassan</h2>
                <p className="text-cyan-300 font-medium mb-6">Full Stack Web Developer</p>
                
                <div className="space-y-4 text-white-300">
                  <p>
                    With <span className="text-cyan-300 font-bold">5+ years</span> of professional experience in web development, 
                    I specialize in creating modern, responsive, and high-performance applications.
                  </p>
                  
                  <p>
                    Currently pursuing <span className="text-cyan-300">Software Engineering</span> at Government College University Faisalabad, 
                    combining academic knowledge with practical industry experience.
                  </p>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="mt-8"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-cyan-100">Technical Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
                        'React', 'Next.js', 'Node.js', 'Express',
                        'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'TailwindCSS'
                      ].map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                          className="px-3 py-1 bg-cyan-300/10 text-cyan-300 rounded-full text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-cyan-100">My Journey</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan-300/30"></div>
                
                {[
                  {
                    year: "2020",
                    title: "Started Web Development",
                    description: "Began learning HTML, CSS and JavaScript fundamentals"
                  },
                  {
                    year: "2022",
                    title: "Professional Projects",
                    description: "Started freelancing and working on client projects"
                  },
                  {
                    year: "2023",
                    title: "Full Stack Specialization",
                    description: "Expanded into backend development with Node.js and Python"
                  },
                  {
                    year: "2024",
                    title: "Software Engineering Degree",
                    description: "Pursuing formal education while maintaining professional work"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className="relative pl-16 pb-8"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-cyan-300/10 border-2 border-cyan-300 flex items-center justify-center">
                      <span className="text-cyan-300 font-bold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}