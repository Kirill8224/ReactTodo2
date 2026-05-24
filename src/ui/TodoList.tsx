import { TodoItem } from "./TodoItem"
//const tracks= [{id: 1}, {id: 2}, {id:3}]
type DetailTaskType= {
    selectTask: number | null,
    Tasks: {
        completed: boolean,
        id: number,
        title: string,
        userId: number
    }[] | null,
    setselectTask: React.Dispatch<React.SetStateAction<number | null>>
  }
export function TodoList({selectTask, Tasks, setselectTask}: DetailTaskType){
    return(Tasks?.map((task)=> {
        return(<div style={{gap: '5px', padding: '5px'}}>
        <TodoItem key={task.id} props= {task} selectTask= {selectTask} setselectTask= {setselectTask}/>
        </div>)
    }))
}