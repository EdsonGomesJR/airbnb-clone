'use client'

import { useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}
export function Counter({ onChange, subtitle, title, value }: CounterProps) {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value - 1)
  }, [onChange, value])

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <p className="font-medium">{title}</p>
        <p className="font-light text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onReduce}
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] text-neutral-500 transition hover:opacity-80"
        >
          <AiOutlineMinus />
        </button>
        <p className=" text-xl font-light text-neutral-600">{value}</p>
        <button
          onClick={onAdd}
          className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] text-neutral-500 transition hover:opacity-80"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  )
}
