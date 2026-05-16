export function TodoItem({props}){
    return(<div key={props.id}>
            <p>id {props.id}</p>
        </div>
    )
}