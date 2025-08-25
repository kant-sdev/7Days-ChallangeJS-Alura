"use client"

import { motion } from "framer-motion"
import { Code2, ArrowLeft, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface DevelopmentScreenProps {
  challengeName?: string
}

export default function DevelopmentScreen({ challengeName = "Este desafio" }: DevelopmentScreenProps) {
  const [loadingMessage, setLoadingMessage] = useState("Carregando criatividade...")
  const [progress, setProgress] = useState(0)

  const loadingMessages = [
    "Carregando criatividade...",
    "Compilando ideias...",
    "Debugando a diversão...",
    "Otimizando a experiência...",
    "Preparando o desafio...",
  ]

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setLoadingMessage((prev) => {
        const currentIndex = loadingMessages.indexOf(prev)
        return loadingMessages[(currentIndex + 1) % loadingMessages.length]
      })
    }, 2000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)

    return () => {
      clearInterval(messageInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100/5 rounded-full blur-lg sm:blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-primary/5 rounded-full blur-lg sm:blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-md sm:blur-lg"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.div
        className="bg-slate-100/90 backdrop-blur-sm shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl relative z-10 border border-slate-100/50"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative mb-6 sm:mb-8">
          <motion.div
            className="relative z-10"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="bg-primary/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl pulse-glow">
              <Code2 size={60} className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary" />
            </div>
          </motion.div>

          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles size={16} className="sm:w-6 sm:h-6 text-primary" />
          </motion.div>

          <motion.div
            className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2"
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Zap size={14} className="sm:w-5 sm:h-5 text-primary" />
          </motion.div>
        </div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E63946] via-[#F3726F] to-[#D00000] bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Quase pronto para você explorar!
        </motion.h1>

        <motion.div
          className="mb-4 sm:mb-6 h-6 sm:h-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-mono text-sm sm:text-base md:text-lg text-black-300 border-r-2 border-primary pr-2 typing-animation overflow-hidden whitespace-nowrap">
            {challengeName} está sendo construído...
          </div>
        </motion.div>

        <motion.p
          className="text-black-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Ainda estou ajeitando os detalhes, mas logo você vai poder explorar este desafio!
        </motion.p>

        <motion.div
          className="w-full max-w-xs sm:max-w-md mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-black-300">{loadingMessage}</span>
            <span className="text-xs sm:text-sm font-bold text-primary">{progress}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E63946] via-[#F3726F] to-[#D00000] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <Button
              size="sm"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
              Voltar para o início
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-primary/70 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md sm:shadow-lg"
          initial={{ opacity: 1, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        >
          Em breve!
        </motion.div>
      </motion.div>
    </div>
  )
}