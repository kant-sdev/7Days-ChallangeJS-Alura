import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Layers } from "lucide-react"
import { Specialization } from "@/types/career"
import { SpecializationCard } from "./SpecializationCard"

interface SpecializationStepProps {
  onSelect: (specialization: Specialization) => void
}

export default function SpecializationStep({ onSelect }: SpecializationStepProps) {
  const specializations = [
    {
      value: "specialist" as Specialization,
      label: "Especializar",
      icon: <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />,
      color: "indigo",
      description: "Focar profundamente na área escolhida e se tornar expert"
    },
    {
      value: "fullstack" as Specialization,
      label: "Fullstack",
      icon: <Layers className="w-12 h-12 text-orange-600 mx-auto mb-4" />,
      color: "orange",
      description: "Desenvolver habilidades tanto em front-end quanto back-end"
    }
  ]

  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800">Defina seu foco</CardTitle>
        <CardDescription>Como você quer direcionar sua carreira?</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {specializations.map((spec) => (
          <SpecializationCard
            key={spec.value}
            spec={spec}
            onClick={() => onSelect(spec.value)}
          />
        ))}
      </CardContent>
    </Card>
  )
}
