"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    animate?: boolean
}

const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    animate = true
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    if (!animate) {
        return (
            <section ref={ref} id={id} className={cn("py-16 lg:py-24", className)}>
                {children}
            </section>
        )
    }

    return (
        <motion.section
            ref={ref}
            id={id}
            className={cn("py-16 lg:py-24", className)}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    )
}

export { Section } 