"use client"

export function CalendarTodoSection() {
  const days = Array.from({ length: 42 }, (_, i) => i - 2)

  return (
    <div className="bg-card border border-border rounded p-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold text-foreground">Calendar</h2>
        <div className="flex gap-1">
          {["Month", "Week", "Day", "List"].map((view) => (
            <button
              key={view}
              className="px-2 py-0.5 text-[10px] font-medium text-muted-foreground hover:text-foreground rounded transition-colors"
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-center text-xs font-semibold text-foreground mb-3">November 2025</h3>

        <div className="grid grid-cols-7 gap-0.5 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-[10px] font-medium text-muted-foreground py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {days.map((day, i) => (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center text-[10px] rounded border transition-colors ${
                day <= 0 || day > 30
                  ? "text-muted-foreground border-border/30"
                  : day === 24
                    ? "bg-accent/20 border-accent text-foreground font-medium"
                    : "border-border/50 hover:border-border text-foreground"
              }`}
            >
              {day > 0 && day <= 30 ? day : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
