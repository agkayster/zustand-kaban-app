import './Tasks.css';
import React from 'react';
import classNames from 'classnames';
import { useStore } from '../store';

const Tasks = ({ title }) => {
	const task = useStore((store) =>
		store.tasks.find((task) => task.title === title)
	);
	return (
		<div className='task'>
			{/* title is received from Column.jsx */}
			<div>{task.title}</div>
			<div className='bottomWrapper'>
				<div></div>
				<div className={classNames('status', task.state)}>
					{task.state}
				</div>
			</div>
		</div>
	);
};

export default Tasks;
