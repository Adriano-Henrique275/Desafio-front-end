import { useState } from 'react'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 text-white">
      <h1
        className={`text-5xl font-bold ${
          count % 2 === 0 ? 'text-green-500' : ''
        }`}
      >
        {count}
      </h1>
      <div className="flex gap-4 mt-4">
        <Button
          label="-"
          onClick={() => setCount(count - 1)}
          variant="secondary"
        />
        <Button
          label="+"
          onClick={() => setCount(count + 1)}
          variant="primary"
        />
      </div>
    </div>
  )
}

export default Counter
