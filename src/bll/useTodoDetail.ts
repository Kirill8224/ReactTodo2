export function ifTrue(selectTask: number | null, ui: any){
    if(selectTask == null){
        return(ui)
    }
}
export function TaskCompleted(Task: boolean, oneUI: any, twoUI: any){
    if(Task == false){
        return(oneUI)
    }
    else{
        return(twoUI)
    }
}