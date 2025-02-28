"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Wallet } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 border-b border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/20%),transparent_70%)]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                The Future of Decentralized Finance
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experience the next generation of financial freedom with our revolutionary Web3 platform. Secure,
                transparent, and fully decentralized.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/30 flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/50 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-secondary/30 animate-pulse delay-300"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-primary/30 animate-pulse delay-500"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-secondary/30 animate-pulse delay-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

