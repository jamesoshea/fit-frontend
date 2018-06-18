import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.div`
	text-align: center;
`;

class DataDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todaysData: this.props.todaysData,
		};
	}
	goals() {
		const { _id, __v, dateString, ...rest } = this.state.todaysData;
		return rest;
	}
	goalPercentage() {
		const goals = Object.entries(this.goals());
		const totalAchieved = goals.reduce((total, goal) => {
			return (total += Number(goal[1]));
		}, 0);
		return ((totalAchieved / goals.length) * 100).toFixed(0);
	}
	render() {
		return (
			<div>
				<h1>{this.state.todaysData.dateString}</h1>
				<Message>
					You achieved {this.goalPercentage()}% of your goals today!
				</Message>
			</div>
		);
	}
}

export default DataDisplay;
