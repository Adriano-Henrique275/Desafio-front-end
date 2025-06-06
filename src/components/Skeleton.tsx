import { motion } from 'framer-motion'

type SkeletonProps = {
  width?: string
  height?: string
}

const Skeleton = ({ width = 'w-full', height = 'h-24' }: SkeletonProps) => {
  return (
    <motion.div
      className={`bg-gray-300 rounded-lg animate-pulse ${width} ${height}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default Skeleton
