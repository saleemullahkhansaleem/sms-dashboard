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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="pt-5 p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{metric.label}</p>
            <p className="text-2xl font-light text-foreground mb-2">{metric.value}</p>
            <p className="text-xs font-medium text-accent">{metric.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
