"use client"

import { Bell } from "lucide-react"

export function AlertsNotificationsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Alerts & Notifications</h2>
      </div>

      {/* Alerts Table */}
      <div className="bg-card border border-border rounded-xl p-6 overflow-x-auto">
        <h3 className="text-sm font-semibold text-foreground mb-4">System Alerts</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Type</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Description</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                type: "Warning",
                title: "System Alert",
                desc: "Fee collection rate is below 70% (0%)",
                date: "2025-11-24",
              },
              {
                type: "Warning",
                title: "System Alert",
                desc: "Average attendance is below 80% (0%)",
                date: "2025-11-24",
              },
              { type: "Warning", title: "System Alert", desc: "Average GPA is below 2.5 (0)", date: "2025-11-24" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-600 text-xs font-medium">
                    {row.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-foreground">{row.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.desc}</td>
                <td className="px-4 py-3 text-muted-foreground text-xs">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notice Board */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Notice Board</h3>
          <button className="text-xs font-medium text-accent hover:text-accent/80 transition-colors">+ ADD</button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="px-4 py-3 text-muted-foreground text-xs">13th Nov, 2025</td>
              <td className="px-4 py-3 text-foreground">fff</td>
              <td className="px-4 py-3 text-accent cursor-pointer hover:text-accent/80">
                <Bell size={16} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Alerts */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Performance Alerts</h3>
        {[
          { priority: "High Priority", desc: "Fee collection rate is below 70% (0%)" },
          { priority: "Medium Priority", desc: "Average attendance is below 80% (0%)" },
          { priority: "High Priority", desc: "Average GPA is below 2.5 (0)" },
        ].map((alert, i) => (
          <div key={i} className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-4">
            <p className="text-xs font-semibold text-yellow-700 mb-1">
              {alert.priority}: {alert.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
