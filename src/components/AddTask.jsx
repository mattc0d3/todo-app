import { useState } from 'react';


const AddTask = ({ todoList, setTodoList }) => {
    const [newTask, setNewTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (newTask !== "" && todoList.every(todo => todo.task !== newTask)) {
            setTodoList((currList) => {
                const newTaskObj = { task: newTask, isDone: false }
                return [...currList, newTaskObj]
            })
        } else {
            window.alert("Bad request :(")
        }
        setNewTask('')
    }


    return <div id="form-div">
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskinput">add task: </label>
            <input id="taskinput" value={newTask} onChange={(e) => { setNewTask(e.target.value) }}></input>
            <button id="add-btn">+</button>
        </form>
    </div>

}

export default AddTask;