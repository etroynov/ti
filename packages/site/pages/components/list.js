/*
 * dependencies
 */
import * as React from 'react';
/*
 * Styled Components
 */
import { List, ListItem } from './styledComponents/styledList'
/*
 * Expo
 */
export default class Search extends React.Component {

	handleChooseCategory = (e) => this.props.handleShowList(null)

	render() {
		return (
			<List>
				{this.props.data.map((el) => <ListItem onClick={this.handleChooseCategory}>{el}</ListItem>)}
			</List>

		)
	}

}

