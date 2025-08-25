import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  var1: string
  var2: string
  expectedMessage: string
  selectedOperator: "==" | "===" | null
  onOperatorSelect: (operator: "==" | "===") => void
}

export function CodeBlock({ var1, var2, expectedMessage, selectedOperator, onOperatorSelect }: CodeBlockProps) {
  return (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
      <div className="text-gray-400">{"// Escolha o operador correto:"}</div>
      <div className="mt-2">
        <span className="text-purple-400">if</span> ({var1}{" "}
        <span className="inline-flex gap-2 mx-2 py-1">
          <Button
            size="sm"
            onClick={() => onOperatorSelect("==")}
            className={`
              px-2 py-1 rounded border font-mono text-sm transition-all cursor-pointer
              ${selectedOperator === "=="
                ? "bg-primary/60 text-white border-primary/60 shadow-md"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              }
            `}
          >
            ==
          </Button>
          <Button
            size="sm"
            onClick={() => onOperatorSelect("===")}
            className={`
              px-2 rounded border font-mono text-sm transition-all cursor-pointer
              ${selectedOperator === "==="
                ? "bg-primary/60 text-white border-primary/60 shadow-md"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              }
            `}
          >
            ===
          </Button>
        </span>
        {var2}) {"{"}
      </div>
      <div className="ml-4 text-green-400">
        console.log(<span className="text-yellow-300">'{expectedMessage}'</span>)
      </div>
      <div>{"} else {"}</div>
      <div className="ml-4 text-green-400">
        console.log(<span className="text-yellow-300">'Mensagem alternativa'</span>)
      </div>
      <div>{"}"}</div>
    </div>
  )
}