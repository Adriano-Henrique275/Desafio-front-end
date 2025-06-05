import { useState } from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'

const App = () => {
  const [isStopwatch, setIsStopwatch] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white flex-col">
      {isStopwatch ? <Stopwatch /> : <Counter />}
      <Button
        label={isStopwatch ? 'Modo Contador' : 'Modo Cronômetro'}
        onClick={() => setIsStopwatch(!isStopwatch)}
        variant="toggle"
      />
    </div>
  )
}

export default App
