import './App.css';
import Column from './components/Column';

function App() {
	return (
		<h1 className='App'>
			<Column state='PLANNED' />
			<Column state='ONGOING' />
			<Column state='DONE' />
		</h1>
	);
}

export default App;
