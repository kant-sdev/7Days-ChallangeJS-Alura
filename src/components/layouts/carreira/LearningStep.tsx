import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, X } from "lucide-react"
import { TechBadge } from "./TechBadge"

interface LearningStepProps {
  learningTechs: string[]
  currentTech: string
  showTechInput: boolean
  onAddTech: (tech: string) => void
  onRemoveTech: (index: number) => void
  onTechChange: (tech: string) => void
  onToggleInput: (show: boolean) => void
  onFinish: () => void
}

export default function LearningStep({
  learningTechs,
  currentTech,
  showTechInput,
  onAddTech,
  onRemoveTech,
  onTechChange,
  onToggleInput,
  onFinish
}: LearningStepProps) {
  const techComments = {
    react: "React é uma biblioteca incrível para criar interfaces interativas! Você vai adorar trabalhar com componentes.",
    vue: "Vue.js é conhecido por sua curva de aprendizado suave e sintaxe elegante. Ótima escolha!",
    csharp: "C# é uma linguagem robusta da Microsoft, perfeita para aplicações enterprise e jogos!",
    java: "Java é uma das linguagens mais utilizadas no mundo! Muito versátil e com grande mercado.",
    javascript: "JavaScript é a linguagem da web! Essencial para qualquer desenvolvedor moderno.",
    python: "Python é perfeita para iniciantes e muito poderosa para ciência de dados e IA!",
    typescript: "TypeScript adiciona tipagem ao JavaScript, tornando o código mais seguro e maintível!",
    node: "Node.js permite usar JavaScript no backend. Perfeito para fullstack developers!",
    default: "Excelente escolha! Essa tecnologia vai agregar muito ao seu conhecimento.",
  }

  const getTechComment = (tech: string) => {
    const lowerTech = tech.toLowerCase()
    return techComments[lowerTech as keyof typeof techComments] || techComments.default
  }

  const handleAddTech = () => {
    if (currentTech.trim()) {
      onAddTech(currentTech.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTech()
    }
  }

  return (
    <Card className="border-2 border-red-200">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800">Tecnologias para aprender</CardTitle>
        <CardDescription>
          Quais tecnologias você gostaria de conhecer? (Adicione quantas quiser)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {learningTechs.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">Suas tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {learningTechs.map((tech, index) => (
                <TechBadge
                  key={index}
                  tech={tech}
                  onRemove={() => onRemoveTech(index)}
                />
              ))}
            </div>
            {learningTechs.length > 0 && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Comentário sobre sua última escolha:</strong>
                  <br />
                  {getTechComment(learningTechs[learningTechs.length - 1])}
                </p>
              </div>
            )}
          </div>
        )}

        {showTechInput ? (
          <div className="flex gap-2">
            <Input
              value={currentTech}
              onChange={(e) => onTechChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite o nome da tecnologia..."
              className="flex-1"
            />
            <Button onClick={handleAddTech} className="bg-red-600 hover:bg-red-700 cursor-pointer">
              Adicionar
            </Button>
            <Button
              variant="outline"
              onClick={() => onToggleInput(false)}
              className="cursor-pointer"
            >
              Cancelar
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button
              onClick={() => onToggleInput(true)}
              className="bg-red-600 hover:bg-red-700 flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Adicionar Tecnologia
            </Button>
            <Button
              onClick={onFinish}
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 cursor-pointer"
            >
              Finalizar Jogo
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

