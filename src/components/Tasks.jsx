import './Tasks.css';
import React from 'react';
import classNames from 'classnames';

const STATUS = 'DONE';

const Tasks = ({ title }) => {
	// const filtered = useMemo(
	// 	() => tasks.filter((task) => task.state === state),
	// 	[tasks, state]
	// );

	return (
		<div className='task'>
			<div>{title}</div>
			<div className='bottomWrapper'>
				<div></div>
				<div className={classNames('status', STATUS)}>{STATUS}</div>
			</div>
		</div>
	);
};

export default Tasks;
