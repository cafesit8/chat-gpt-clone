import { create } from 'zustand'

type Response = {
  message: string
  prompt: string
}

interface GlobalProps {
  text: string
  response: Response[]
  getPromp: (promp: string) => void
  getResponse: (response: Response) => void
}

export const globalStore = create<GlobalProps>((set) => ({
  text: '',
  response: [],
  getPromp: (promp) => {
    set({ text: promp })
  },
  getResponse: (res) => {
    set(state => ({ response: [...state.response, res] }))
  }
}))
