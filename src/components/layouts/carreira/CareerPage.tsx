"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Area, CarreiraState, Technology, Specialization } from "@/types/career"
import IntroStep from "./IntroSteps"
import AreaStep from "./AreaStep"
import TechnologyStep from "./TecnologySteps"
import SpecializationStep from "./SpecializationStep"
import LearningStep from "./LearningStep"
import ResultStep from "./ResultStep"

export default function CarreiraPage() {
  const [state, setState] = useState<CarreiraState>({
    step: "intro",
    area: null,
    technology: null,
    specialization: null,
    learningTechs: [],
    currentTech: "",
    showTechInput: false
  })

  const updateState = (updates: Partial<CarreiraState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  const resetGame = () => {
    setState({
      step: "intro",
      area: null,
      technology: null,
      specialization: null,
      learningTechs: [],
      currentTech: "",
      showTechInput: false
    })
  }

  const renderStep = () => {
    switch (state.step) {
      case "intro":
        return <IntroStep onNext={() => updateState({ step: "area" })} />
      case "area":
        return (
          <AreaStep
            onSelect={(area: Area) => updateState({ area, step: "technology" })}
          />
        )
      case "technology":
        return (
          <TechnologyStep
            area={state.area}
            onSelect={(technology: Technology ) => updateState({ technology, step: "specialization" })}
          />
        )
      case "specialization":
        return (
          <SpecializationStep
            onSelect={(specialization: Specialization) => updateState({ specialization, step: "learning" })}
          />
        )
      case "learning":
        return (
          <LearningStep
            learningTechs={state.learningTechs}
            currentTech={state.currentTech}
            showTechInput={state.showTechInput}
            onAddTech={(tech) => updateState({
              learningTechs: [...state.learningTechs, tech],
              currentTech: "",
              showTechInput: false
            })}
            onRemoveTech={(index) => updateState({
              learningTechs: state.learningTechs.filter((_, i) => i !== index)
            })}
            onTechChange={(currentTech) => updateState({ currentTech })}
            onToggleInput={(showTechInput) => updateState({ showTechInput })}
            onFinish={() => updateState({ step: "result" })}
          />
        )
      case "result":
        return (
          <ResultStep
            state={state}
            onReset={resetGame}
          />
        )
      default:
        return <IntroStep onNext={() => updateState({ step: "area" })} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={state.step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}