import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "./Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CompletionScreenProps {
  score: number
  totalQuestions: number
  onReset: () => void
}

export function CompletionScreen({ score, totalQuestions, onReset }: CompletionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <Header currentQuestion={totalQuestions - 1} totalQuestions={totalQuestions} challangeName="Igualdade"/>
      
      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="text-6xl mb-4">🎉</div>
            <CardTitle className="text-2xl">Desafio Concluído!</CardTitle>
            <CardDescription>
              Você acertou {score} de {totalQuestions} questões
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg">
              {score === totalQuestions ? (
                <span className="text-green-600 font-semibold">
                  Perfeito! Você dominou a diferença entre == e ===
                </span>
              ) : score >= totalQuestions / 2 ? (
                <span className="text-amber-600 font-semibold">Bom trabalho! Continue praticando</span>
              ) : (
                <span className="text-primary font-semibold">Continue estudando sobre operadores de igualdade</span>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={onReset} variant="outline" className="cursor-pointer">
                Tentar Novamente
              </Button>
              <Link href="/">
                <Button className="cursor-pointer">Outros Desafios</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}