import { createContext, useContext, useEffect, useState } from 'react'

type MuteContextType = {
  isMuted: boolean
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>
}

const MuteContext = createContext<MuteContextType | undefined>(undefined)

export const useMute = () => {
  const context = useContext(MuteContext)
  if (!context) {
    throw new Error('useMute must be used within MuteProvider')
  }
  return context
}

export const MuteProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('mute') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('mute', isMuted.toString())
  }, [isMuted])

  return (
    <MuteContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </MuteContext.Provider>
  )
}
