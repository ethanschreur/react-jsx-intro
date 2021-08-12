const Person = ({ name, age, hobbies }) => {
	return (
		<div>
			<p>Learn some information about this person</p>
			<p>Name: {name}</p>
			<p>Age: {age.length > 8 ? age.substring(0, 6) : age}</p>
			{age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}
			<p>Hobbies:</p>
			<ul>
				{hobbies.map((h) => {
					return <li>{h}</li>;
				})}
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Person name="Ethan" age="22" hobbies={[ 'coding', 'running', 'video games' ]} />
			<Person name="Polly" age="16" hobbies={[ 'cooking', 'swimming', 'television' ]} />
			<Person name="Leona" age="18" hobbies={[ 'nothing' ]} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
