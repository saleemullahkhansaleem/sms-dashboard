"use client"

import { AlertCircle, CheckCircle2, MessageSquare, Percent } from "lucide-react"

export function FeedbackComplaintsSection() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">Feedback & Complaints</h2>
          <p className="text-xs text-muted-foreground">Monitor feedback across campuses</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          {
            icon: MessageSquare,
            label: "Total Complaints",
            value: "0",
            subtext: "All campuses",
            bgGradient: "bg-linear-to-br from-cyan-500/15 to-cyan-500/5",
            iconBg: "bg-cyan-500/10",
            iconColor: "text-cyan-600 dark:text-cyan-400",
          },
          {
            icon: CheckCircle2,
            label: "Resolved",
            value: "0",
            subtext: "Successfully closed",
            bgGradient: "bg-linear-to-br from-emerald-500/15 to-emerald-500/5",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-600 dark:text-emerald-400",
          },
          {
            icon: AlertCircle,
            label: "Open",
            value: "0",
            subtext: "Pending resolution",
            bgGradient: "bg-linear-to-br from-orange-500/15 to-orange-500/5",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-600 dark:text-orange-400",
          },
          {
            icon: Percent,
            label: "Resolution Rate",
            value: "0%",
            subtext: "Target: 95%",
            bgGradient: "bg-linear-to-br from-purple-500/15 to-purple-500/5",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-600 dark:text-purple-400",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.bgGradient} bg-card border border-border/50 rounded p-3 hover:border-border transition-all duration-200 group`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`${item.iconBg} p-1.5 rounded`}>
                <item.icon className={`${item.iconColor}`} size={16} strokeWidth={2} />
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-[10px] text-muted-foreground">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Tables */}
      <div className="bg-card border border-border rounded p-3 overflow-x-auto">
        <h3 className="text-xs font-semibold text-foreground mb-2">Campus-wise Feedback</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Campus</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Total</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Resolved</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Open</th>
            </tr>
          </thead>
          <tbody>
            {[
              { campus: "Nova School", total: "0", resolved: "0", open: "0" },
              { campus: "Prescott Alvarado", total: "0", resolved: "0", open: "0" },
              { campus: "Hunter Ware", total: "0", resolved: "0", open: "0" },
              { campus: "Clayton Rutledge", total: "0", resolved: "0", open: "0" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="px-2 py-1.5 text-foreground text-xs">{row.campus}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.total}</td>
                <td className="px-2 py-1.5 text-accent font-medium text-xs">{row.resolved}</td>
                <td className="px-2 py-1.5 text-destructive font-medium text-xs">{row.open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics & Forecast */}
      <div className="bg-card border border-border rounded p-3">
        <h3 className="text-xs font-semibold text-foreground mb-2">Analytics & Forecast</h3>
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              label: "Revenue Forecast",
              value: "£0.00",
              subtext: "Remaining Year",
              color: "bg-cyan-500/10",
              text: "text-cyan-500",
            },
            {
              label: "Enrollment Forecast",
              value: "0",
              subtext: "Remaining Year",
              color: "bg-purple-500/10",
              text: "text-purple-500",
            },
            { label: "Avg Monthly Revenue", value: "£0.00", color: "bg-blue-500/10", text: "text-blue-500" },
            { label: "Avg Monthly Enrollment", value: "0", color: "bg-pink-500/10", text: "text-pink-500" },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border border-border/50 rounded p-2`}>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-lg font-bold text-foreground">{item.value}</p>
              {item.subtext && <p className="text-[10px] text-muted-foreground mt-0.5">{item.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
