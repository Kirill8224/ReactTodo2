export function GetTasks(){
    const data = fetch('https://corsproxy.io/?https://jsonplaceholder.typicode.com/todos')
    .then((res) => {return res.json()})
    return data
}