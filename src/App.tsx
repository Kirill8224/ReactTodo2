import { useState } from 'react'
import { useEffect } from 'react'
import { TodoList } from './TodoList'
import { TodoDetail } from './TodoDeatil'
import './App.css'

function App() {
  const [Tasks, setTask]= useState(null)
  useEffect(()=> {
    const data = fetch('https://corsproxy.io/?https://jsonplaceholder.typicode.com/todos')
    .then((res) => {return res.json()})
    .then((final)=> {return setTask(final)})
}, [])
  const [selectTask, setselectTask] = useState(null)
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
      <div>
      <button onClick={()=> {setselectTask(null)}}>сбросить выделения</button>
      <TodoDetail Tasks= {Tasks} selectTask= {selectTask} setselectTask= {setselectTask} />
      <TodoList Tasks= {Tasks} selectTask= {selectTask} setselectTask= {setselectTask}/>
      
      </div>
    </>
  )
}

export default App
