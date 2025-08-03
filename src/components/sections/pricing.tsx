"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const plans = [
    {
        name: "Starter",
        price: 29,
        description: "Perfect for small businesses and startups",
        features: [
            "AI Content Generation (50/month)",
            "Basic Analytics",
            "Email Support",
            "5 Team Members",
            "Basic Templates",
            "Standard Security"
        ],
        popular: false,
        color: "border-gray-200"
    },
    {
        name: "Professional",
        price: 99,
        description: "Ideal for growing businesses and marketing teams",
        features: [
            "AI Content Generation (500/month)",
            "Advanced Analytics & Insights",
            "Priority Support",
            "Unlimited Team Members",
            "Custom Templates",
            "Advanced Security",
            "API Access",
            "Custom Integrations"
        ],
        popular: true,
        color: "border-blue-500"
    },
    {
        name: "Enterprise",
        price: 299,
        description: "For large organizations with advanced needs",
        features: [
            "Unlimited AI Content Generation",
            "Predictive Analytics",
            "Dedicated Success Manager",
            "Unlimited Everything",
            "Custom AI Training",
            "Enterprise Security",
            "White-label Solutions",
            "Custom Development"
        ],
        popular: false,
        color: "border-gray-200"
    }
]

const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

    const getPrice = (basePrice: number) => {
        return billingCycle === "yearly" ? Math.round(basePrice * 0.8) : basePrice
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
                        Simple, Transparent
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Pricing
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                    >
                        Choose the perfect plan for your business. All plans include our core AI features.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center justify-center gap-4 mb-12"
                    >
                        <span className={`text-sm ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                            className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors"
                        >
                            <div
                                className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform ${billingCycle === "yearly" ? "translate-x-8" : "translate-x-0"
                                    }`}
                            />
                        </button>
                        <span className={`text-sm ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>
                            Yearly
                            <Badge variant="success" className="ml-2">Save 20%</Badge>
                        </span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card
                                hover
                                className={`p-8 h-full relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge variant="success" className="flex items-center gap-1">
                                            <Star size={14} />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>

                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">${getPrice(plan.price)}</span>
                                        <span className="text-gray-500">/{billingCycle === "monthly" ? "mo" : "mo, billed yearly"}</span>
                                    </div>

                                    <Button
                                        variant={plan.popular ? "gradient" : "outline"}
                                        className="w-full"
                                        size="lg"
                                    >
                                        Get Started
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included:</h4>
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-3">
                                            <Check size={16} className="text-green-500 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Enterprise CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We offer custom enterprise solutions with dedicated support, custom AI training,
                            and white-label options for large organizations.
                        </p>
                        <Button variant="outline" size="lg">
                            Contact Sales
                        </Button>
                    </Card>
                </motion.div>
            </Container>
        </section>
    )
}

export { Pricing } 