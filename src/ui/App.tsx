import { useState } from 'react'
import { useEffect } from 'react'
import { TodoList } from './TodoList'
import { GetTasks } from '../dal/api'
import { TodoDetail } from './TodoDeatil'
import './App.css'

function App() {
  const [Tasks, setTask]= useState<TasksType[] | null>(null)
  type TasksType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
  }
  
  useEffect(()=> {
    GetTasks().then((final)=> {return setTask(final)})
}, [])
  const [selectTask, setselectTask] = useState<number | null>(null)
  if(Tasks == null){
    return(<h2>загрузка</h2>
    )}
  if(Tasks.length == 0){
    return(<h2>нет задач</h2>
    )
  }
  return (
    <>
      {console.log(Tasks)}
      <button onClick={()=> {setselectTask(null)}}>сбросить выделения</button>
      <TodoDetail Tasks= {Tasks} selectTask= {selectTask} setselectTask= {setselectTask} />
      <TodoList Tasks= {Tasks} selectTask= {selectTask} setselectTask= {setselectTask}/>
    
    </>
  )
}

export default App
