import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react"

export function StatusCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
        <AlertCircle className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">Action Required</p>
          <p className="text-xs text-muted-foreground mt-1">Review pending customer complaints</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">All Systems Operational</p>
          <p className="text-xs text-muted-foreground mt-1">Infrastructure health is excellent</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
        <TrendingUp className="text-accent flex-shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">Monthly Goal Exceeded</p>
          <p className="text-xs text-muted-foreground mt-1">You're 23% ahead of target</p>
        </div>
      </div>
    </div>
  )
}
