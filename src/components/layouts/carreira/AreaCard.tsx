import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface AreaCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  onClick: () => void
}

export function AreaCard({ icon, title, description, color, onClick }: AreaCardProps) {
  const colorClasses = {
    blue: "hover:border-blue-300 text-blue-800",
    green: "hover:border-green-300 text-green-800"
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card
        className={`cursor-pointer border-2 transition-colors ${colorClasses[color as keyof typeof colorClasses]}`}
        onClick={onClick}
      >
        <CardContent className="p-6 text-center">
          {icon}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}