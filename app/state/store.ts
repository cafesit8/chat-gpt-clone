import { create } from 'zustand'

type Response = {
  message: string
  prompt: string
}

interface GlobalProps {
  text: string
  response: Response[]
  loading: boolean
  getPromp: (promp: string) => void
  getResponse: (response: Response) => void
  changeLoading: (state: boolean) => void
}

export const globalStore = create<GlobalProps>((set) => ({
  text: '',
  response: [],
  loading: true,
  getPromp: (promp) => {
    set({ text: promp })
  },
  getResponse: (res) => {
    set(state => ({ response: [...state.response, res] }))
  },
  changeLoading: (state) => set({ loading: state })
}))
