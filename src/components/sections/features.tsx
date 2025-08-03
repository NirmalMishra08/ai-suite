"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import {
    Brain,
    MessageSquare,
    Image,
    TrendingUp,
    Users,
    BarChart3,
    Zap,
    Target,
    Globe,
    Shield,
    Clock
} from "lucide-react"

const features = [
    {
        icon: Brain,
        title: "AI Content Generation",
        description: "Generate high-quality blog posts, social media content, and marketing copy in seconds with our advanced AI.",
        color: "text-blue-600"
    },
    {
        icon: Image,
        title: "Visual Design AI",
        description: "Create stunning graphics, logos, and social media visuals with our AI-powered design tools.",
        color: "text-purple-600"
    },
    {
        icon: MessageSquare,
        title: "Smart Chatbots",
        description: "Build intelligent chatbots that provide 24/7 customer support and lead generation.",
        color: "text-green-600"
    },
    {
        icon: TrendingUp,
        title: "Analytics & Insights",
        description: "Get deep insights into your marketing performance with AI-powered analytics and recommendations.",
        color: "text-orange-600"
    },
    {
        icon: Users,
        title: "Audience Targeting",
        description: "Identify and target your ideal audience with AI-driven segmentation and personalization.",
        color: "text-pink-600"
    },
    {
        icon: BarChart3,
        title: "ROI Optimization",
        description: "Maximize your marketing ROI with AI-powered budget allocation and performance optimization.",
        color: "text-indigo-600"
    },
    {
        icon: Zap,
        title: "Automated Workflows",
        description: "Automate repetitive marketing tasks and create seamless workflows that save hours every week.",
        color: "text-yellow-600"
    },
    {
        icon: Target,
        title: "Predictive Analytics",
        description: "Predict customer behavior and market trends with our advanced machine learning algorithms.",
        color: "text-red-600"
    }
]

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Everything You Need to
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Scale Your Brand
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Our comprehensive AI suite provides all the tools you need to create, optimize, and scale your marketing efforts.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card hover className="p-8 h-full">
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${feature.color}`}>
                                        <feature.icon size={24} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Clock className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Save 20+ Hours/Week</h3>
                        <p className="text-gray-600 dark:text-gray-400">Automate repetitive tasks and focus on what matters most.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise Security</h3>
                        <p className="text-gray-600 dark:text-gray-400">Bank-level security with SOC 2 compliance and data encryption.</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <Globe className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Support</h3>
                        <p className="text-gray-600 dark:text-gray-400">24/7 support in 50+ languages with dedicated success managers.</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export { Features } 