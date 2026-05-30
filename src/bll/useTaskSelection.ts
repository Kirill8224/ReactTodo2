import { useState } from "react"
export type TasksType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
  }
export function useExaminationApp(Tasks: Array<any>){
  const [selectTask, setselectTask] = useState<number | null>(null)
   return{selectTask, setselectTask}
}