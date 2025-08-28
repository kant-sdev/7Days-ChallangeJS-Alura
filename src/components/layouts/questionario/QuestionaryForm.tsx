import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProgressBar from "./ProgressBar";


import { FormData } from "@/types/questionaries";
import { questionaryData } from "@/consts/questionary";
import ResultScreen from "./ResultCard";
import QuestionCard from "./QuestionaryCard";


export default function QuestionarioForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    idade: "",
    linguagem: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < questionaryData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setFormData({ nome: "", idade: "", linguagem: "" });
    setShowResult(false);
    setCurrentStep(0);
  };

  const isCurrentStepValid = () => {
    const currentQuestion = questionaryData[currentStep];
    return formData[currentQuestion.key].trim() !== "";
  };

  if (showResult) {
    return <ResultScreen formData={formData} onReset={resetForm} />;
  }

  const currentQuestion = questionaryData[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Desafio: Questionário 📝</h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Vamos criar um programa que coleta informações pessoais e exibe uma mensagem personalizada! Este exercício
              ensina como capturar e armazenar valores em variáveis.
            </p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={questionaryData.length} />

          <QuestionCard
            question={currentQuestion}
            value={formData[currentQuestion.key]}
            onChange={(value) => handleInputChange(currentQuestion.key, value)}
            currentStep={currentStep}
            totalSteps={questionaryData.length}
          />

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent cursor-pointer"
            >
              Anterior
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              {currentStep === questionaryData.length - 1 ? "Finalizar" : "Próxima"}
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>
              💡 <strong>Dica:</strong> Este exercício demonstra como capturar dados do usuário e usar variáveis para
              criar experiências personalizadas!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}