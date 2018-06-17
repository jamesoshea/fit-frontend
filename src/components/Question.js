import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
	border: 1px solid #ddd;
	padding: 1em;
	margin: 1em;
`;

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answered: props.answered,
		};
		this.answerQuestion = this.answerQuestion.bind(this);
	}
	render() {
		return (
			<div>
				{!this.state.answered && (
					<QuestionContainer>
						<li>{this.props.msg}</li>
						<button className="pure-button" onClick={this.answerQuestion}>
							yeah
						</button>
						<button className="pure-button" onClick={this.answerQuestion}>
							nah
						</button>
					</QuestionContainer>
				)}
			</div>
		);
	}
	answerQuestion() {
		this.setState({
			answered: true,
		});
	}
}

export default Question;
