
export function TodoItem({props, selectTask, setselectTask}){
    return(<div key={props.id} style={{borderStyle: 'solid', borderColor: selectTask== props.id ? 'yellow' : '#cac1fa', color: 'black'}}>
            <li onClick={()=> setselectTask(props.id)}>
                <p>номер задачи: {props.id}</p>
                <p>название: {props.title}</p>
            </li>
        </div>
    )
}