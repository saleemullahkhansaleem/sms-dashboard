import { TrendingUp, TrendingDown } from "lucide-react"

export function KPICards() {
  const kpis = [
    { label: "Total Revenue", value: "$124,580", trend: "+12.5%", positive: true },
    { label: "Active Users", value: "8,249", trend: "+3.2%", positive: true },
    { label: "Conversion Rate", value: "3.24%", trend: "-0.8%", positive: false },
    { label: "Avg. Order Value", value: "$325.40", trend: "+8.1%", positive: true },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">{kpi.label}</p>
          <div className="space-y-4">
            <p className="text-4xl font-light text-foreground">{kpi.value}</p>
            <div
              className={`flex items-center gap-2 text-xs font-medium ${
                kpi.positive ? "text-accent" : "text-destructive"
              }`}
            >
              {kpi.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span>{kpi.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
