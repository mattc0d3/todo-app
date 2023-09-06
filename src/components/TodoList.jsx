import Task from './Task';

const TodoList = ({ todoList, setTodoList })=>{
    return <div id="list-div">
        {todoList.map((task, index)=>{
            return < Task task={task} setTodoList={setTodoList} index={index} key={task.task}/>
        })}
    
    </div>
}

export default TodoList;