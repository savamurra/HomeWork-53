import './ToDoList.css';

interface IProps {
    task: string;
}

const ToDoList: React.FC<IProps> = ({task}) => {
    return (
        <div>
            <div className='taskWrapper'>
                <p>{task}</p>
                <button className='deleteBtn'></button>
            </div>
        </div>
    );
};

export default ToDoList;