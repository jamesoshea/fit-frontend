import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
	border: 1px solid #ddd;
	padding: 1em;
	margin: 1em;
`;

class Question extends Component {
	constructor() {
		super();
		this.state = {
			answered: false,
		};
		this.answerQuestion.bind(this);
	}
	render() {
		return (
			<div>
				{!this.state.answered && (
					<QuestionContainer>
						<li>{this.props.msg}</li>
						<button
							className="pure-button"
							onClick={() => {
								this.answerQuestion(this.props.index, true);
							}}
						>
							yeah
						</button>
						<button
							className="pure-button"
							onClick={() => {
								this.answerQuestion(this.props.index, false);
							}}
						>
							nah
						</button>
					</QuestionContainer>
				)}
			</div>
		);
	}
	answerQuestion(index, answer) {
		this.setState({
			answered: true,
		});
		this.props.handleAnswer(index, answer);
	}
}

export default Question;
