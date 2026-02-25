import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-background text-foreground">
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">

        {/* Header Section */}
        <header className="w-full py-8 bg-card border-b border-border shadow-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-bold text-primary">
              AI Mock Interview
            </h1>

            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-6">

              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NoahK05/mock-interview-ai">
                  <FaGithub className="w-8 h-8 text-foreground hover:text-primary transition" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
                <a href="#features" className="text-lg text-muted-foreground hover:text-primary mx-2 md:mx-4 transition">Features</a>
                <a href="#testimonials" className="text-lg text-muted-foreground hover:text-primary mx-2 md:mx-4 transition">Reviews</a>
                <a href="#contact" className="text-lg text-muted-foreground hover:text-primary mx-2 md:mx-4 transition">Contact Us</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-primary">Nail Your Next</span>{" "}
            <span className="text-foreground">Interview</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Practice with AI-assisted mock interviews and get instant feedback to improve your confidence.
          </p>

          <div className="mt-10 flex flex-col md:flex-row">
            <a
              href="/dashboard"
              className="px-8 py-3 mb-4 md:mb-0 md:mr-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg shadow-md hover:opacity-90 transition"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="px-8 py-3 text-lg font-semibold border border-border rounded-lg hover:bg-card transition"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-card/40">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-foreground">Features</h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Our AI Mock Interview platform includes a variety of powerful features:
            </p>

            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full md:w-1/3 px-4 py-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-lg transition">
                  <h3 className="text-2xl font-semibold text-primary">
                    AI Mock Interviews
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Experience realistic interview scenarios powered by advanced AI.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-4 py-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-lg transition">
                  <h3 className="text-2xl font-semibold text-primary">
                    Instant Feedback
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Get personalized feedback immediately after each session.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-4 py-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-md hover:shadow-lg transition">
                  <h3 className="text-2xl font-semibold text-primary">
                    Comprehensive Reports
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Receive detailed reports highlighting strengths and areas to improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-foreground">
              What Our Users Say
            </h2>

            <div className="flex flex-wrap justify-center mt-12">
              <div className="w-full md:w-1/2 px-4 py-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-md">
                  <p className="text-muted-foreground">
                    "The AI mock interviews boosted my confidence before my real interview."
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-primary">
                    - Ramayya Venkat
                  </h4>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 py-6">
                <div className="bg-card rounded-xl p-8 border border-border shadow-md">
                  <p className="text-muted-foreground">
                    "The feedback made my answers much stronger. Highly recommended!"
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-primary">
                    - Sarita Slays
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-card/40 px-6">
          <Contect />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2026 AI Mock Interview - SRU BATCH. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default page