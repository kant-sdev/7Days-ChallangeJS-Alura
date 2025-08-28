import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CarreiraState } from "@/types/career"

interface ResultStepProps {
  state: CarreiraState
  onReset: () => void
}

export default function ResultStep({ state, onReset }: ResultStepProps) {
  const getResultMessage = () => {
    const areaText = state.area === "frontend" ? "Front-End" : "Back-End"
    const techText =
      state.technology === "react" ? "React" : 
      state.technology === "vue" ? "Vue.js" : 
      state.technology === "csharp" ? "C#" : "Java"
    const specText = state.specialization === "specialist" ? `se especializar em ${areaText}` : "se tornar Fullstack"

    return `Perfeito! Você escolheu seguir na área de ${areaText} com ${techText} e decidiu ${specText}. ${state.learningTechs.length > 0 ? `Além disso, você quer aprender: ${state.learningTechs.join(", ")}.` : ""} Esse é um ótimo caminho para sua carreira em programação!`
  }

  return (
    <Card className="border-2 border-slate-200 bg-white-50">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-800 text-center">🎉 Sua Jornada Está Definida!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 bg-white rounded-lg border ">
          <p className="text-lg text-gray-700 leading-relaxed">{getResultMessage()}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800">Área</h4>
            <p className="text-red-600">{state.area === "frontend" ? "Front-End" : "Back-End"}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Tecnologia</h4>
            <p className="text-blue-600">
              {state.technology === "react" ? "React" :
               state.technology === "vue" ? "Vue.js" :
               state.technology === "csharp" ? "C#" : "Java"}
            </p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg">
            <h4 className="font-semibold text-amber-800">Foco</h4>
            <p className="text-amber-600">
              {state.specialization === "specialist" ? "Especialista" : "Fullstack"}
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button
            onClick={onReset}
            className="bg-red-600 hover:bg-red-700 mr-4 cursor-pointer"
          >
            Jogar Novamente
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent cursor-pointer hover:text-red-600"
            >
              Voltar ao Menu
            </Button>
          </Link>
        </div>

        <LogicExplanation state={state} />
      </CardContent>
    </Card>
  )
}

function LogicExplanation({ state }: { state: CarreiraState }) {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Como Funciona a Lógica do Jogo</h3>
      <div className="space-y-4 text-sm text-gray-700">
        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <h4 className="font-semibold text-blue-800 mb-2">1. Estruturas Condicionais (if/else)</h4>
          <p>Cada escolha que você fez usou estruturas condicionais para determinar o próximo passo:</p>
          <code className="block mt-2 p-2 bg-blue-100 rounded text-xs">
            if (area === 'frontend') {'{'}
            <br />
            &nbsp;&nbsp;// Mostrar opções React ou Vue
            <br />
            {'}'} else {'{'}
            <br />
            &nbsp;&nbsp;// Mostrar opções C# ou Java
            <br />
            {'}'}
          </code>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
          <h4 className="font-semibold text-green-800 mb-2">2. Estruturas de Repetição (loops)</h4>
          <p>
            A seção de tecnologias usou um conceito de loop para permitir adicionar múltiplas tecnologias:
          </p>
          <code className="block mt-2 p-2 bg-green-100 rounded text-xs">
            while (usuarioQuerAdicionar) {'{'}
            <br />
            &nbsp;&nbsp;// Adicionar nova tecnologia
            <br />
            &nbsp;&nbsp;// Perguntar se quer continuar
            <br />
            {'}'}
          </code>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
          <h4 className="font-semibold text-purple-800 mb-2">3. Armazenamento de Estado</h4>
          <p>Suas escolhas foram armazenadas em variáveis que determinaram a mensagem final:</p>
          <code className="block mt-2 p-2 bg-purple-100 rounded text-xs">
            const area = '{state.area}'
            <br />
            const technology = '{state.technology}'
            <br />
            const specialization = '{state.specialization}'
            <br />
            const learningTechs = [{state.learningTechs.map((t) => `'${t}'`).join(", ")}]
          </code>
        </div>
      </div>
    </div>
  )
}