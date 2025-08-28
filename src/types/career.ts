export type GameStep = "intro" | "area" | "technology" | "specialization" | "learning" | "result"
export type Area = "frontend" | "backend"
export type Technology = "react" | "vue" | "csharp" | "java"
export type Specialization = "specialist" | "fullstack"

export interface CarreiraState {
  step: GameStep
  area: Area | null
  technology: Technology | null
  specialization: Specialization | null
  learningTechs: string[]
  currentTech: string
  showTechInput: boolean
}