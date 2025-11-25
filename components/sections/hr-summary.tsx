"use client"

import { Users, UserCog, TrendingUp, Briefcase as BriefcaseOff } from "lucide-react"

export function HRSummarySection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">HR Summary</h2>
          <p className="text-sm text-muted-foreground">Staff and teacher management overview</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Payroll & Teacher Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Payroll Summary</h3>
            <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
              Monthly
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-linear-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg hover:shadow-sm transition-shadow">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Current Month</p>
                <p className="text-2xl font-bold text-foreground mt-1">£0.00</p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-linear-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg hover:shadow-sm transition-shadow">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Yearly Total</p>
                <p className="text-2xl font-bold text-foreground mt-1">£0.00</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-x-auto">
          <h3 className="text-lg font-bold text-foreground mb-4">Teacher Performance</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Teacher
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Campus
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                  <td className="px-4 py-3 text-foreground font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{row.campus}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
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
