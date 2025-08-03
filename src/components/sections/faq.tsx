"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "How does the AI content generation work?",
        answer: "Our AI uses advanced language models trained on millions of marketing examples. Simply provide a brief description of what you need, and our AI will generate high-quality, engaging content tailored to your brand voice and target audience."
    },
    {
        question: "Can I customize the AI to match my brand voice?",
        answer: "Absolutely! You can train the AI on your existing content, brand guidelines, and tone of voice. This ensures all generated content maintains your unique brand personality and messaging style."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 customer support through live chat, email, and phone. Enterprise customers get dedicated success managers and priority support. We also offer comprehensive documentation and video tutorials."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we take security seriously. We use bank-level encryption, SOC 2 compliance, and never share your data with third parties. All data is stored in secure, redundant cloud infrastructure with regular backups."
    },
    {
        question: "Can I integrate with my existing tools?",
        answer: "Yes! We offer integrations with popular platforms like HubSpot, Salesforce, Mailchimp, and more. We also provide a robust API for custom integrations with your existing tech stack."
    },
    {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after the trial period."
    },
    {
        question: "What's included in the Enterprise plan?",
        answer: "The Enterprise plan includes unlimited AI usage, custom AI training, white-label solutions, dedicated success manager, custom integrations, advanced analytics, and priority support with SLA guarantees."
    },
    {
        question: "How quickly can I see results?",
        answer: "Most customers see immediate improvements in content creation speed and quality. For ROI improvements, you can typically see measurable results within 30-60 days of consistent use."
    }
]

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Frequently Asked
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Questions
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Everything you need to know about ADmyBRAND AI Suite. Can&apos;t find the answer you&apos;re looking for?
                        <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                            {" "}Contact our support team
                        </a>
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    size={20}
                                    className={`text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 pr-8">
                                            <p className="text-gray-600 leading-relaxed px-3">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our support team is here to help you get the most out of ADmyBRAND AI Suite.
                            Get in touch and we&apos;ll respond within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Contact Support
                            </button>
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export { FAQ } 