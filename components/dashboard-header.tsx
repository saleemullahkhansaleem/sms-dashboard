"use client"

import { Search, Bell, Settings, Download } from "lucide-react"
import { ThemeMenu } from "@/components/theme-menu"

export function DashboardHeader() {
  return (
    <div className="mb-10">
      <div className="flex items-start justify-between mb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold text-accent uppercase tracking-wider">📊 Analytics</p>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-base text-muted-foreground font-light max-w-xl">
            Monitor your institution's performance with real-time insights and comprehensive analytics across all
            metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2.5 bg-secondary/70 border border-border/50 rounded-xl text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
            />
          </div>
          <ThemeMenu />
          <button className="p-2.5 hover:bg-secondary/70 rounded-xl transition-smooth relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <button className="p-2.5 hover:bg-secondary/70 rounded-xl transition-smooth">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="px-4 py-2.5 flex items-center gap-2 bg-accent text-accent-foreground rounded-xl font-medium text-sm transition-smooth hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Quick stats banner */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Active", value: "97", trend: "+5.2%" },
          { label: "Avg Performance", value: "8.4/10", trend: "+2.1%" },
          { label: "Success Rate", value: "94.2%", trend: "+8.3%" },
          { label: "Revenue Growth", value: "+£2.4K", trend: "+12.5%" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/50 rounded-xl p-4 hover:border-accent/30 transition-colors"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
            <div className="flex items-baseline justify-between">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
