import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface ResultFeedbackProps {
  isCorrect: boolean
  correctOperator: "==" | "==="
  onNextQuestion: () => void
  isLastQuestion: boolean
}

export function ResultFeedback({ isCorrect, correctOperator, onNextQuestion, isLastQuestion }: ResultFeedbackProps) {
  return (
    <div className="text-center space-y-4">
      {isCorrect ? (
        <div className="flex items-center justify-center gap-2 text-green-600">
          <CheckCircle className="h-6 w-6" />
          <span className="font-semibold">Correto! Você escolheu o operador certo.</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2 text-red-600">
          <XCircle className="h-6 w-6" />
          <span className="font-semibold">
            Incorreto. O operador correto seria{" "}
            <code className="bg-muted px-1 rounded">{correctOperator}</code>
          </span>
        </div>
      )}

      <Button onClick={onNextQuestion} size="lg" className="cursor-pointer">
        {isLastQuestion ? "Finalizar Desafio" : "Próxima Questão"}
      </Button>
    </div>
  )
}