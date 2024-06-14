import './Tasks.css';
import React from 'react';
import classNames from 'classnames';
import { useStore } from '../store';
import { FaRegTrashCan } from 'react-icons/fa6';

const Tasks = ({ title }) => {
	const task = useStore((store) =>
		store.tasks.find((task) => task.title === title)
	);

	const deleteTask = useStore((store) => store.deleteTask);

	const setDraggedTask = useStore((store) => store.setDraggedTask);

	return (
		<div
			className='task'
			draggable
			onDragStart={() => {
				setDraggedTask(task.title);
			}}>
			{/* title is received from Column.jsx */}
			<div>{task.title}</div>
			<div className='bottomWrapper'>
				<div className='deleteBtn'>
					<FaRegTrashCan
						onClick={() => deleteTask(title)}
						style={{ color: 'blue', fontSize: '1rem' }}
					/>
				</div>
				<div className={classNames('status', task.state)}>
					{task.state}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
