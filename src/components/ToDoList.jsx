import React, { useState } from 'react';
import "./index_1.css";

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Code some JS"]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState(""); 

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        setTasks(t => [...t, newTask]);
        setNewTask(""); 
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index) {
        setIsEditing(index); 
        setEditText(tasks[index]); 
    }

    function handleEditChange(event) {
        setEditText(event.target.value);
    }

    function saveEditTask(index) {
        const updatedTasks = tasks.map((task, i) => i === index ? editText : task);
        setTasks(updatedTasks);
        setIsEditing(null); 
        setEditText(""); 
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className='add-button'
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        {isEditing === index ? (
                            <input 
                                type="text" 
                                value={editText}
                                onChange={handleEditChange}
                                onBlur={() => saveEditTask(index)} 
                                autoFocus
                            />
                        ) : (
                            <span className='text'>{task}</span>
                        )}
                        <button
                            className='delete-button'
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className='edit-button'
                            onClick={() => editTask(index)}
                        >
                            Edit
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
