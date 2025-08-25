import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  currentQuestion: number
  totalQuestions: number
  challangeName: string
}

export function Header({ currentQuestion, totalQuestions, challangeName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b bg-background/95 backdrop-blur px-6">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <h1 className="text-xl font-bold">Desafio: {challangeName}</h1>
        <Badge variant="secondary">
          {currentQuestion + 1} / {totalQuestions}
        </Badge>
      </div>
    </header>
  )
}