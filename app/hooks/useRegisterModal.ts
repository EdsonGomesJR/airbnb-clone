import { create } from 'zustand'

interface RegisterModalStrore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useRegisterModal = create<RegisterModalStrore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useRegisterModal
