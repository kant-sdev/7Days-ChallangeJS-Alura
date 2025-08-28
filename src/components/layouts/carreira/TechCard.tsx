import { Card, CardContent } from "@/components/ui/card"
import { Technology } from "@/types/career"
import { motion } from "framer-motion"

interface TechCardProps {
  tech: {
    value: Technology
    label: string
    color: string
    description: string
  }
  onClick: () => void
}

export function TechCard({ tech, onClick }: TechCardProps) {
  const colorClasses = {
    cyan: "hover:border-cyan-300 text-cyan-800 bg-cyan-100",
    emerald: "hover:border-emerald-300 text-emerald-800 bg-emerald-100",
    purple: "hover:border-purple-300 text-purple-800 bg-purple-100",
    red: "hover:border-red-300 text-red-800 bg-red-100"
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card
        className={`cursor-pointer border-2 transition-colors ${colorClasses[tech.color as keyof typeof colorClasses]}`}
        onClick={onClick}
      >
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">{tech.label}</h3>
          <p className="text-gray-600">{tech.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}