import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-blue-200/20 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Material Design 3
              </h1>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <motion.a 
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                About
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, color: '#3b82f6' }}
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Design System
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-t border-blue-200/20 bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gray-700/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MD</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">Material Design 3</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                Exploring Google's latest design system with modern web technologies and best practices.
              </p>
            </div>

            {/* Links section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    Design Guidelines
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    Component Library
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  >
                    Color System
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Contact section */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Connect</h3>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 Material Design 3 Demo. Built with Next.js and Tailwind CSS.
              </p>
              <div className="flex items-center space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;