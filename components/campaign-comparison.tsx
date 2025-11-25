"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { campaign: "Summer", clicks: 4200, impressions: 24000, spend: 2400 },
  { campaign: "Fall", clicks: 3800, impressions: 22100, spend: 2210 },
  { campaign: "Winter", clicks: 2000, impressions: 9800, spend: 2290 },
  { campaign: "Spring", clicks: 2780, impressions: 39800, spend: 2000 },
  { campaign: "Holiday", clicks: 1890, impressions: 48000, spend: 2108 },
]

export function CampaignComparison() {
  return (
    <Card className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold">Campaign Performance</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Seasonal campaign metrics comparison
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="campaign" stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
            <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar dataKey="clicks" fill="var(--color-accent)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="impressions" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
