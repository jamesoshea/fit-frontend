import React, { Component } from 'react';
import styled from 'styled-components';

const DayDiv = styled.div`
	padding: 1em;
	margin: 1em 0;
	border: 1px solid #ccc;
`;

class PreviousDays extends Component {
	constructor() {
		super();
		this.state = {
			previousDays: [],
		};
		this.previousDaysClean = this.previousDaysClean.bind(this);
	}
	componentWillMount() {
		fetch(`http://localhost:3001/api/dateStatuses/`).then(async (response) => {
			if (response.status === 404) {
				return;
			}
			const data = await response.json();
			this.setState({
				previousDays: data,
			});
		});
	}
	previousDaysClean() {
		return this.state.previousDays.map((day) => {
			const { _id, __v, ...rest } = day;
			return rest;
		});
	}
	previousDaysListItems() {
		return this.previousDaysClean()
			.reverse()
			.map((day, index) => {
				return (
					<DayDiv key={index}>
						<h5>{day.dateString}</h5>
						<div>Cycled? {day.cycle ? 'success!' : 'nah m8'}</div>
						<div>Strength? {day.strength ? 'success!' : 'nah m8'}</div>
						<div>HIIT? {day.hiit ? 'success!' : 'nah m8'}</div>
						<div>No Ciggies? {day.noSmoking ? 'success!' : 'nah m8'}</div>
						<div>No Alcohol? {day.noAlcohol ? 'success!' : 'nah m8'}</div>
						<div>Low Carb Lyf? {day.lowCarbs ? 'success!' : 'nah m8'}</div>
					</DayDiv>
				);
			});
	}
	render() {
		return <ul>{this.previousDaysListItems()}</ul>;
	}
}

export default PreviousDays;
