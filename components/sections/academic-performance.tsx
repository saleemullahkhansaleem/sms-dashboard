"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Award, BookOpen } from "lucide-react"

const gpaData = [
  { month: "Jun", gpa: 0 },
  { month: "Jul", gpa: 0 },
  { month: "Aug", gpa: 0 },
  { month: "Sep", gpa: 0 },
  { month: "Oct", gpa: 0 },
  { month: "Nov", gpa: 0 },
]

export function AcademicPerformanceSection() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-foreground">Academic Performance</h2>
        <p className="text-xs text-muted-foreground">Student performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Award, label: "Average GPA", value: "0", color: "bg-cyan-500/10", text: "text-cyan-500" },
          { icon: BookOpen, label: "Average Marks", value: "0", color: "bg-purple-500/10", text: "text-purple-500" },
        ].map((item, i) => (
          <div key={i} className={`${item.color} border border-border/50 rounded p-3`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
              </div>
              <div className={`${item.text} opacity-60`}>
                <item.icon size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GPA Trend Chart */}
      <div className="bg-card border border-border rounded p-3">
        <h3 className="text-xs font-semibold text-foreground mb-3">Exam Result Trends (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={gpaData}>
            <CartesianGrid strokeDasharray="0" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
            <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: "11px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
              }}
            />
            <Line
              type="monotone"
              dataKey="gpa"
              stroke="var(--color-accent)"
              strokeWidth={2}
              dot={{ fill: "var(--color-accent)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card border border-border rounded p-3 overflow-x-auto">
          <h3 className="text-xs font-semibold text-foreground mb-2">Top Performing Classes</h3>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Class</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Avg GPA</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Avg Marks</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td colSpan={4} className="px-2 py-4 text-center text-muted-foreground text-[10px]">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded p-3 overflow-x-auto">
          <h3 className="text-xs font-semibold text-foreground mb-2">Low Performing Classes</h3>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Class</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Avg GPA</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Avg Marks</th>
                <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td colSpan={4} className="px-2 py-4 text-center text-muted-foreground text-[10px]">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject-wise Performance */}
      <div className="bg-card border border-border rounded p-3 overflow-x-auto">
        <h3 className="text-xs font-semibold text-foreground mb-2">Subject-wise Performance</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Subject</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Average GPA</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">
                Average Marks
              </th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">
                Total Students
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td colSpan={4} className="px-2 py-4 text-center text-muted-foreground text-[10px]">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
