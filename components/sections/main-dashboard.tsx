"use client"

import { Building2, Users, DollarSign, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"

export function MainDashboardSection() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-foreground">All Schools Overview</h2>
          <p className="text-xs text-muted-foreground">Comprehensive view across all campuses</p>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-200">
            Export Report
          </button>
          <button className="p-1.5 hover:bg-secondary/70 rounded transition-all duration-200">
            <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          {
            icon: Building2,
            label: "Total Campuses",
            value: "4",
            subtext: "Parent + Child Schools",
            color: "from-cyan-500/20 via-cyan-500/10 to-transparent",
            borderGlow: "group-hover:shadow-cyan-500/20",
            accent: "text-cyan-600 dark:text-cyan-400",
            bgAccent: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
            trend: "+1.2%",
            isPositive: true,
          },
          {
            icon: Users,
            label: "Total Students",
            value: "43",
            subtext: "Of that schools",
            color: "from-purple-500/20 via-purple-500/10 to-transparent",
            borderGlow: "group-hover:shadow-purple-500/20",
            accent: "text-purple-600 dark:text-purple-400",
            bgAccent: "bg-purple-500/10 group-hover:bg-purple-500/20",
            trend: "+3.8%",
            isPositive: true,
          },
          {
            icon: Users,
            label: "Total Staff",
            value: "11",
            subtext: "Teacher + Admin",
            color: "from-blue-500/20 via-blue-500/10 to-transparent",
            borderGlow: "group-hover:shadow-blue-500/20",
            accent: "text-blue-600 dark:text-blue-400",
            bgAccent: "bg-blue-500/10 group-hover:bg-blue-500/20",
            trend: "+0.5%",
            isPositive: true,
          },
          {
            icon: DollarSign,
            label: "Total Revenue",
            value: "£121.00",
            subtext: "Year: £121.00",
            color: "from-emerald-500/20 via-emerald-500/10 to-transparent",
            borderGlow: "group-hover:shadow-emerald-500/20",
            accent: "text-emerald-600 dark:text-emerald-400",
            bgAccent: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
            trend: "+15.3%",
            isPositive: true,
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`relative bg-linear-to-br ${item.color} bg-card border border-border/50 rounded p-3 hover:border-border transition-all duration-200 group cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-2">
              <div
                className={`${item.accent} p-1.5 rounded ${item.bgAccent} transition-all duration-200`}
              >
                <item.icon size={16} strokeWidth={2} />
              </div>
              <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${item.isPositive
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : 'bg-red-500/10 text-red-600 dark:text-red-400'
                }`}>
                {item.isPositive ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                <span>{item.trend}</span>
              </div>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
              <p className="text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-[10px] text-muted-foreground/80">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Comparison Table */}
      <div className="mt-3 bg-card border border-border/50 rounded overflow-hidden">
        <div className="p-3 border-b border-border/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-foreground">Campus Performance</h3>
              <p className="text-xs text-muted-foreground">Key metrics across locations</p>
            </div>
            <button className="px-2 py-1 text-xs font-medium border border-border rounded hover:bg-secondary/50 transition-colors duration-200">
              Details
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-3 py-2 text-left text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Campus
                </th>
                <th className="px-3 py-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Revenue
                </th>
                <th className="px-3 py-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Expenses
                </th>
                <th className="px-3 py-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Profit
                </th>
                <th className="px-3 py-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Students
                </th>
                <th className="px-3 py-2 text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {[
                {
                  campus: "Hunter Ware",
                  revenue: "£121.00",
                  expenses: "£0.00",
                  profit: "£121.00",
                  students: "2",
                  attendance: "0%",
                  status: "active",
                },
                {
                  campus: "Nova School",
                  revenue: "£0.00",
                  expenses: "£0.00",
                  profit: "£0.00",
                  students: "40",
                  attendance: "0%",
                  status: "active",
                },
                {
                  campus: "Prescott Alvarado",
                  revenue: "£0.00",
                  expenses: "£0.00",
                  profit: "£0.00",
                  students: "0",
                  attendance: "0%",
                  status: "inactive",
                },
                {
                  campus: "Clayton Rutledge",
                  revenue: "£0.00",
                  expenses: "£0.00",
                  profit: "£0.00",
                  students: "0",
                  attendance: "0%",
                  status: "inactive",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-muted/20 transition-colors duration-150 group"
                >
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${row.status === 'active'
                        ? 'bg-emerald-500'
                        : 'bg-gray-400'
                        }`} />
                      <span className="text-xs font-medium text-foreground">
                        {row.campus}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {row.revenue}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-600 dark:text-red-400">
                      {row.expenses}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className="text-xs font-medium text-foreground">
                      {row.profit}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-[10px]">
                      {row.students}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex-1 max-w-[60px] h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: row.attendance }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground min-w-[24px]">
                        {row.attendance}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
