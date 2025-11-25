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
    <Card className="border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold">Conversion Funnel</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Sales pipeline conversion rates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={step.name}>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-foreground">{step.name}</p>
                <p className="text-sm font-semibold text-muted-foreground">{step.count}</p>
              </div>
              <div
                className="bg-accent/10 rounded-lg h-8 overflow-hidden flex items-center px-3 transition-all duration-500"
                style={{ width: `${step.percent}%` }}
              >
                <p className="text-xs font-semibold text-accent">{step.percent}%</p>
              </div>
              {idx < steps.length - 1 && <ChevronDown size={16} className="mx-auto my-3 text-border" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
