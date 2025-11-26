import { Card, CardContent } from "@/components/ui/card"

export function MetricsGrid() {
  const metrics = [
    { label: "Page Views", value: "1.2M", change: "+18%" },
    { label: "Sessions", value: "89.2K", change: "+12%" },
    { label: "Bounce Rate", value: "34.2%", change: "-5%" },
    { label: "Avg. Session", value: "4m 23s", change: "+2%" },
    { label: "New Users", value: "12.5K", change: "+9%" },
    { label: "Goals", value: "3,425", change: "+14%" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="border border-border rounded hover:border-accent/30 transition-all duration-200"
        >
          <CardContent className="pt-3 p-2">
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1.5">{metric.label}</p>
            <p className="text-lg font-bold text-foreground mb-1">{metric.value}</p>
            <p className="text-[10px] font-medium text-accent">{metric.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
