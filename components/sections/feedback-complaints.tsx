"use client"

import { AlertCircle, CheckCircle2, MessageSquare, Percent } from "lucide-react"

export function FeedbackComplaintsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">Feedback & Complaints</h2>
          <p className="text-sm text-muted-foreground">Monitor feedback across all campuses</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            className={`${item.bgGradient} bg-card border border-border/50 rounded-xl p-5 hover:border-border hover:shadow-md transition-all duration-200 group`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${item.iconBg} p-3 rounded-lg`}>
                <item.icon className={`${item.iconColor}`} size={22} strokeWidth={2} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Tables */}
      <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold text-foreground mb-4">Campus-wise Feedback Report</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Campus</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Total</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Resolved</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Open</th>
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
                <td className="px-4 py-3 text-foreground">{row.campus}</td>
                <td className="px-4 py-3 text-foreground">{row.total}</td>
                <td className="px-4 py-3 text-accent font-medium">{row.resolved}</td>
                <td className="px-4 py-3 text-destructive font-medium">{row.open}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics & Forecast */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">Analytics & Forecast</h3>
        <div className="grid grid-cols-4 gap-4">
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
            <div key={i} className={`${item.color} border border-border/50 rounded-lg p-4`}>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-2xl font-light text-foreground">{item.value}</p>
              {item.subtext && <p className="text-xs text-muted-foreground mt-1">{item.subtext}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
