import { TodoItem } from "./TodoItem"
const tracks= [{id: 1}, {id: 2}, {id:3}]
export function TodoList(){
    return(tracks.map((track)=> {
        return(<TodoItem props= {track}/>)
    }))
}