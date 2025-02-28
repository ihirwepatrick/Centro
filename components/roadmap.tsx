"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2023",
      title: "Platform Launch",
      description: "Initial release of core platform features and token launch.",
      completed: true,
      items: ["Smart contract development", "Security audits", "Token generation event", "Initial exchange listings"],
    },
    {
      quarter: "Q2 2023",
      title: "Ecosystem Expansion",
      description: "Expanding the platform with additional features and partnerships.",
      completed: true,
      items: [
        "Mobile wallet release",
        "Cross-chain bridge implementation",
        "Strategic partnerships",
        "Community governance launch",
      ],
    },
    {
      quarter: "Q3 2023",
      title: "Advanced Features",
      description: "Introduction of advanced DeFi capabilities and tools.",
      completed: false,
      items: [
        "Yield farming protocols",
        "NFT marketplace integration",
        "Advanced analytics dashboard",
        "Developer SDK release",
      ],
    },
    {
      quarter: "Q4 2023",
      title: "Scaling Solutions",
      description: "Implementing Layer 2 scaling solutions for improved performance.",
      completed: false,
      items: ["Layer 2 integration", "Gas optimization", "Enterprise solutions", "Global expansion initiatives"],
    },
  ]

  return (
    <section className="py-20 md:py-32 border-b border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Roadmap</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Development Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow our progress as we build the future of decentralized finance.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

            {/* Roadmap items */}
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2">
                      {item.completed ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-primary" />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                    >
                      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                        {item.quarter}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                      <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                        {item.items.map((listItem, listIndex) => (
                          <li key={listIndex} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Empty div for layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

