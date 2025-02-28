"use client"

import { motion } from "framer-motion"
import { Shield, Zap, RefreshCw, Lock, Globe, Coins } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Transactions",
      description: "End-to-end encryption ensures your transactions are always secure and private.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Experience near-instant transaction confirmations with our optimized blockchain.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Cross-Chain Compatibility",
      description: "Seamlessly interact with multiple blockchains from a single interface.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Self-Custody",
      description: "Maintain complete control of your assets with non-custodial wallet solutions.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Access",
      description: "Available worldwide with no geographical restrictions or limitations.",
    },
    {
      icon: <Coins className="h-10 w-10 text-primary" />,
      title: "Low Fees",
      description: "Minimize transaction costs with our optimized fee structure and Layer 2 solutions.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 border-b border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Web3 Capabilities</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines cutting-edge blockchain technology with user-friendly interfaces to deliver a
              seamless Web3 experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-background inline-flex mb-3">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

