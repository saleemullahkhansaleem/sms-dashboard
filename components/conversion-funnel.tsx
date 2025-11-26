import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function ConversionFunnel() {
  const steps = [
    { name: "Visitors", count: "28,450", percent: 100 },
    { name: "Add to Cart", count: "6,284", percent: 22 },
    { name: "Checkout", count: "2,841", percent: 10 },
    { name: "Purchase", count: "1,428", percent: 5 },
  ]

  return (
    <Card className="border border-border rounded hover:border-accent/30 transition-all duration-200">
      <CardHeader className="pb-3 p-3">
        <CardTitle className="text-xs font-semibold">Conversion Funnel</CardTitle>
        <CardDescription className="text-[10px] text-muted-foreground">Sales pipeline conversion</CardDescription>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-2">
          {steps.map((step, idx) => (
            <div key={step.name}>
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-medium text-foreground">{step.name}</p>
                <p className="text-xs font-semibold text-muted-foreground">{step.count}</p>
              </div>
              <div
                className="bg-accent/10 rounded h-5 overflow-hidden flex items-center px-2 transition-all duration-300"
                style={{ width: `${step.percent}%` }}
              >
                <p className="text-[10px] font-semibold text-accent">{step.percent}%</p>
              </div>
              {idx < steps.length - 1 && <ChevronDown size={12} className="mx-auto my-1.5 text-border" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
