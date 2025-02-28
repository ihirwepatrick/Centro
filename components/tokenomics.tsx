"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export default function Tokenomics() {
  const tokenData = [
    { name: "Community Rewards", value: 40, color: "hsl(var(--primary))" },
    { name: "Development", value: 25, color: "hsl(var(--secondary))" },
    { name: "Team & Advisors", value: 15, color: "hsl(var(--accent))" },
    { name: "Liquidity", value: 10, color: "hsl(var(--destructive))" },
    { name: "Marketing", value: 10, color: "hsl(var(--muted))" },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border border-border rounded-lg shadow-lg">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <section className="py-20 md:py-32 border-b border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Tokenomics
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Token Distribution</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our token economy is designed for long-term sustainability and community governance.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Token Utility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Platform fee discounts</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Staking rewards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Access to premium features</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                  <span>Community treasury funding</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Token Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground">Token Name</p>
                  <p className="font-bold">DAPP Token</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Token Symbol</p>
                  <p className="font-bold">DAPP</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Supply</p>
                  <p className="font-bold">100,000,000</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Initial Price</p>
                  <p className="font-bold">$0.10 USD</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

