import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Palette, Layers, Zap, Smartphone, Eye, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const materialDesignPrinciples = [
  {
    title: 'Material as Metaphor',
    description: 'Material Design uses the metaphor of paper and ink to create a visual language that synthesizes classic principles of good design.',
    icon: <Layers className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    title: 'Bold, Graphic, Intentional',
    description: 'The foundational elements of print design - typography, grids, space, scale, color, and use of imagery - guide visual treatments.',
    icon: <Palette className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    title: 'Motion Provides Meaning',
    description: 'Motion respects and reinforces the user as the prime mover. Primary user actions are inflection points that initiate motion.',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-green-100 text-green-800'
  },
  {
    title: 'Adaptive Design',
    description: 'A single underlying system organizes interactions and space. Each device reflects a different view of the same underlying system.',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    title: 'Usability',
    description: 'Design is based on user needs. Every design decision is made with the user in mind, ensuring accessibility and ease of use.',
    icon: <Eye className="w-6 h-6" />,
    color: 'bg-teal-100 text-teal-800'
  },
  {
    title: 'Delight',
    description: 'Beautiful design creates positive emotions and meaningful experiences that users remember and enjoy.',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-pink-100 text-pink-800'
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <motion.div 
          className="container mx-auto px-4 py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl mb-6">
                <span className="text-3xl font-bold text-white">M3</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hello, World!
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to Material Design 3 - where beautiful interfaces meet intuitive experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Click Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Material Design 3 Principles
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Discover the core principles that make Material Design 3 a powerful and intuitive design system
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Separator className="my-6" />
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {materialDesignPrinciples.map((principle, index) => (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={`${principle.color} p-2`}>
                                {principle.icon}
                              </Badge>
                              <CardTitle className="text-lg font-semibold text-gray-900">
                                {principle.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-gray-600 leading-relaxed">
                              {principle.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Why Material Design 3?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Material Design 3 represents the evolution of Google's design system, emphasizing personal expression, 
                      dynamic color, and enhanced accessibility. It provides a flexible foundation for creating beautiful, 
                      usable interfaces that work across platforms and devices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Accessibility First</Badge>
                      <Badge variant="secondary">Dynamic Theming</Badge>
                      <Badge variant="secondary">Cross-Platform</Badge>
                      <Badge variant="secondary">User-Centric</Badge>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                Material Design 3
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="container mx-auto px-4 pb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Stunning visual hierarchy with thoughtful use of color, typography, and spacing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Smooth Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Fluid animations and micro-interactions that provide meaningful feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-semibold">Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Designed with accessibility in mind, ensuring usability for everyone.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}