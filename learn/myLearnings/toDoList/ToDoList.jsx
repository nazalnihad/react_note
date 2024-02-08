import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["eat","shower","play"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim()!=="")
        {
            setTasks(t => [...tasks, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index) {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index +1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    
    return (
        <div className="to-do-list">
            <div>

            <h1>To-Do-List</h1>
            <input type="text" placeholder="enter a task" value={newTask} onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>

            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={()=>moveUp(index)}>Move Up</button>
                        <button className="move-btn" onClick={()=>moveDown(index)}>Move Down</button>
                        
                </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;