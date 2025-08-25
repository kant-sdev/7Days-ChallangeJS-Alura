export interface Question {
  id: number
  var1: string
  var1Value: any
  var2: string
  var2Value: any
  correctOperator: "==" | "==="
  expectedMessage: string
}