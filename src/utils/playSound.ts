export const playSound = (
  soundFile: string,
  volume: number = 0.2,
  isMuted: boolean,
) => {
  if (isMuted) return // 🔥 Se estiver mutado, não toca o som

  const audio = new Audio(soundFile)
  audio.volume = volume
  audio.play()
}
