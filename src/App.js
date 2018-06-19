import React, { Component } from 'react';

import Header from './components/Header';
import Questions from './components/Questions';
import DataDisplay from './components/DataDisplay';
import PreviousDays from './components/PreviousDays';

class App extends Component {
	constructor() {
		super();
		this.state = {
			alreadySubmitted: false,
			todaysData: {},
			errorMessage: '',
		};
	}
	componentWillMount() {
		const date = new Date();
		const cleanDate = `${date.getDate()}-${date.getMonth() +
			1}-${date.getFullYear()}`;
		fetch(`http://localhost:3001/api/dateStatus/${cleanDate}`).then(
			async (response) => {
				if (response.status === 404) {
					this.setState({
						alreadySubmitted: false,
					});
					return;
				}
				const data = await response.json();
				this.setState({
					todaysData: data,
					alreadySubmitted: true,
				});
			},
		);
	}
	render() {
		return (
			<div className="App">
				<Header />
				{!this.state.alreadySubmitted && <Questions />}
				{this.state.alreadySubmitted && (
					<div>
						<DataDisplay todaysData={this.state.todaysData} />
						<PreviousDays previousData={this.state.previousData} />
					</div>
				)}
			</div>
		);
	}
}

export default App;
