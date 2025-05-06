// components/Layout.js
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Background elements (keep your existing background code) */}
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
        {/* Mobile menu button */}
        <div></div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden mr-25 mt-5  md:flex space-x-6  lg:space-x-8 xl:space-x-20 font-medium text-sm md:text-base">
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
          {isOpen && (
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
                      onClick={() => setIsOpen(false)}
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

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

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