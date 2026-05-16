import { TodoItem } from "./TodoItem"
//const tracks= [{id: 1}, {id: 2}, {id:3}]
export function TodoList({selectTask, Tasks, setselectTask}){
    return(Tasks.map((task)=> {
        return(<div style={{gap: '5px', padding: '5px'}}>
        <TodoItem key={task.id} props= {task} selectTask= {selectTask} setselectTask= {setselectTask}/>
        </div>)
    }))
}