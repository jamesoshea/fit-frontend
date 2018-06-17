import React, { Component } from 'react';
import styled from 'styled-components';

import Question from './Question';

const questions = [
	{
		text: 'Did you cycle today?',
		answered: false,
		answer: false,
	},
	{
		text: 'Did you do strength work today?',
		answered: false,
		answer: false,
	},
	{
		text: 'Did you do HIIT today?',
		answered: false,
		answer: false,
	},
	{
		text: 'Did you abstain from smoking?',
		answered: false,
		answer: false,
	},
	{
		text: 'Did you abstain from drinking?',
		answered: false,
		answer: false,
	},
	{
		text: 'Did you eat low carb food?',
		answered: false,
		answer: false,
	},
];

const List = styled.ul`
	text-align: center;
	list-style: none;
`;

const questionComponents = questions.map((q, i) => {
	return <Question msg={q.text} index={i} answered={false} key={i} />;
});

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: questions,
		};
	}
	render() {
		return (
			<div>
				<List>{questionComponents}</List>
				<button>Submit</button>
			</div>
		);
	}
}

export default Questions;
