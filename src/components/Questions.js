import React, { Component } from 'react';
import styled from 'styled-components';

const questions = [
	'Did you cycle today?',
	'Did you do strength work today?',
	'Did you do HIIT today?',
	'Did you abstain from smoking?',
	'Did you abstain from drinking?',
	'Did you eat low carb food?',
];

const List = styled.ul`
	text-align: center;
	list-style: none;
`;

const QuestionContainer = styled.div`
	border: 1px solid #ddd;
	padding: 1em;
	margin: 1em;
`;

const questionElements = questions.map((q) => {
	return (
		<QuestionContainer>
			<li>{q}</li>
			<button className="pure-button">yeah</button>
			<button className="pure-button">nah</button>
		</QuestionContainer>
	);
});

class Header extends Component {
	render() {
		return (
			<div>
				<List>{questionElements}</List>
			</div>
		);
	}
}

export default Header;
