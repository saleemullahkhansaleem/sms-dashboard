import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react"

export function ALTButtons() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">Action Required</p>
          <p className="text-xs text-muted-foreground mt-1">Review pending customer complaints (3 items)</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
        <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">All Systems Operational</p>
          <p className="text-xs text-muted-foreground mt-1">Infrastructure health is excellent</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
        <TrendingUp className="text-accent flex-shrink-0 mt-1" size={20} />
        <div>
          <p className="text-sm font-semibold text-foreground">Monthly Goal Exceeded</p>
          <p className="text-xs text-muted-foreground mt-1">You're 23% ahead of target</p>
        </div>
      </div>
    </div>
  )
}
