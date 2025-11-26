import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueSegments() {
  const segments = [
    { name: "Enterprise", value: "$54,200", percent: 43 },
    { name: "Professional", value: "$32,100", percent: 26 },
    { name: "Starter", value: "$24,600", percent: 20 },
    { name: "Free Tier", value: "$13,680", percent: 11 },
  ]

  return (
    <Card className="border border-border rounded hover:border-accent/30 transition-all duration-200">
      <CardHeader className="pb-3 p-3">
        <CardTitle className="text-xs font-semibold">Revenue by Segment</CardTitle>
        <CardDescription className="text-[10px] text-muted-foreground">Customer tier breakdown</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 p-3 pt-0">
        {segments.map((segment) => (
          <div key={segment.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium text-foreground">{segment.name}</p>
              <p className="text-xs font-semibold text-accent">{segment.value}</p>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-accent h-full rounded-full transition-all duration-300"
                style={{ width: `${segment.percent}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground text-right font-medium">{segment.percent}%</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
