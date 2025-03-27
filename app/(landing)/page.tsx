import React from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between shadow-lg">
        <Link href="/public" className="flex items-center justify-center">
          <span className="text-amber-600 font-bold text-2xl">AI Studio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/sign-in" className="text-sm dark:bg-amber-600 p-1 rounded font-medium hover:scale-105 transition-transform  underline-offset-4">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm font-medium hover:scale-105 transition-transform  underline-offset-4">
            Sign Up
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Ultimate AI Toolkit
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create conversations, generate code, design images, compose music, and produce videos with our
                  state-of-the-art AI tools.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/sign-up">
                  <Button className="px-8 dark:bg-amber-600 rounded hover:scale-105 transition-transform">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" className="px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Tools</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform offers five powerful AI tools to help you create amazing content.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Conversation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Chat with our advanced AI assistant to get answers, ideas, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Code</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Generate code snippets, debug issues, and get programming help.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Image</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create stunning images from text descriptions with our AI image generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Music</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Compose original music and audio with our AI music generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Video</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create videos from text prompts with our cutting-edge AI video generator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Pricing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Free tier with 5 generations per day. Upgrade to Pro for unlimited access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400"> 2025 AI Studio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
