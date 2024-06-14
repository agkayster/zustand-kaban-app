import './Column.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import Tasks from './Tasks';
import { useStore } from '../store';
// import { shallow } from 'zustand/shallow';

function Column({ state }) {
	const [text, setText] = useState('');
	const [open, setOpen] = useState(false);
	const [drop, setDrop] = useState(false);

	// useStore should come from your store.js. filter our task.state that matches our state
	const tasks = useStore((store) =>
		store.tasks.filter((task) => task.state === state)
	);

	// import our addTask from store.js and pass it into our button element
	const addTask = useStore((store) => store.addTask);

	const setDraggedTask = useStore((store) => store.setDraggedTask);
	const draggedTask = useStore((store) => store.draggedTask);
	const moveTask = useStore((store) => store.moveTask);

	return (
		/* e.preventDefault(), makes sure the dragged item does not go back to default position */
		<div
			/* this would change color to let us know if we can drop on this column */
			className={classNames('column', { drop: drop })}
			/* once we drag over, it would indicate if we can drop a task/item */
			onDragOver={(e) => {
				setDrop(true);
				e.preventDefault();
			}}
			/*once we leave the indicator should disappear */
			onDragLeave={(e) => {
				setDrop(false);
				e.preventDefault();
			}}
			/*once we drop the indicator should disappear */
			onDrop={(e) => {
				setDrop(false);
				moveTask(draggedTask, state);
				setDraggedTask(null);
			}}>
			<div className='titleWrapper'>
				{/* receive state from App.js */}
				<p>{state}</p>
				<button type='' className='' onClick={() => setOpen(true)}>
					Add
				</button>
			</div>
			{tasks.map((task) => (
				<Tasks title={task.title} key={task.state} />
			))}
			{open && (
				<div className='Modal'>
					<div className='modalContent'>
						<input
							type='text'
							className=''
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<button
							onClick={() => {
								addTask(text, state);
								setText('');
								setOpen(false);
							}}>
							Submit
						</button>
						<button
							onClick={() => {
								setText('');
								setOpen(false);
							}}>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Column;
