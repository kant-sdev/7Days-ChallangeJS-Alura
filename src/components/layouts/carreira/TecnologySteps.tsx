import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, Technology } from "@/types/career"
import { TechCard } from "./TechCard"

interface TechnologyStepProps {
  area: Area | null
  onSelect: (technology: Technology) => void
}

export default function TechnologyStep({ area, onSelect }: TechnologyStepProps) {
  const frontendTechs = [
    { value: "react" as Technology, label: "ReactJS", color: "cyan", description: "Biblioteca popular do Facebook para criar UIs dinâmicas" },
    { value: "vue" as Technology, label: "Vue.js", color: "emerald", description: "Framework progressivo com sintaxe simples e elegante" }
  ]

  const backendTechs = [
    { value: "csharp" as Technology, label: "C#", color: "purple", description: "Linguagem robusta da Microsoft para aplicações enterprise" },
    { value: "java" as Technology, label: "Java", color: "red", description: "Linguagem versátil e amplamente utilizada no mercado" }
  ]

  const technologies = area === "frontend" ? frontendTechs : backendTechs

  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800">Escolha sua tecnologia</CardTitle>
        <CardDescription>
          {area === "frontend"
            ? "Qual framework/biblioteca você quer aprender?"
            : "Qual linguagem de programação você quer dominar?"}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {technologies.map((tech) => (
          <TechCard
            key={tech.value}
            tech={tech}
            onClick={() => onSelect(tech.value)}
          />
        ))}
      </CardContent>
    </Card>
  )
}
