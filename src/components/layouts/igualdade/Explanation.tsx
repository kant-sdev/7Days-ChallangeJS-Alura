import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExplanationCard() {
  return (
    <Card className="max-w-7xl mx-auto mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Operadores de Igualdade em JavaScript</CardTitle>
        <CardDescription>
          Entenda a diferença entre == (igualdade com conversão) e === (igualdade estrita)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="p-4 rounded-lg shadow-md bg-zinc-100">
            <h3 className="font-semibold text-primary  mb-2">== (Igualdade com conversão)</h3>
            <p className="text-sm">
              Compara valores após converter os tipos automaticamente. Pode causar comportamentos inesperados.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-zinc-100">
            <h3 className="font-semibold text-orange-600 mb-2">=== (Igualdade estrita)</h3>
            <p className="text-sm">
              Compara valores E tipos. Não faz conversão automática. Mais seguro e previsível.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}