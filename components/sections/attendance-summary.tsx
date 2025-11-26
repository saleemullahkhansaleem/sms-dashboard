"use client"

import { Users, UserCheck } from "lucide-react"

export function AttendanceSummarySection() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-foreground">Attendance Summary</h2>
        <p className="text-xs text-muted-foreground">Student and staff attendance</p>
      </div>

      {/* Student Attendance */}
      <div>
        <h3 className="text-xs font-semibold text-foreground mb-2">Student Attendance</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: UserCheck, label: "Present", value: "0", bg: "bg-accent/10", text: "text-accent" },
            { icon: Users, label: "Absent", value: "0", bg: "bg-destructive/10", text: "text-destructive" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} border border-border/50 rounded p-3 transition-all duration-200 hover:border-border`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-foreground">{item.value}</p>
                </div>
                <div className={`${item.text} opacity-60`}>
                  <item.icon size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Attendance */}
      <div>
        <h3 className="text-xs font-semibold text-foreground mb-2">Staff Attendance</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: UserCheck, label: "Present", value: "0", bg: "bg-accent/10", text: "text-accent" },
            { icon: Users, label: "Absent", value: "0", bg: "bg-destructive/10", text: "text-destructive" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} border border-border/50 rounded p-3 transition-all duration-200 hover:border-border`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-foreground">{item.value}</p>
                </div>
                <div className={`${item.text} opacity-60`}>
                  <item.icon size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Rates */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Student Attendance Rate", value: "0%", bg: "bg-blue-500/10", text: "text-blue-500" },
          { label: "Staff Attendance Rate", value: "0%", bg: "bg-emerald-500/10", text: "text-emerald-500" },
        ].map((item, i) => (
          <div key={i} className={`${item.bg} border border-border/50 rounded p-3`}>
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.text}`}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Campus Comparison Table */}
      <div className="bg-card border border-border rounded p-3 overflow-x-auto">
        <h3 className="text-xs font-semibold text-foreground mb-2">Campus-wise Attendance</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Campus</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">
                Student Rate
              </th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">
                Staff Rate
              </th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">
                Overall Rate
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
                <td className="px-2 py-1.5 text-foreground text-xs">{row.name}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.student}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.staff}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.overall}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
