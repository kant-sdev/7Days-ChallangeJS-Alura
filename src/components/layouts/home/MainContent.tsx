'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import React from 'react'

const challenges = [
  {
    id: 1,
    title: "Igualdade",
    description: "Aprenda diferença entre == e ===",
    icon: "🟰",
    href: "/desafio/igualdade",
  },
  {
    id: 2,
    title: "Questionário",
    description: "Sistema de perguntas e respostas",
    icon: "❓",
    href: "/desafio/questionario",
  },
  {
    id: 3,
    title: "Jogo de Carreira",
    description: "Simulador de escolhas profissionais",
    icon: "🎮",
    href: "/desafio/carreira",
  },
  {
    id: 4,
    title: "Adivinhação",
    description: "Jogo de adivinhar números",
    icon: "🔮",
    href: "/desafio/adivinhacao",
  },
  {
    id: 5,
    title: "Lista Compras",
    description: "Gerenciador de lista de compras",
    icon: "🛒",
    href: "/desafio/lista-compras",
  },
  {
    id: 6,
    title: "Remover da Lista",
    description: "Manipulação de arrays e elementos",
    icon: "🗑️",
    href: "/desafio/remover-lista",
  },
  {
    id: 7,
    title: "Calculadora",
    description: "Calculadora básica com operações",
    icon: "🧮",
    href: "/desafio/calculadora",
  },
]

export default function MainContent() {
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url)
  }

  return (
    <main className="w-full py-4 sm:py-6">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
          Treine lógica de programação com mini apps
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Coleção de exercícios práticos para treinar lógica e estruturas de controle com Javascript. Escolha um
          desafio abaixo para começar.
        </p>
      </div>

      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <Card key={challenge.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">{challenge.icon}</div>
                <CardTitle className="text-lg sm:text-xl font-semibold">{challenge.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full cursor-pointer"
                  size="sm"
                  onClick={() => { handleRedirect(challenge.href) }}
                >
                  Entrar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
