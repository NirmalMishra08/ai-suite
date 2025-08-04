"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"

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
        color: "border-gray-200",
        contentLimit: 50,
        timeSaved: 2, // hours per piece
        costPerPiece: 0.58
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
        color: "border-blue-500",
        contentLimit: 500,
        timeSaved: 2.5, // hours per piece
        costPerPiece: 0.198
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
        color: "border-gray-200",
        contentLimit: 1000,
        timeSaved: 3, // hours per piece
        costPerPiece: 0.299
    }
]

const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
    const [selectedPlan, setSelectedPlan] = useState(1) // Professional plan
    const [monthlyContent, setMonthlyContent] = useState(200)
    const [hourlyRate, setHourlyRate] = useState(50)

    const getPrice = (basePrice: number) => {
        return billingCycle === "yearly" ? Math.round(basePrice * 0.8) : basePrice
    }

    const selectedPlanData = plans[selectedPlan]
    const monthlyCost = getPrice(selectedPlanData.price)
    const contentCost = (monthlyContent * selectedPlanData.costPerPiece)
    const totalCost = monthlyCost + contentCost
    const timeSaved = monthlyContent * selectedPlanData.timeSaved
    const costSavings = timeSaved * hourlyRate
    const netSavings = costSavings - totalCost
    const roi = ((netSavings / totalCost) * 100).toFixed(0)

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
                                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${billingCycle === "yearly" ? "translate-x-8" : "translate-x-0"
                                    }`}
                            />
                        </button>
                        <span className={`text-sm ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>
                            Yearly
                            <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                Save 20%
                            </span>
                        </span>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                    Most Popular
                                </Badge>
                            )}
                            <Card
                                className={`p-8 h-full transition-all duration-300 hover:shadow-xl ${selectedPlan === index ? "ring-2 ring-blue-500" : ""
                                    } ${plan.color}`}
                                onClick={() => setSelectedPlan(index)}
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 mb-4">{plan.description}</p>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-gray-900">${getPrice(plan.price)}</span>
                                        <span className="text-gray-600">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={selectedPlan === index ? "gradient" : "outline"}
                                    className="w-full"
                                >
                                    Get Started
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* ROI Calculator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16"
                >
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                            <h3 className="text-3xl font-bold text-gray-900">ROI Calculator</h3>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See how much you can save with our AI-powered content generation.
                            Calculate your potential ROI based on your usage and team size.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Calculator Controls */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Content Pieces
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="1000"
                                    value={monthlyContent}
                                    onChange={(e) => setMonthlyContent(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-1">
                                    <span>10</span>
                                    <span className="font-medium">{monthlyContent}</span>
                                    <span>1000</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Team Hourly Rate ($)
                                </label>
                                <input
                                    type="range"
                                    min="20"
                                    max="200"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-1">
                                    <span>$20</span>
                                    <span className="font-medium">${hourlyRate}</span>
                                    <span>$200</span>
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Your Savings</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Monthly Cost:</span>
                                    <span className="font-semibold">${totalCost.toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Time Saved:</span>
                                    <span className="font-semibold">{timeSaved.toFixed(0)} hours</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Cost Savings:</span>
                                    <span className="font-semibold text-green-600">${costSavings.toFixed(0)}</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">Net Savings:</span>
                                        <span className="text-2xl font-bold text-green-600">${netSavings.toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-gray-600">ROI:</span>
                                        <span className="text-xl font-bold text-blue-600">{roi}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="flex items-center justify-center space-x-3">
                        <TrendingUp className="w-8 h-8 text-green-500" />
                        <div>
                            <div className="text-2xl font-bold text-gray-900">300%</div>
                            <div className="text-gray-600">Average ROI</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <Clock className="w-8 h-8 text-blue-500" />
                        <div>
                            <div className="text-2xl font-bold text-gray-900">80%</div>
                            <div className="text-gray-600">Time Saved</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <DollarSign className="w-8 h-8 text-purple-500" />
                        <div>
                            <div className="text-2xl font-bold text-gray-900">$50k+</div>
                            <div className="text-gray-600">Average Savings</div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export { Pricing } 