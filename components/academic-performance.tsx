"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { quarter: "Q1", score: 72 },
  { quarter: "Q2", score: 78 },
  { quarter: "Q3", score: 82 },
  { quarter: "Q4", score: 88 },
]

export function AcademicPerformance() {
  return (
    <Card className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Quarterly trend analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="quarter" stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
            <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="var(--color-accent)"
              strokeWidth={2.5}
              dot={{ fill: "var(--color-accent)", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
