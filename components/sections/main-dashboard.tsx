"use client"

import { Building2, Users, DollarSign, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"

export function MainDashboardSection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">All Schools Overview</h2>
          <p className="text-sm text-muted-foreground">Comprehensive view across all campuses</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md">
            Export Report
          </button>
          <button className="p-2 hover:bg-secondary/70 rounded-lg transition-all duration-200">
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
            className={`relative bg-linear-to-br ${item.color} bg-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-border hover:-translate-y-1 shadow-sm hover:shadow-xl ${item.borderGlow} transition-all duration-300 group cursor-pointer overflow-hidden`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`${item.accent} p-3 rounded-xl ${item.bgAccent} group-hover:scale-110 transition-all duration-300 shadow-sm`}
                >
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${item.isPositive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'bg-red-500/10 text-red-600 dark:text-red-400'
                  }`}>
                  {item.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span>{item.trend}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="text-3xl font-bold text-foreground tracking-tight">{item.value}</p>
                <p className="text-xs text-muted-foreground/80">{item.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Comparison Table */}
      <div className="mt-8 bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6 border-b border-border/30 bg-linear-to-r from-muted/30 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">Campus Performance Comparison</h3>
              <p className="text-sm text-muted-foreground mt-1">Key metrics across all locations</p>
            </div>
            <button className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary/50 transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Campus
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Expenses
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Profit
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${row.status === 'active'
                        ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50'
                        : 'bg-gray-400'
                        }`} />
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {row.campus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {row.revenue}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-500/10 text-red-600 dark:text-red-400">
                      {row.expenses}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-semibold text-foreground">
                      {row.profit}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {row.students}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex-1 max-w-[100px] h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: row.attendance }}
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground min-w-[35px]">
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
