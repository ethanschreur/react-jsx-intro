const Tweet = ({ username, name, date, message }) => {
	return (
		<div>
			<p>
				By {name}: @{username}
			</p>
			<p>{date}</p>
			<p>{message}</p>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Tweet username="ethanschreur" name="Ethan Schreur" date="8/11/2021" message="This is my tweet" />
			<Tweet username="ethanschreur" name="Ethan Schreur" date="8/11/2021" message="This is my tweet" />
			<Tweet username="ethanschreur" name="Ethan Schreur" date="8/11/2021" message="This is my tweet" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
