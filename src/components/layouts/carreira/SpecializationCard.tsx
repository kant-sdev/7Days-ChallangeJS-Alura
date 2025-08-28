import { Card, CardContent } from '@/components/ui/card'
import { Specialization } from '@/types/career'
import {motion} from 'framer-motion'

interface SpecializationCardProps {
  spec: {
    value: Specialization
    label: string
    icon: React.ReactNode
    color: string
    description: string
  }
  onClick: () => void
}

export function SpecializationCard({ spec, onClick }: SpecializationCardProps) {
  const colorClasses = {
    indigo: "hover:border-indigo-300 text-indigo-800",
    orange: "hover:border-orange-300 text-orange-800"
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card
        className={`cursor-pointer border-2 transition-colors ${colorClasses[spec.color as keyof typeof colorClasses]}`}
        onClick={onClick}
      >
        <CardContent className="p-6 text-center">
          {spec.icon}
          <h3 className="text-xl font-semibold mb-2">{spec.label}</h3>
          <p className="text-gray-600">{spec.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}