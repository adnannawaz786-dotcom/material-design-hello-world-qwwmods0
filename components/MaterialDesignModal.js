import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Layout, Accessibility, Smartphone, Code, Lightbulb } from 'lucide-react';

const MaterialDesignModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const principles = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Material as a metaphor",
      description: "Material Design is guided by print design methods — typography, grids, space, scale, color, and imagery — to create hierarchy, meaning, and focus."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Bold, graphic, intentional",
      description: "Elements and components have realistic lighting and surfaces. Use color, typography, and imagery to create hierarchy and express brand."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Motion provides meaning",
      description: "Motion focuses attention and maintains continuity through subtle feedback and coherent transitions."
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "Accessible design",
      description: "Design for everyone with accessibility features that make products usable by people with disabilities."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Adaptive design",
      description: "A single underlying system that allows for a unified experience across platforms and device sizes."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation in simplicity",
      description: "Focus on user needs and remove unnecessary complexity while maintaining powerful functionality."
    }
  ];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.3 
          }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-2">Material Design 3</h2>
                <p className="text-blue-100 text-lg">
                  Google's most expressive and adaptive design system
                </p>
              </motion.div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  What is Material Design 3?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Material Design 3 (Material You) is Google's latest design system that creates 
                  personalized experiences with dynamic color, enhanced accessibility, and 
                  adaptive layouts. It builds upon the foundation of Material Design with 
                  more expressive and customizable components.
                </p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features of Material Design 3
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Dynamic Color</h4>
                  <p className="text-green-700 text-sm">
                    Personalized color schemes that adapt to user preferences and wallpapers.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Enhanced Components</h4>
                  <p className="text-orange-700 text-sm">
                    Updated components with improved accessibility and visual hierarchy.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-2">Expressive Typography</h4>
                  <p className="text-pink-700 text-sm">
                    More expressive type scales and improved readability across devices.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Adaptive Layouts</h4>
                  <p className="text-indigo-700 text-sm">
                    Responsive designs that work seamlessly across different screen sizes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Core Design Principles
              </h3>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                      {principle.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Learn more about Material Design 3 at{' '}
                  <a 
                    href="https://m3.material.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium underline"
                  >
                    m3.material.io
                  </a>
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MaterialDesignModal;