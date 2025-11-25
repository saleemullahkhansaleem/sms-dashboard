"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { UserPlus, UserMinus, TrendingUp, Percent } from "lucide-react"

const admissionData = [
  { month: "Dec", admissions: 30, withdrawals: 2 },
  { month: "Jan", admissions: 25, withdrawals: 1 },
  { month: "Feb", admissions: 20, withdrawals: 0 },
  { month: "Mar", admissions: 15, withdrawals: 1 },
  { month: "Apr", admissions: 10, withdrawals: 0 },
  { month: "May", admissions: 8, withdrawals: 0 },
  { month: "Jun", admissions: 5, withdrawals: 0 },
  { month: "Jul", admissions: 4, withdrawals: 0 },
  { month: "Aug", admissions: 3, withdrawals: 0 },
  { month: "Sep", admissions: 2, withdrawals: 0 },
  { month: "Oct", admissions: 1, withdrawals: 0 },
  { month: "Nov", admissions: 0, withdrawals: 0 },
]

export function AdmissionsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Admissions</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            icon: UserPlus,
            label: "New Admissions",
            value: "42",
            subtext: "This Year",
            color: "bg-cyan-500/10",
            text: "text-cyan-500",
          },
          {
            icon: UserMinus,
            label: "Withdrawals",
            value: "0",
            subtext: "This Year",
            color: "bg-purple-500/10",
            text: "text-purple-500",
          },
          {
            icon: TrendingUp,
            label: "Net Admissions",
            value: "42",
            subtext: "Admissions - Withdrawals",
            color: "bg-blue-500/10",
            text: "text-blue-500",
          },
          {
            icon: Percent,
            label: "Conversion Rate",
            value: "0%",
            subtext: "Inquiry to Admission",
            color: "bg-pink-500/10",
            text: "text-pink-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`${item.color} border border-border/50 rounded-lg p-6 hover:border-border transition-all`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-3xl font-light text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{item.subtext}</p>
              </div>
              <div className={`${item.text} opacity-60`}>
                <item.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-semibold text-foreground mb-6">Monthly Admission Trend (Last 12 Months)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={admissionData}>
            <defs>
              <linearGradient id="admissionGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Area
              type="monotone"
              dataKey="admissions"
              stroke="var(--color-accent)"
              fill="url(#admissionGrad)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
