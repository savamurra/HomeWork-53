import './App.css';
import ToDoList from './components/ToDoList/ToDoList.tsx';
import {useState} from 'react';

function App() {

    const [task, setTask] = useState<string[]>(['Buy Milk', 'Walk with dog', 'Do homework']);

    return (
        <>
            <div className='toDoList'>
                <div className='form'>
                    <input type="text" placeholder='Add new task'/>
                    <button type='button'>Add</button>
                </div>
                {task.map((taskItem) => {
                    return (
                        <ToDoList task={taskItem}/>
                    );
                })}
            </div>
        </>
    );
}

export default App;
