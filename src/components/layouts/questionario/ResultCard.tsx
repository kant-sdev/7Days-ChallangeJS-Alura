import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Calendar, Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FormData } from "@/types/questionaries";

interface ResultScreenProps {
  formData: FormData;
  onReset: () => void;
}

export default function ResultScreen({ formData, onReset }: ResultScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">Questionário Concluído! 🎉</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Aqui está sua mensagem personalizada:
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-red-100 to-red-100 p-6 rounded-lg mb-6"
              >
                <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                  "Olá <span className="text-red-600 font-bold">{formData.nome}</span>, você tem{" "}
                  <span className="text-red-600 font-bold">{formData.idade}</span> anos e já está aprendendo{" "}
                  <span className="text-red-600 font-bold">{formData.linguagem}</span>!"
                </p>
              </motion.div>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Suas respostas:</h3>
                <div className="grid gap-2 text-left">
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <User className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600 font-bold">Nome:</span>
                    <span className="font-medium">{formData.nome}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600 font-bold">Idade:</span>
                    <span className="font-medium">{formData.idade} anos</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <Code className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600 font-bold">Linguagem:</span>
                    <span className="font-medium">{formData.linguagem}</span>
                  </div>
                </div>
              </div>

              <Button onClick={onReset} className="bg-red-600 hover:bg-red-700 text-white">
                Fazer Novamente
              </Button>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Code className="w-5 h-5 text-red-600" />
                  Como Funciona o Armazenamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">1. Captura de Dados</h4>
                  <p>
                    Quando você digita suas respostas, cada valor é armazenado em uma <strong>variável</strong>:
                  </p>
                  <code className="block mt-2 p-2 bg-red-100 rounded text-xs">
                    nome = "{formData.nome}"<br />
                    idade = "{formData.idade}"<br />
                    linguagem = "{formData.linguagem}"
                  </code>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">2. Concatenação de Strings</h4>
                  <p>
                    A mensagem personalizada é criada <strong>combinando texto fixo com as variáveis</strong>:
                  </p>
                  <code className="block mt-2 p-2 bg-red-100 rounded text-xs">
                    "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!"
                  </code>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">3. Exibição Dinâmica</h4>
                  <p>
                    O resultado final substitui as variáveis pelos valores reais que você digitou, criando uma
                    <strong> experiência personalizada</strong> para cada usuário.
                  </p>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500 italic">
                    💡 Este é o conceito fundamental de <strong>armazenamento de dados</strong> e
                    <strong> interpolação de strings</strong> em programação!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}