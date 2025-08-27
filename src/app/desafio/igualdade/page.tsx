'use client'

import { CompletionScreen } from "@/components/layouts/igualdade/Completed"
import { ExplanationCard } from "@/components/layouts/igualdade/Explanation"
import { Header } from "@/components/layouts/igualdade/Header"
import { QuestionCard } from "@/components/layouts/igualdade/Questions"
import { questions } from "@/consts/questions"
import { useState } from "react"

export default function IgualdadePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOperator, setSelectedOperator] = useState<"==" | "===" | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [consoleOutput, setConsoleOutput] = useState<string>("")

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleOperatorSelect = (operator: "==" | "===") => {
    setSelectedOperator(operator)
    setShowResult(false)
    setConsoleOutput("")
  }

  const executeCode = () => {
    if (!selectedOperator) return

    const isCorrect = selectedOperator === question.correctOperator
    let result: boolean
    let message: string

    if (selectedOperator === "==") {
      // @ts-expect-error-next-line
      result = question.var1Value == question.var2Value
    } else {
      // @ts-expect-error-next-line
      result = question.var1Value === question.var2Value
    }

    if (question.id === 1) {
      message = result
        ? "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
        : "As variáveis numeroUm e stringUm não tem o mesmo valor"
    } else if (question.id === 2) {
      message = result
        ? "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
        : "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo"
    } else {
      message = result
        ? "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
        : "As variáveis numeroDez e stringDez não tem o mesmo valor"
    }

    setConsoleOutput(message)
    setShowResult(true)

    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOperator(null)
      setShowResult(false)
      setConsoleOutput("")
    } else {
      setCompleted(true)
    }
  }

  const resetChallenge = () => {
    setCurrentQuestion(0)
    setSelectedOperator(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
    setConsoleOutput("")
  }

  if (completed) {
    return <CompletionScreen 
      score={score} 
      totalQuestions={questions.length} 
      onReset={resetChallenge} 
    />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <Header currentQuestion={currentQuestion} totalQuestions={questions.length} challangeName="Igualdade" />

      <main className="container mx-auto px-4 py-8">
        <ExplanationCard />
        
        <QuestionCard
          question={question}
          selectedOperator={selectedOperator}
          onOperatorSelect={handleOperatorSelect}
          onExecuteCode={executeCode}
          consoleOutput={consoleOutput}
          showResult={showResult}
          isCorrect={selectedOperator === question.correctOperator}
          onNextQuestion={nextQuestion}
          isLastQuestion={isLastQuestion}
        />
      </main>
    </div>
  )
}