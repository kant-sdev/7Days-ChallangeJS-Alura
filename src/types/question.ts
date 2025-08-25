export interface Question {
  id: number
  var1: string
  var1Value: number
  var2: string
  var2Value: string
  correctOperator: "==" | "==="
  expectedMessage: string
}