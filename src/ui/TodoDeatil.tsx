import type { DetailTaskType } from "../bll/useTask"
import { ifTrue, TaskCompleted } from "../bll/useTodoDetail"
export function TodoDetail({Tasks, selectTask, setselectTask}: DetailTaskType){
    ifTrue(selectTask, <p style={{borderStyle: 'solid', borderColor: 'black', backgroundColor: 'yellow', color: 'black'}}>задача не выбрана</p>)
    if(selectTask && Tasks){
        return(<div style={{borderStyle: 'solid', borderColor: 'black', backgroundColor: 'yellow', color: 'black'}}>
            <p>Автор задачи: user{Tasks[selectTask].userId}</p>
            {TaskCompleted(Tasks[selectTask].completed, <p>задача не выполнена. Нужно сделать!</p>, <p>задача выполнена, можно отдохнуть</p>)}
        </div>
        )
    }
    return null
}
