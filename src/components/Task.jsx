
const Task = ({ task , setTodoList, index })=>{

    

function handleDelete(e){
    setTodoList((currList)=>{
        const newList = [...currList]
        newList.splice(index,1);
        return newList
    })
}

function handleCheck(e){
    setTodoList((currList)=>{
        const listCopy = [...currList]
        console.log(listCopy[index].isDone)
        if (listCopy[index].isDone === false) {
            listCopy[index].isDone = true
        } else {
            listCopy[index].isDone = false
        }
        console.log(listCopy[index], "<<<<< element after adding class")
        return listCopy
    })
}

    return <li className="grid-list" >
        <p className={task.isDone ? "task-item done" : "task-item"}>{task.task}</p>
        <input className="check-button" type="checkbox" onChange={handleCheck} defaultChecked={task.isDone}></input>
        <button className="delete-btn" onClick={handleDelete}>X</button>
    </li>
}

export default Task;