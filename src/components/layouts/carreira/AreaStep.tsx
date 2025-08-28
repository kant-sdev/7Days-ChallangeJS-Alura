import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database } from "lucide-react"
import { Area } from "@/types/career"
import { AreaCard } from "./AreaCard"

interface AreaStepProps {
  onSelect: (area: Area) => void
}

export default function AreaStep({ onSelect }: AreaStepProps) {
  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800">Escolha sua área de atuação</CardTitle>
        <CardDescription>Qual caminho desperta mais seu interesse?</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <AreaCard
          icon={<Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
          title="Front-End"
          description="Crie interfaces incríveis e experiências de usuário envolventes"
          color="blue"
          onClick={() => onSelect("frontend")}
        />
        <AreaCard
          icon={<Database className="w-12 h-12 text-green-600 mx-auto mb-4" />}
          title="Back-End"
          description="Desenvolva a lógica por trás das aplicações e gerencie dados"
          color="green"
          onClick={() => onSelect("backend")}
        />
      </CardContent>
    </Card>
  )
}
