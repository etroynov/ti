/*
 * dependencies
 */
import * as React from 'react';
/*
 * Styled Components
 */
import { Input } from './styledComponents/styledInput'
/*
 * TS Interfaces
 */
import { ISearchProps, ISearchState } from "../interfaces/intefraces";
/*
 * Expo
 */
export default class Search extends React.Component<ISearchProps, ISearchState> {
	state = { searchCriteria: null }

	handleChange = (e) => this.props.handleShowList(e.target.value)

	render() {
		return (
			<Input
				placeholder={this.props.placeholder}
				type='text'
				onChange={this.handleChange}
			/>
		);
	}
}

