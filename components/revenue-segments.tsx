import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueSegments() {
  const segments = [
    { name: "Enterprise", value: "$54,200", percent: 43 },
    { name: "Professional", value: "$32,100", percent: 26 },
    { name: "Starter", value: "$24,600", percent: 20 },
    { name: "Free Tier", value: "$13,680", percent: 11 },
  ]

  return (
    <Card className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold">Revenue by Segment</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Customer tier breakdown</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {segments.map((segment) => (
          <div key={segment.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-foreground">{segment.name}</p>
              <p className="text-sm font-semibold text-accent">{segment.value}</p>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-accent h-full rounded-full transition-all duration-500"
                style={{ width: `${segment.percent}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground text-right font-medium">{segment.percent}%</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
