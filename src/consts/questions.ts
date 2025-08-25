import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: 1,
    var1: "numeroUm",
    var1Value: 1,
    var2: "stringUm",
    var2Value: "1",
    correctOperator: "==",
    expectedMessage: "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes",
  },
  {
    id: 2,
    var1: "numeroTrinta",
    var1Value: 30,
    var2: "stringTrinta",
    var2Value: "30",
    correctOperator: "===",
    expectedMessage: "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo",
  },
  {
    id: 3,
    var1: "numeroDez",
    var1Value: 10,
    var2: "stringDez",
    var2Value: "10",
    correctOperator: "==",
    expectedMessage: "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes",
  },
]
