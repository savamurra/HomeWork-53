import './ToDoList.css';

interface IProps {
    task: string;
    id: string;
    onChangeTask: React.ChangeEventHandler<HTMLInputElement>;
}

const ToDoList: React.FC<IProps> = ({task, onChangeTask}) => {
    return (
            <div className='taskWrapper'>
                <div className='taskWrapperInner'>
                    <p>{task}</p>
                    <button className='deleteBtn'></button>
                </div>
                <input className='taskChangeInput' type="text" value={task} onChange={onChangeTask}/>
            </div>
    );
};

export default ToDoList;