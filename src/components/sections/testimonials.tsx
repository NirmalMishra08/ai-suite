"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"

import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechFlow Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        content: "ADmyBRAND AI Suite has completely transformed our marketing strategy. We've seen a 300% increase in engagement and saved countless hours on content creation.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "CEO",
        company: "StartupXYZ",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: "The AI-powered insights have helped us understand our audience better than ever before. Our ROI has increased by 250% since implementing this platform.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Brand Manager",
        company: "Creative Studios",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content: "The visual design AI is incredible! We can create professional graphics in minutes instead of hours. It's like having a full design team at our fingertips.",
        rating: 5
    },
    {
        name: "David Thompson",
        role: "Digital Marketing Lead",
        company: "GrowthCo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "The automated workflows have streamlined our entire marketing process. We're now able to focus on strategy instead of repetitive tasks.",
        rating: 5
    },
    {
        name: "Lisa Wang",
        role: "CMO",
        company: "InnovateCorp",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        content: "The predictive analytics feature is game-changing. We can now anticipate market trends and adjust our strategy proactively.",
        rating: 5
    }
]

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const toggleAutoplay = () => {
        setIsPlaying(!isPlaying)
    }

    const handleManualNavigation = () => {
        // Reset autoplay timer when user manually navigates
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        if (isPlaying && !isHovered) {
            intervalRef.current = setInterval(nextTestimonial, 5000)
        }
    }

    useEffect(() => {
        if (isPlaying && !isHovered) {
            intervalRef.current = setInterval(nextTestimonial, 5000)
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [isPlaying, isHovered])

    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Loved by
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}50,000+{" "}
                        </span>
                        Marketers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        See what our customers are saying about their experience with ADmyBRAND AI Suite.
                    </motion.p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => {
                            prevTestimonial()
                            handleManualNavigation()
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={() => {
                            nextTestimonial()
                            handleManualNavigation()
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Autoplay Toggle Button */}
                    <button
                        onClick={toggleAutoplay}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
                        title={isPlaying ? "Pause autoplay" : "Play autoplay"}
                    >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>

                    {/* Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="p-8 md:p-12 text-center dark:text-white dark:bg-gray-900">
                                <div className="flex justify-center mb-6">
                                    <Quote size={48} className="text-blue-500" />
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 dark:text-white mb-8 leading-relaxed">
                                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                                </p>

                                <div className="flex items-center justify-center mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index)
                                    handleManualNavigation()
                                }}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center"
                >
                    <div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">50k+</div>
                        <div className="text-gray-600">Active Users</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                        <div className="text-gray-600">Customer Support</div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export { Testimonials } 