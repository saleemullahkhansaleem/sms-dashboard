import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react"

export function ALTButtons() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2">
        <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">Action Required</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Review pending complaints (3 items)</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2">
        <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">All Systems Operational</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Infrastructure health excellent</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded p-2 flex items-start gap-2">
        <TrendingUp className="text-accent shrink-0 mt-0.5" size={14} />
        <div>
          <p className="text-xs font-semibold text-foreground">Monthly Goal Exceeded</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">23% ahead of target</p>
        </div>
      </div>
    </div>
  )
}
