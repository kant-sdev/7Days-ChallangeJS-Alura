interface VariablesDisplayProps {
  var1: string
  var1Value: number
  var2: string
  var2Value: string
}

export function VariablesDisplay({ var1, var1Value, var2, var2Value }: VariablesDisplayProps) {
  return (
    <div className="bg-muted p-4 rounded-lg">
      <h3 className="font-semibold mb-3">Variáveis:</h3>
      <div className="grid grid-cols-2 gap-4 text-sm font-mono">
        <div>
          <span className="text-[#f14a5c]">let</span> {var1} ={" "}
          {typeof var1Value === "string" ? `'${var1Value}'` : var1Value}
          <div className="text-xs text-muted-foreground">Tipo: {typeof var1Value}</div>
        </div>
        <div>
          <span className="text-[#f14a5c]">let</span> {var2} ={" "}
          {typeof var2Value === "string" ? `'${var2Value}'` : var2Value}
          <div className="text-xs text-muted-foreground">Tipo: {typeof var2Value}</div>
        </div>
      </div>
    </div>
  )
}