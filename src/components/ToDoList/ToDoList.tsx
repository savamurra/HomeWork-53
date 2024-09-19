import './ToDoList.css';

interface IProps {
    task: string;
    id: string;
    onChangeTask: React.ChangeEventHandler<HTMLInputElement>;
    onDeleteByID: React.MouseEventHandler;
}

const ToDoList: React.FC<IProps> = ({task, onChangeTask, onDeleteByID}) => {
    return (
            <div className='taskWrapper'>
                <div className='taskWrapperInner'>
                    <p>{task}</p>
                    <button className='deleteBtn' type='button' onClick={onDeleteByID}></button>
                </div>
                <input className='taskChangeInput' type="text" value={task} onChange={onChangeTask}/>
            </div>
    );
};

export default ToDoList;