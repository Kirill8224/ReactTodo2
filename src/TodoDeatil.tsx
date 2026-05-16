export function TodoDetail({Tasks, selectTask, setselectTask}){
    if(selectTask == null){
        return(<p style={{borderStyle: 'solid', borderColor: 'black', backgroundColor: 'yellow', color: 'black'}}>задача не выбрана</p>)
    }
    if(selectTask){
        return(<div style={{borderStyle: 'solid', borderColor: 'black', backgroundColor: 'yellow', color: 'black'}}>
            <p>Автор задачи: user{Tasks[selectTask].userId}</p>
            <p>{Tasks[selectTask].completed == false ? 'задача не выполнена. Нужно сделать!' : 'задача выполнена, можно отдохнуть'}</p>
        </div>
        )
    }
}