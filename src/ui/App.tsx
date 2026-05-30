import { useState } from 'react'
import { useEffect } from 'react'
import { TodoList } from './TodoList'
import { GetTasks } from '../dal/api'
import { TodoDetail } from './TodoDeatil'
import './App.css'
import type { TasksType } from '../bll/useTaskSelection'
import { useExaminationApp } from '../bll/useTaskSelection'
function App() {
  const [Tasks, setTask]= useState<TasksType[] | null>(null)
  
  useEffect(()=> {
    GetTasks().then((final)=> {return setTask(final)})
}, [])
const {selectTask, setselectTask} = useExaminationApp(Tasks)
if(Tasks == null){
  return(<h2>загрузка</h2>)}
if(Tasks.length == 0){
  return(<h2>нет задач</h2>)
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
