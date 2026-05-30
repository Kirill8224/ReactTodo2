//import { TodoItem } from "./TodoItem"
//const tracks= [{id: 1}, {id: 2}, {id:3}]
export type DetailTaskType= {
    selectTask: number | null,
    Tasks: {
        completed: boolean,
        id: number,
        title: string,
        userId: number
    }[] | null,
    setselectTask: React.Dispatch<React.SetStateAction<number | null>>
  }
  