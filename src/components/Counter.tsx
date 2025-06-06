import { useEffect, useState } from 'react'
import Button from './Button'
import Skeleton from './Skeleton'

const Counter = () => {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem('counterValue')
    return saved ? Number(saved) : 0
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('counterValue', count.toString())
  }, [count])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      {isLoading ? (
        <Skeleton width="w-24" height="h-12" />
      ) : (
        <>
          <h1
            className={`text-5xl font-bold mb-4 ${
              count % 2 === 0 ? 'text-green-500' : ''
            }`}
          >
            {count}
          </h1>
          <div className="flex gap-4 flex-wrap mt-4 justify-center">
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
        </>
      )}
    </div>
  )
}

export default Counter
