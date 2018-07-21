/*
 * dependencies
 */
import * as React from 'react';
/*
 * Styled Components
 */
import { List, ListItem } from '../styledComponents/styledList'
/*
 * TS Interfaces
 */
import { IListProps, IListState } from "../interfaces/intefraces";
/*
 * Expo
 */
export default class Search extends React.Component<IListProps, IListState> {

	handleChooseCategory = () => this.props.handleShowList(null)

	render() {
		return (
			<List>
				{this.props.data.map((el) => <ListItem onClick={this.handleChooseCategory}>{el}</ListItem>)}
			</List>

		)
	}

}

