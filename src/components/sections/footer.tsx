"use client"

import React from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react"

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="bg-gray-900 text-white">
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">ADmyBRAND AI Suite</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Transform your brand with AI-powered marketing tools. Create stunning content,
                                optimize campaigns, and scale your business with our comprehensive suite.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-center space-x-3">
                                <Mail size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white">hello@admybrand.ai</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin size={20} className="text-blue-400" />
                                <div>
                                    <p className="text-sm text-gray-400">Address</p>
                                    <p className="text-white">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="border-t border-gray-800 mt-8 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-4 md:mb-0">
                                <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                                <p className="text-gray-400">Get the latest updates and insights delivered to your inbox.</p>
                            </div>
                            <div className="flex w-full md:w-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />
                                <Button className="rounded-l-none">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-6 mb-4 md:mb-0">
                            <p className="text-gray-400 text-sm">
                                © 2024 ADmyBRAND AI Suite. All rights reserved.
                            </p>
                            <div className="flex space-x-4 text-sm">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export { Footer } 