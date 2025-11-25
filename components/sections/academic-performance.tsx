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
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Academic Performance</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: Award, label: "Average GPA", value: "0", color: "bg-cyan-500/10", text: "text-cyan-500" },
          { icon: BookOpen, label: "Average Marks", value: "0", color: "bg-purple-500/10", text: "text-purple-500" },
        ].map((item, i) => (
          <div key={i} className={`${item.color} border border-border/50 rounded-lg p-6`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-4xl font-light text-foreground">{item.value}</p>
              </div>
              <div className={`${item.text} opacity-60`}>
                <item.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GPA Trend Chart */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-semibold text-foreground mb-6">Exam Result Trends (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={280}>
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
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
          <h3 className="text-sm font-semibold text-foreground mb-4">Top Performing Classes</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Class</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Avg GPA</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Avg Marks</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td colSpan={4} className="px-3 py-8 text-center text-muted-foreground">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
          <h3 className="text-sm font-semibold text-foreground mb-4">Low Performing Classes</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Class</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Avg GPA</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Avg Marks</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td colSpan={4} className="px-3 py-8 text-center text-muted-foreground">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject-wise Performance */}
      <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold text-foreground mb-4">Subject-wise Performance</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Subject</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Average GPA</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                Average Marks
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">
                Total Students
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
