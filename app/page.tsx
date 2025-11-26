"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FinanceOverviewSection } from "@/components/sections/finance-overview"
import { AttendanceSummarySection } from "@/components/sections/attendance-summary"
import { HRSummarySection } from "@/components/sections/hr-summary"
import { AdmissionsSection } from "@/components/sections/admissions"
import { AlertsNotificationsSection } from "@/components/sections/alerts-notifications"
import { AcademicPerformanceSection } from "@/components/sections/academic-performance"
import { CalendarTodoSection } from "@/components/sections/calendar-todo"
import { MainDashboardSection } from "@/components/sections/main-dashboard"
import { FeedbackComplaintsSection } from "@/components/sections/feedback-complaints"
import { LayoutDashboard, Wallet, Users, GraduationCap, Settings } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const navigationItems = [
    {
      value: "overview",
      label: "Overview",
      icon: LayoutDashboard,
      gradient: "from-cyan-500/20 to-cyan-500/5",
      color: "cyan",
      activeColor: "text-cyan-700 dark:text-cyan-400",
      border: "border-cyan-500/30",
      iconBg: "bg-cyan-500/10",
    },
    {
      value: "finance",
      label: "Finance",
      icon: Wallet,
      gradient: "from-emerald-500/20 to-emerald-500/5",
      color: "emerald",
      activeColor: "text-emerald-700 dark:text-emerald-400",
      border: "border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
    },
    {
      value: "people",
      label: "People",
      icon: Users,
      gradient: "from-blue-500/20 to-blue-500/5",
      color: "blue",
      activeColor: "text-blue-700 dark:text-blue-400",
      border: "border-blue-500/30",
      iconBg: "bg-blue-500/10",
    },
    {
      value: "academic",
      label: "Academic",
      icon: GraduationCap,
      gradient: "from-purple-500/20 to-purple-500/5",
      color: "purple",
      activeColor: "text-purple-700 dark:text-purple-400",
      border: "border-purple-500/30",
      iconBg: "bg-purple-500/10",
    },
    {
      value: "admin",
      label: "Admin",
      icon: Settings,
      gradient: "from-orange-500/20 to-orange-500/5",
      color: "orange",
      activeColor: "text-orange-700 dark:text-orange-400",
      border: "border-orange-500/30",
      iconBg: "bg-orange-500/10",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4">
        <DashboardHeader />

        {/* Sidebar Navigation Layout */}
        <div className="mt-4 flex gap-3">
          {/* Vertical Sidebar Navigation */}
          <aside className="w-48 shrink-0">
            <div className="sticky top-4 bg-card border border-border rounded p-1.5 shadow-sm">
              {/* Navigation Header */}
              <div className="px-2 py-1 mb-0.5">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                  Navigation
                </p>
              </div>

              {/* Navigation Items */}
              <div className="space-y-0.5">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.value

                  return (
                    <button
                      key={item.value}
                      onClick={() => setActiveTab(item.value)}
                      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200 group relative ${isActive
                        ? `bg-linear-to-br ${item.gradient} ${item.activeColor} border ${item.border}`
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                        }`}
                    >
                      {/* Active Indicator Bar */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-current rounded-r" />
                      )}

                      <div
                        className={`p-1 rounded transition-all duration-200 ${isActive
                          ? `${item.iconBg}`
                          : "bg-secondary/50 group-hover:bg-secondary"
                          }`}
                      >
                        <Icon size={14} strokeWidth={2.5} />
                      </div>
                      <span className="flex-1 text-left">{item.label}</span>
                      {isActive && (
                        <div className="w-1 h-1 rounded-full bg-current" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Quick Stats in Sidebar */}
              <div className="mt-2 pt-2 border-t border-border/50">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide px-2 mb-1">
                  Quick Stats
                </p>
                <div className="space-y-1">
                  <div className="px-2 py-1.5 bg-linear-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded">
                    <p className="text-[10px] text-muted-foreground font-medium">Total Students</p>
                    <p className="text-lg font-bold text-foreground">43</p>
                  </div>
                  <div className="px-2 py-1.5 bg-linear-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded">
                    <p className="text-[10px] text-muted-foreground font-medium">Total Staff</p>
                    <p className="text-lg font-bold text-foreground">11</p>
                  </div>
                  <div className="px-2 py-1.5 bg-linear-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded">
                    <p className="text-[10px] text-muted-foreground font-medium">Campuses</p>
                    <p className="text-lg font-bold text-foreground">4</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="hidden">
                {navigationItems.map((item) => (
                  <TabsTrigger key={item.value} value={item.value} />
                ))}
              </TabsList>

              {/* Overview Tab - Dashboard Summary */}
              <TabsContent value="overview" className="space-y-4">
                <MainDashboardSection />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                  <AlertsNotificationsSection />
                  <FeedbackComplaintsSection />
                </div>

                {/* Quick Actions Bar */}
                <div className="bg-linear-to-br from-accent/10 to-accent/5 border border-accent/20 rounded p-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Need Help?</h3>
                      <p className="text-xs text-muted-foreground">
                        Documentation, support, system settings
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 bg-card hover:bg-secondary/70 border border-border rounded text-xs font-medium transition-all duration-200">
                        Docs
                      </button>
                      <button className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded text-xs font-medium transition-all duration-200">
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Finance Tab */}
              <TabsContent value="finance" className="space-y-4">
                <FinanceOverviewSection />
              </TabsContent>

              {/* People Tab - HR & Attendance */}
              <TabsContent value="people" className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <HRSummarySection />
                  <AttendanceSummarySection />
                </div>
              </TabsContent>

              {/* Academic Tab */}
              <TabsContent value="academic" className="space-y-4">
                <AcademicPerformanceSection />
              </TabsContent>

              {/* Admin Tab - Admissions & Calendar */}
              <TabsContent value="admin" className="space-y-4">
                <AdmissionsSection />
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <CalendarTodoSection />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
