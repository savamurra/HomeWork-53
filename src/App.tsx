import './App.css';
import ToDoList from './components/ToDoList/ToDoList.tsx';
import {useState} from 'react';

interface ITask {
    taskElement: string
    id: string
}

function App() {
    const [task, setTask] = useState<ITask[]>([
        {taskElement: 'Buy Milk', id: crypto.randomUUID()},
        {taskElement: 'Walk with dog', id: crypto.randomUUID()},
        {taskElement: 'Do homework', id: crypto.randomUUID()},
    ]);


    const changeTask = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const copyTask = task.map((taskElem)=> {

            if (taskElem.id === id) {
                return {
                    ...taskElem,
                    taskElement: e.target.value,
                };
            } return {...taskElem};
        });
        setTask(copyTask);
    };


    return (
        <>
            <div className='toDoList'>
                <div className='header'><h1>JUST DO IT</h1></div>
                <div className='form'>
                    <input type="text" className='taskAddInput' placeholder='Add new task'/>
                    <button type='button' className='addButton'>Add</button>
                </div>
                {task.map((taskItem) => {
                    return (
                        <ToDoList
                            key={taskItem.id}
                            task={taskItem.taskElement}
                            id={taskItem.id}
                            onChangeTask={e => changeTask(e, taskItem.id)}
                        />
                    );
                })}
                <div className='footer'>BUILD YOUR DREAM</div>
            </div>
        </>
    );
}

export default App;
