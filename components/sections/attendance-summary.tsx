"use client"

import { Users, UserCheck } from "lucide-react"

export function AttendanceSummarySection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Attendance Summary</h2>
      </div>

      {/* Student Attendance */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Student Attendance</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: UserCheck, label: "Present", value: "0", bg: "bg-accent/10", text: "text-accent" },
            { icon: Users, label: "Absent", value: "0", bg: "bg-destructive/10", text: "text-destructive" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} border border-border/50 rounded-lg p-6 transition-all duration-300 hover:border-border`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-3xl font-light text-foreground">{item.value}</p>
                </div>
                <div className={`${item.text} opacity-60`}>
                  <item.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Attendance */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Staff Attendance</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: UserCheck, label: "Present", value: "0", bg: "bg-accent/10", text: "text-accent" },
            { icon: Users, label: "Absent", value: "0", bg: "bg-destructive/10", text: "text-destructive" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} border border-border/50 rounded-lg p-6 transition-all duration-300 hover:border-border`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-3xl font-light text-foreground">{item.value}</p>
                </div>
                <div className={`${item.text} opacity-60`}>
                  <item.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Rates */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Student Attendance Rate", value: "0%", bg: "bg-blue-500/10", text: "text-blue-500" },
          { label: "Staff Attendance Rate", value: "0%", bg: "bg-emerald-500/10", text: "text-emerald-500" },
        ].map((item, i) => (
          <div key={i} className={`${item.bg} border border-border/50 rounded-lg p-6`}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{item.label}</p>
            <p className={`text-4xl font-light ${item.text}`}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Campus Comparison Table */}
      <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold text-foreground mb-4">Campus-wise Attendance Comparison</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Campus</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                Student Attendance Rate
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                Staff Attendance Rate
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                Overall Attendance Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Nova School", student: "0%", staff: "0%", overall: "0%" },
              { name: "Prescott Alvarado", student: "0%", staff: "0%", overall: "0%" },
              { name: "Hunter Ware", student: "0%", staff: "0%", overall: "0%" },
              { name: "Clayton Rutledge", student: "0%", staff: "0%", overall: "0%" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3 text-foreground">{row.name}</td>
                <td className="px-4 py-3 text-foreground">{row.student}</td>
                <td className="px-4 py-3 text-foreground">{row.staff}</td>
                <td className="px-4 py-3 text-foreground">{row.overall}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
