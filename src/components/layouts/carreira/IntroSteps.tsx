import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface IntroStepProps {
  onNext: () => void
}

export default function IntroStep({ onNext }: IntroStepProps) {
  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="text-3xl text-slate-800 mb-4">🎮 Jogo de Carreira em Programação</CardTitle>
        <CardDescription className="text-lg text-gray-700 leading-relaxed">
          Bem-vindo ao seu jogo de carreira! Você vai fazer escolhas que determinarão seu caminho na
          programação. Cada decisão levará você a um destino diferente.
          <br />
          <br />
          <strong>Conceito:</strong> Este exercício ensina estruturas de controle de fluxo (if/else para
          decisões e loops para repetições).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={onNext}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg cursor-pointer"
        >
          Começar Jornada
        </Button>
      </CardContent>
    </Card>
  )
}