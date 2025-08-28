import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Questionary } from "@/types/questionaries";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Questionary;
  value: string;
  onChange: (value: string) => void;
  currentStep: number;
  totalSteps: number;
}

export default function QuestionCard({
  question,
  value,
  onChange,
  currentStep,
  totalSteps,
}: QuestionCardProps) {
  const IconComponent = question.icon;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8 text-red-600" />
        </div>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Pergunta {currentStep + 1} de {totalSteps}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Label htmlFor={question.key} className="text-lg font-medium text-gray-700 mb-3 block">
            {question.label}
          </Label>
          <Input
            id={question.key}
            type={question.type}
            placeholder={question.placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="text-lg p-4 border-2 border-gray-200 focus:border-red-500 rounded-lg"
            autoFocus
          />
        </motion.div>
      </CardContent>
    </Card>
  );
}