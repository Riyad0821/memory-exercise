export interface Task {
  id: number
  title: string
  date: string
  description: string
  status: 'incomplete' | 'complete'
}

export interface GridImage {
  id: number
  src: string
  alt: string
  active: boolean
  disabled: boolean
}
