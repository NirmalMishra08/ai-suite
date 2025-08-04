"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    TrendingUp,
    Users,
    Zap,
    ArrowRight,
    Calendar,
    Clock,
    ExternalLink
} from "lucide-react"

const blogPosts = [
    {
        title: "10 AI Marketing Trends That Will Dominate 2025",
        excerpt: "Discover the latest AI marketing trends that are reshaping how businesses approach digital marketing and customer engagement.",
        category: "Trends",
        readTime: "5 min read",
        date: "Dec 15, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        featured: true
    },
    {
        title: "How to Create AI-Generated Content That Converts",
        excerpt: "Learn the best practices for creating AI-generated content that resonates with your audience and drives conversions.",
        category: "Content",
        readTime: "7 min read",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
        featured: false
    },
    {
        title: "The Complete Guide to AI-Powered Customer Segmentation",
        excerpt: "Master the art of customer segmentation using AI to deliver personalized experiences that boost engagement and sales.",
        category: "Analytics",
        readTime: "8 min read",
        date: "Dec 10, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        featured: false
    },
    {
        title: "Building an AI Marketing Strategy: A Step-by-Step Guide",
        excerpt: "Create a comprehensive AI marketing strategy that aligns with your business goals and maximizes ROI.",
        category: "Strategy",
        readTime: "10 min read",
        date: "Dec 8, 2024",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        featured: false
    },
    {
        title: "ROI Analysis: How AI Marketing Tools Pay for Themselves",
        excerpt: "Real case studies showing how AI marketing tools generate significant ROI and pay for themselves within months.",
        category: "ROI",
        readTime: "6 min read",
        date: "Dec 5, 2024",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        featured: false
    },
    {
        title: "The Future of Marketing: AI vs Human Creativity",
        excerpt: "Explore the balance between AI automation and human creativity in modern marketing strategies.",
        category: "Future",
        readTime: "9 min read",
        date: "Dec 3, 2024",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
        featured: false
    }
]

const categories = [
    { name: "All", count: 24, active: true },
    { name: "Trends", count: 8, active: false },
    { name: "Content", count: 6, active: false },
    { name: "Analytics", count: 5, active: false },
    { name: "Strategy", count: 4, active: false },
    { name: "ROI", count: 3, active: false }
]

const Blog: React.FC = () => {
    const featuredPost = blogPosts.find(post => post.featured)
    const regularPosts = blogPosts.filter(post => !post.featured)

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
                        Latest Insights &
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Resources
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Stay ahead of the curve with our latest articles, guides, and insights on AI-powered marketing.
                    </motion.p>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category.active
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            {category.name}
                            <span className="ml-2 text-xs opacity-70">({category.count})</span>
                        </button>
                    ))}
                </motion.div>

                {/* Featured Post */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <Card className="overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative h-64 lg:h-full">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="success">Featured</Badge>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Badge variant="info">{featuredPost.category}</Badge>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Calendar size={14} className="mr-1" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Clock size={14} className="mr-1" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <Button variant="outline" className="w-fit group">
                                        Read Article
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {regularPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        >
                            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                                <div className="relative h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="info">{post.category}</Badge>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock size={14} className="mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Button variant="ghost" size="sm" className="p-0 h-auto group">
                                        Read More
                                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
                >
                    <div className="max-w-2xl mx-auto">
                        <BookOpen size={48} className="mx-auto mb-6 text-blue-200" />
                        <h3 className="text-3xl font-bold mb-4">
                            Get Weekly AI Marketing Insights
                        </h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            Join 10,000+ marketers who get our latest articles, case studies, and AI marketing tips delivered to their inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <Button variant="outline" className="whitespace-nowrap text-white hover:text-blue-500">
                                Subscribe
                                <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>

                        <p className="text-sm text-blue-200 mt-4">
                            No spam, unsubscribe at any time. We respect your privacy.
                        </p>
                    </div>
                </motion.div>

                {/* Resources Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center"
                >
                    <div className="flex flex-col items-center">
                        <BookOpen className="w-8 h-8 text-blue-500 mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
                        <div className="text-gray-600 dark:text-gray-400">Articles</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <TrendingUp className="w-8 h-8 text-green-500 mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">50k+</div>
                        <div className="text-gray-600 dark:text-gray-400">Readers</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 text-purple-500 mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">25+</div>
                        <div className="text-gray-600 dark:text-gray-400">Experts</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                        <div className="text-gray-600 dark:text-gray-400">Case Studies</div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export { Blog } 