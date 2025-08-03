"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CardProps {
    children: React.ReactNode
    className?: string
    variant?: "default" | "glass" | "elevated"
    hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", hover = false, children }, ref) => {
        const baseStyles = "rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"

        const variants = {
            default: "shadow-sm dark:shadow-gray-900/20",
            glass: "bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-white/20 dark:border-gray-700/20 shadow-lg dark:shadow-gray-900/30",
            elevated: "shadow-xl hover:shadow-2xl dark:shadow-gray-900/40 dark:hover:shadow-gray-900/60"
        }

        if (hover) {
            return (
                <motion.div
                    ref={ref}
                    className={cn(baseStyles, variants[variant], className)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            )
        }

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
            >
                {children}
            </div>
        )
    }
)

Card.displayName = "Card"

export { Card } 