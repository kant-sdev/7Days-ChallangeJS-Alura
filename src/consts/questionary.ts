import { Questionary } from "@/types/questionaries";
import { User, Calendar, Code } from "lucide-react";

export const questionaryData: Questionary[] = [
  {
    key: "nome",
    label: "Qual o seu nome?",
    placeholder: "Digite seu nome",
    icon: User,
    type: "text",
  },
  {
    key: "idade",
    label: "Quantos anos você tem?",
    placeholder: "Digite sua idade",
    icon: Calendar,
    type: "number",
  },
  {
    key: "linguagem",
    label: "Qual linguagem de programação você está estudando?",
    placeholder: "Ex: JavaScript, Python, Java...",
    icon: Code,
    type: "text",
  },
];