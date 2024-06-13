import './Column.css';
import React from 'react';
import Tasks from './Tasks';

function Column({ state }) {
	return (
		<div className='column'>
			<p>{state}</p>
			<Tasks title='Todo' />
		</div>
	);
}

export default Column;
