"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: "Jan", revenue: 64000, cost: 24000 },
  { month: "Feb", revenue: 71000, cost: 28000 },
  { month: "Mar", revenue: 69000, cost: 26000 },
  { month: "Apr", revenue: 78000, cost: 30000 },
  { month: "May", revenue: 82000, cost: 32000 },
  { month: "Jun", revenue: 95000, cost: 35000 },
]

export function PerformanceChart() {
  return (
    <Card className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold">Revenue Trend</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Monthly revenue vs operating costs</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.15} />
                <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
            <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-accent)"
              fill="url(#revenueGrad)"
              strokeWidth={2.5}
            />
            <Area
              type="monotone"
              dataKey="cost"
              stroke="var(--color-chart-2)"
              fill="url(#costGrad)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
