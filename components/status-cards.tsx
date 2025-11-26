import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react"

export function StatusCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2 hover:border-accent/30 transition-all duration-200">
        <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">Action Required</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Review pending complaints</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2 hover:border-accent/30 transition-all duration-200">
        <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">All Systems Operational</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Infrastructure health excellent</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2 hover:border-accent/30 transition-all duration-200">
        <TrendingUp className="text-accent shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">Monthly Goal Exceeded</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">23% ahead of target</p>
        </div>
      </div>
    </div>
  )
}
