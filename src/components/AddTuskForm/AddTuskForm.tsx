import {useState} from 'react';
interface AddTuskFormProps {
    onAddTusk: (taskText: string) => void;
}


const AddTuskForm = ({ onAddTusk }: AddTuskFormProps) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = () => {
        if (taskText.trim()) {
            onAddTusk(taskText);
        }
    };

    return (
        <div className='form'>
            <input type="text"
                   className='taskAddInput'
                   placeholder='Add new task'
                   value={taskText}
                   onChange={(e) => setTaskText(e.target.value)}
            />
            <button type='button' className='addButton' onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default AddTuskForm;