import { TrendingUp, TrendingDown } from "lucide-react"

export function KPICards() {
  const kpis = [
    { label: "Total Revenue", value: "$124,580", trend: "+12.5%", positive: true },
    { label: "Active Users", value: "8,249", trend: "+3.2%", positive: true },
    { label: "Conversion Rate", value: "3.24%", trend: "-0.8%", positive: false },
    { label: "Avg. Order Value", value: "$325.40", trend: "+8.1%", positive: true },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-card border border-border rounded p-3 hover:border-accent/30 transition-all duration-200 group"
        >
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-2">{kpi.label}</p>
          <div className="space-y-1.5">
            <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
            <div
              className={`flex items-center gap-1 text-[10px] font-medium ${
                kpi.positive ? "text-accent" : "text-destructive"
              }`}
            >
              {kpi.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              <span>{kpi.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
