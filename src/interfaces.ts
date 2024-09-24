export interface IInterview {
  id: string
  company: string
  description: string
  contactName: string
  telegram?: string
  viber?: string
  phone?: string
  createdAt: Date
  forkFrom?:number
  forkTo?:number
  stages?:IStage[]
  result?:'Оффер' | 'Отказ'
}

export interface IStage {
  name:string
  date:string
  comment:string
}