"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Github, DiscIcon as Discord, TextIcon as Telegram } from "lucide-react"

export default function Community() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Community
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Community</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with like-minded individuals and stay updated on our latest developments.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Social Channels</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <Twitter className="h-6 w-6 text-primary mr-3" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <Discord className="h-6 w-6 text-primary mr-3" />
                  <span>Discord</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <Telegram className="h-6 w-6 text-primary mr-3" />
                  <span>Telegram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors"
                >
                  <Github className="h-6 w-6 text-primary mr-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to receive updates on our progress and announcements.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

