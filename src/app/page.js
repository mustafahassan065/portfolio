"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Home() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = '/CV.docx';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mustafa_Hassan_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900"></div>
      <div className="absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-float"></div>
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mix-blend-screen filter blur-[90px] opacity-30 animate-float animation-delay-4000"></div>
      
      {/* Dynamic grid */}
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: 'linear-gradient(to right, rgba(192,132,252,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,132,252,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Responsive Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-8 md:py-6 z-50 relative">
        <div></div>
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden mr-25 mt-5 md:flex space-x-6 lg:space-x-8 xl:space-x-20 font-medium text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-white font-bold transition duration-300 hover:underline underline-offset-4 ${
                  pathname === item.path ? 'text-cyan-300' : 'hover:text-indigo-100'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 pt-20 px-6"
            >
              <ul className="flex flex-col space-y-8 text-xl">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 text-white font-bold transition duration-300 ${
                        pathname === item.path ? 'text-cyan-300' : 'hover:text-indigo-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="bg-cyan-300 bg-clip-text text-transparent">Mustafa Hassan</span>
          </h2>
          <p className="text-lg md:text-xl text-white-300 max-w-lg">
            Full Stack Web Developer with <span className="text-cyan-300 font-bold">5+ years</span> of experience crafting modern web apps using the latest technologies
          </p>
          <div className="pt-2">
            <button
              onClick={handleDownloadCV}
              className="inline-block px-6 py-3 bg-cyan-300 rounded-full text-gray-900 font-bold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
        >
          <div className="w-64 h-64 mr-10 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-indigo-900/50 shadow-2xl shadow-indigo-900/30 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 opacity-50"></div>
            <Image
              src="/mustafa.png"
              alt="Mustafa Hassan"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </main>

      {/* Projects Section */}
      <section id="pros" className="relative z-10 px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="bg-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-white-300 max-w-2xl mx-auto">
            Here are some of my recent works. Each project was carefully crafted to solve unique challenges.
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
            <a href="https://www.linkedin.com/posts/mustafa-hassan-11022530a_hi-i-have-created-an-eccomerce-website-activity-7208918976549048320-QY2n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6y_FwBb42hkuXM3J_S3pz_I-EPoxNJJCs" className="block">
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
                  alt="Wellness Wise Website"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Wellness Wise Website</h3>
                    <p className="text-gray-300 mb-3">A Wellness Platform offering expert advice, health tips and a secure dashboard</p>
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
                  alt="Customer Relationship Management"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Customer Relationship Management</h3>
                    <p className="text-gray-300 mb-3">A centralized CRM platform streamlining customer interactions</p>
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
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-cyan-300 text-cyan-300 rounded-full font-bold hover:bg-cyan-300 hover:text-gray-900 transition-all duration-300"
          > 
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}