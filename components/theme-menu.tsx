"use client"

import * as React from "react"
import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeMenu() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('[data-theme-menu]')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <button className="p-2.5 hover:bg-secondary/70 rounded-xl transition-all duration-200">
        <div className="w-5 h-5" />
      </button>
    )
  }

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <div className="relative" data-theme-menu>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 hover:bg-secondary/70 rounded-xl transition-all duration-200 relative group"
        aria-label="Toggle theme menu"
      >
        <Sun className="w-5 h-5 text-muted-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute w-5 h-5 text-muted-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 space-y-1">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon
              const isActive = theme === themeOption.value

              return (
                <button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground hover:bg-secondary/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{themeOption.label}</span>
                  </div>
                  {isActive && <Check className="w-4 h-4" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

