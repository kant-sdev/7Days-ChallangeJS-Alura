import { Badge } from '@/components/ui/badge'
import {motion} from 'framer-motion'
import { X } from 'lucide-react'

interface TechBadgeProps {
  tech: string
  onRemove: () => void
}

export function TechBadge({ tech, onRemove }: TechBadgeProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
      <Badge
        variant="secondary"
        className="bg-red-100 text-red-800 px-3 py-1 text-sm flex items-center gap-2"
      >
        {tech}
        <X
          className="w-3 h-3 cursor-pointer hover:text-red-600"
          onClick={onRemove}
        />
      </Badge>
    </motion.div>
  )
}