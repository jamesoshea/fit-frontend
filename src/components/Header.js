import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
	render() {
		return (
			<div>
				<FitHeader>Hello</FitHeader>
				<FitSubheader>track your habits</FitSubheader>
				<hr />
			</div>
		);
	}
}

const FitHeader = styled.h1`
	text-align: center;
`;

const FitSubheader = styled.h3`
	text-align: center;
`;

export default Header;
