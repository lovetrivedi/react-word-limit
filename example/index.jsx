import React from 'react';
import ReacDOM from 'react-dom';
import WordLimit from './WordLimit';

class App extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="col-lg-2">
					<WordLimit limit={10}>test test test test test </WordLimit>
				</div>
			</div>
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);