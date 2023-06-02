'use client'
import { GiWindmill } from 'react-icons/gi'
import { TbBeach } from 'react-icons/tb'
import { MdOutlineVilla } from 'react-icons/md'
import { Container } from '../Container'
import { CategoryBox } from '../CategoryBox'
import { useSearchParams } from 'next/navigation'
export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
]
export function Categories() {
  const params = useSearchParams()
  const category = params?.get('category')
  return (
    <Container>
      <div className="flex items-center justify-between overflow-x-auto pt-4">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}
