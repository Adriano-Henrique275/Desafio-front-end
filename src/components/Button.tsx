import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'toggle'
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  const baseStyles = 'px-4 py-2 rounded text-white text-lg font-bold'
  const variantStyles = {
    primary: 'bg-green-500 hover:bg-green-600',
    secondary: 'bg-red-500 hover:bg-red-600',
    toggle: 'bg-zinc-500 hover:bg-zinc-600',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
