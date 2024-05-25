import React from 'react'

interface Props {
  handleClick?: (e: React.FormEvent) => void | (() => void)
  height?: string
  width?: string
  color?: string
  text?: string
  icon?: string
  rounded?: string
  isActionBtn?: boolean
  iconSize?: [number, number]
  type?: 'button' | 'submit' | 'reset'
  fontSize?: string
}

export default function Button({ color,
  fontSize,
  handleClick,
  height,
  icon,
  iconSize,
  isActionBtn,
  rounded,
  text,
  type,
  width }: Props) {
  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      className={`flex items-center text-white justify-center font-bold gap-1 transition-all ${fontSize} ${width || 'w-full'} ${height || 'h-[47px]'} ${rounded || 'rounded-xl'} ${color || 'bg-primary border-2 border-primary hover:bg-white/5'}`}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          height={iconSize ? iconSize[0] : 14}
          width={iconSize ? iconSize[1] : 14}
        />
      )}
      {!isActionBtn && <p>{text}</p>}
    </button>
  )
}

