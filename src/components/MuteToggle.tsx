import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { useMute } from '../context/MuteContext'

const MuteToggle = () => {
  const { isMuted, setIsMuted } = useMute()

  return (
    <button
      onClick={() => setIsMuted((prev) => !prev)} // 🔥 Agora `setIsMuted` está sendo usado
      className="p-2 bg-gray-800 text-white rounded-full"
    >
      {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
    </button>
  )
}

export default MuteToggle
