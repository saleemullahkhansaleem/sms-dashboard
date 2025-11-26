"use client"

import { Users, UserCog, TrendingUp, Briefcase as BriefcaseOff } from "lucide-react"

export function HRSummarySection() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">HR Summary</h2>
          <p className="text-xs text-muted-foreground">Staff and teacher management</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          {
            icon: Users,
            label: "Total Teachers",
            value: "7",
            subtext: "Active teaching staff",
            bgGradient: "bg-linear-to-br from-cyan-500/15 to-cyan-500/5",
            iconBg: "bg-cyan-500/10",
            iconColor: "text-cyan-600 dark:text-cyan-400",
          },
          {
            icon: UserCog,
            label: "Total Staff",
            value: "11",
            subtext: "All employees",
            bgGradient: "bg-linear-to-br from-purple-500/15 to-purple-500/5",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-600 dark:text-purple-400",
          },
          {
            icon: TrendingUp,
            label: "Attendance Rate",
            value: "0%",
            subtext: "Staff attendance",
            bgGradient: "bg-linear-to-br from-blue-500/15 to-blue-500/5",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-600 dark:text-blue-400",
          },
          {
            icon: BriefcaseOff,
            label: "Vacant Positions",
            value: "0",
            subtext: "Open positions",
            bgGradient: "bg-linear-to-br from-pink-500/15 to-pink-500/5",
            iconBg: "bg-pink-500/10",
            iconColor: "text-pink-600 dark:text-pink-400",
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

      {/* Payroll & Teacher Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-card border border-border/50 rounded p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-foreground">Payroll Summary</h3>
            <span className="text-[10px] font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
              Monthly
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-linear-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded">
              <div>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Current Month</p>
                <p className="text-lg font-bold text-foreground mt-0.5">£0.00</p>
              </div>
              <div className="w-8 h-8 bg-emerald-500/10 rounded flex items-center justify-center">
                <span className="text-base">💰</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-linear-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded">
              <div>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">Yearly Total</p>
                <p className="text-lg font-bold text-foreground mt-0.5">£0.00</p>
              </div>
              <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                <span className="text-base">📊</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded p-3 overflow-x-auto">
          <h3 className="text-xs font-bold text-foreground mb-2">Teacher Performance</h3>
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Teacher
                </th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Campus
                </th>
                <th className="px-2 py-1.5 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {[
                { name: "Sohaib Mehmood", campus: "Nova School", attendance: "0%" },
                { name: "Ali Tahir", campus: "Nova School", attendance: "0%" },
                { name: "Laiba Javed", campus: "Nova School", attendance: "0%" },
                { name: "Badar-Ur-Rehman", campus: "Nova School", attendance: "0%" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-muted/20 transition-colors group">
                  <td className="px-2 py-1.5 text-foreground font-medium text-xs">{row.name}</td>
                  <td className="px-2 py-1.5 text-muted-foreground text-[10px]">{row.campus}</td>
                  <td className="px-2 py-1.5 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {row.attendance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
