"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Play, Sparkles, Zap, Target, X, Maximize2 } from "lucide-react"

const Hero: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
                </div>

                <Container className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto py-20">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-8"
                        >
                            <Sparkles size={16} />
                            AI-Powered Marketing Suite
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                        >
                            Transform Your
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {" "}Brand{" "}
                            </span>
                            with AI
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Create stunning marketing campaigns, generate compelling content, and boost your brand&apos;s
                            presence with our cutting-edge AI suite. 10x faster than traditional methods.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Button size="lg" variant="gradient" className="group">
                                Start Free Trial
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group"
                                onClick={() => setShowVideo(true)}
                            >
                                <Play size={20} className="mr-2" />
                                Watch Demo
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">10x</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">Faster Content Creation</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Target className="w-6 h-6 text-blue-500 mr-2" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">95%</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">Higher Engagement</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">50k+</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Demo Video Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    See ADmyBRAND AI Suite in Action
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                    Watch how our AI transforms your marketing workflow in just 2 minutes
                                </p>

                                {/* Video Thumbnail */}
                                <div className="relative max-w-2xl mx-auto">
                                    <div className="relative bg-gray-900 rounded-xl overflow-hidden aspect-video">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button
                                                onClick={() => setShowVideo(true)}
                                                className="group relative z-10"
                                            >
                                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                                    <Play size={32} className="text-blue-600 ml-1" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                                2:34
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <span>🎥 Product Demo</span>
                                        <span>•</span>
                                        <span>⚡ AI Features</span>
                                        <span>•</span>
                                        <span>📊 Real Results</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Video Modal */}
            {showVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowVideo(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <button
                            className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                            <Maximize2 size={20} />
                        </button>

                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <Play size={64} className="mx-auto mb-4 opacity-50" />
                                <p className="text-lg">Demo Video Player</p>
                                <p className="text-sm opacity-70 mt-2">Video would be embedded here</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export { Hero } 