"use client"

import React, { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "./button"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem("theme") as "light" | "dark"
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    }, [])

    useEffect(() => {
        // Update document class and save preference
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            {theme === "light" ? (
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            ) : (
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
            )}
        </Button>
    )
} 