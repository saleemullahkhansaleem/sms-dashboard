"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, DollarSign, TrendingDown, Percent } from "lucide-react"

const monthlyData = [
  { month: "Dec", revenue: 20, expenses: 15 },
  { month: "Jan", revenue: 25, expenses: 16 },
  { month: "Feb", revenue: 28, expenses: 17 },
  { month: "Mar", revenue: 32, expenses: 18 },
  { month: "Apr", revenue: 35, expenses: 19 },
  { month: "May", revenue: 38, expenses: 20 },
  { month: "Jun", revenue: 42, expenses: 21 },
  { month: "Jul", revenue: 45, expenses: 22 },
  { month: "Aug", revenue: 48, expenses: 23 },
  { month: "Sep", revenue: 52, expenses: 24 },
  { month: "Oct", revenue: 60, expenses: 25 },
  { month: "Nov", revenue: 121, expenses: 0 },
]

export function FinanceOverviewSection() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-foreground">Finance Overview</h2>
        <p className="text-xs text-muted-foreground">Monthly Revenue & Expenses (Last 12 Months)</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: DollarSign, label: "Total Revenue", value: "£121.00", color: "text-accent" },
          { icon: TrendingDown, label: "Total Expenses", value: "£0.00", color: "text-destructive" },
          { icon: TrendingUp, label: "Net Profit/Loss", value: "£121.00", color: "text-accent" },
          { icon: Percent, label: "Average Monthly Revenue", value: "£10.08", color: "text-blue-500" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded p-3 hover:border-accent/40 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className={`${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <item.icon size={14} />
              </div>
            </div>
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.label}</p>
            <p className="text-lg font-bold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 bg-card border border-border rounded p-3">
          <h3 className="text-xs font-semibold text-foreground mb-3">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
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
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-accent)"
                fill="url(#revenueGrad)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded p-3">
          <h3 className="text-xs font-semibold text-foreground mb-3">Outstanding Fees</h3>
          <div className="text-2xl font-bold text-foreground mb-1">£0.00</div>
          <p className="text-[10px] text-muted-foreground">Pending payments</p>
        </div>
      </div>

      {/* Campus Table */}
      <div className="bg-card border border-border rounded p-3 overflow-x-auto">
        <h3 className="text-xs font-semibold text-foreground mb-2">Campus-wise Profit Summary</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Campus</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Revenue</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Expenses</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Nova School", revenue: "£0.00", expenses: "£0.00", profit: "£0.00" },
              { name: "Prescott Alvarado", revenue: "£0.00", expenses: "£0.00", profit: "£0.00" },
              { name: "Hunter Ware", revenue: "£121.00", expenses: "£0.00", profit: "£121.00" },
              { name: "Clayton Rutledge", revenue: "£0.00", expenses: "£0.00", profit: "£0.00" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="px-2 py-1.5 text-foreground text-xs">{row.name}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.revenue}</td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.expenses}</td>
                <td className="px-2 py-1.5 text-accent font-medium text-xs">{row.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
