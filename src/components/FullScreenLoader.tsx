import { motion } from 'framer-motion'

const FullScreenLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-80 h-48 bg-gray-700 rounded-lg animate-pulse" />{' '}
      {/* 🔥 Agora mais alinhado aos componentes */}
    </motion.div>
  )
}

export default FullScreenLoader
