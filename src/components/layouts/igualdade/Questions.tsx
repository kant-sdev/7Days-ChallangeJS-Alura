import { Button } from "@/components/ui/button"
import { ConsoleOutput } from "./Console"
import { ResultFeedback } from "./Feedback"
import { Play } from "lucide-react"
import { CodeBlock } from "./CodeBlock"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VariablesDisplay } from "./Variables"
import { Question } from "@/types/question"

interface QuestionCardProps {
  question: Question
  selectedOperator: "==" | "===" | null
  onOperatorSelect: (operator: "==" | "===") => void
  onExecuteCode: () => void
  consoleOutput: string
  showResult: boolean
  isCorrect: boolean
  onNextQuestion: () => void
  isLastQuestion: boolean
}

export function QuestionCard({
  question,
  selectedOperator,
  onOperatorSelect,
  onExecuteCode,
  consoleOutput,
  showResult,
  isCorrect,
  onNextQuestion,
  isLastQuestion
}: QuestionCardProps) {
  return (
    <Card className="max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle>Questão {question.id}</CardTitle>
        <CardDescription>
          Escolha o operador correto para que o console.log imprima a mensagem esperada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <VariablesDisplay
          var1={question.var1}
          var1Value={question.var1Value}
          var2={question.var2}
          var2Value={question.var2Value}
        />

        <CodeBlock
          var1={question.var1}
          var2={question.var2}
          expectedMessage={question.expectedMessage}
          selectedOperator={selectedOperator}
          onOperatorSelect={onOperatorSelect}
        />

        <div className="flex justify-center">
          <Button onClick={onExecuteCode} disabled={!selectedOperator} className="flex items-center gap-2 cursor-pointer" size="lg">
            <Play className="h-4 w-4" />
            Executar Código
          </Button>
        </div>

        <ConsoleOutput message={consoleOutput} />

        {showResult && (
          <ResultFeedback
            isCorrect={isCorrect}
            correctOperator={question.correctOperator}
            onNextQuestion={onNextQuestion}
            isLastQuestion={isLastQuestion}
          />
        )}
      </CardContent>
    </Card>
  )
}