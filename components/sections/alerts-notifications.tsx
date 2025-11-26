"use client"

import { Bell } from "lucide-react"

export function AlertsNotificationsSection() {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-foreground">Alerts & Notifications</h2>
        <p className="text-xs text-muted-foreground">System alerts and notices</p>
      </div>

      {/* Alerts Table */}
      <div className="bg-card border border-border rounded p-3 overflow-x-auto">
        <h3 className="text-xs font-semibold text-foreground mb-2">System Alerts</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Type</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Title</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Description</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Date</th>
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
                <td className="px-2 py-1.5">
                  <span className="inline-block px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-600 text-[10px] font-medium">
                    {row.type}
                  </span>
                </td>
                <td className="px-2 py-1.5 text-foreground text-xs">{row.title}</td>
                <td className="px-2 py-1.5 text-muted-foreground text-[10px]">{row.desc}</td>
                <td className="px-2 py-1.5 text-muted-foreground text-[10px]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notice Board */}
      <div className="bg-card border border-border rounded p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-foreground">Notice Board</h3>
          <button className="text-[10px] font-medium text-accent hover:text-accent/80 transition-colors">+ ADD</button>
        </div>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Date</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Title</th>
              <th className="px-2 py-1.5 text-left text-[10px] font-semibold text-muted-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="px-2 py-1.5 text-muted-foreground text-[10px]">13th Nov, 2025</td>
              <td className="px-2 py-1.5 text-foreground text-xs">fff</td>
              <td className="px-2 py-1.5 text-accent cursor-pointer hover:text-accent/80">
                <Bell size={12} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Alerts */}
      <div className="space-y-1.5">
        <h3 className="text-xs font-semibold text-foreground">Performance Alerts</h3>
        {[
          { priority: "High Priority", desc: "Fee collection rate is below 70% (0%)" },
          { priority: "Medium Priority", desc: "Average attendance is below 80% (0%)" },
          { priority: "High Priority", desc: "Average GPA is below 2.5 (0)" },
        ].map((alert, i) => (
          <div key={i} className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
            <p className="text-[10px] font-semibold text-yellow-700">
              {alert.priority}: {alert.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
