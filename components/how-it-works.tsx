"use client"

import { motion } from "framer-motion"
import { Wallet, ArrowRight, Database, Layers } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Wallet className="h-12 w-12 text-primary" />,
      title: "Connect Your Wallet",
      description:
        "Link your Web3 wallet to our platform with a single click. We support MetaMask, WalletConnect, and more.",
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Access the Network",
      description: "Gain immediate access to our decentralized network and all its features and capabilities.",
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "Interact with DApps",
      description: "Seamlessly interact with decentralized applications and smart contracts on our platform.",
    },
  ]

  return (
    <section className="py-20 md:py-32 border-b border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple. Secure. Decentralized.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with our Web3 platform is easy. Follow these simple steps to begin your decentralized
              journey.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute transform translate-x-[150px] translate-y-[50px]">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

