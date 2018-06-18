import React, { Component } from 'react';
import styled from 'styled-components';

import Question from './Question';

const questions = [
	{
		text: 'Did you cycle today?',
		answer: false,
		fieldName: 'cycle',
	},
	{
		text: 'Did you do strength work today?',
		answer: false,
		fieldName: 'strength',
	},
	{
		text: 'Did you do HIIT today?',
		answer: false,
		fieldName: 'hiit',
	},
	{
		text: 'Did you abstain from smoking?',
		answer: false,
		fieldName: 'noSmoking',
	},
	{
		text: 'Did you abstain from drinking?',
		answer: false,
		fieldName: 'noAlcohol',
	},
	{
		text: 'Did you eat low carb food?',
		answer: false,
		fieldName: 'lowCarbs',
	},
];

const List = styled.ul`
	text-align: center;
	list-style: none;
`;

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: questions,
		};
		this.handleAnswer = this.handleAnswer.bind(this);
		this.questionComponents = this.questionComponents.bind(this);
	}
	questionComponents() {
		return this.state.questions.map((q, i) => {
			return (
				<Question
					msg={q.text}
					index={i}
					answered={false}
					key={i}
					handleAnswer={this.handleAnswer}
				/>
			);
		});
	}
	handleAnswer(index, answer) {
		const newQuestions = this.state.questions;
		newQuestions[index].answer = answer;
		this.setState({
			questions: newQuestions,
		});
	}
	dataToSend() {
		const payload = {};
		this.state.questions.forEach((q) => {
			payload[q.fieldName] = q.answer;
		});
		const date = new Date();
		const cleanDate = `${date.getDate()}-${date.getMonth() +
			1}-${date.getFullYear()}`;
		payload.dateString = cleanDate;
		return payload;
	}
	sendData(payload) {
		fetch(`http://localhost:3001/api/dateStatus/`, {
			body: JSON.stringify(payload),
			headers: {
				'content-type': 'application/json',
			},
			method: 'POST',
		})
			.then(() => {
				console.log('hello');
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render() {
		return (
			<div>
				<List>{this.questionComponents()}</List>
				<button
					className="pure-button"
					onClick={() => {
						this.sendData(this.dataToSend());
					}}
				>
					Submit
				</button>
			</div>
		);
	}
}

export default Questions;
