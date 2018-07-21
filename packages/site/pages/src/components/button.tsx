/*
 * dependencies
 */
import * as React from 'react';
/*
 * Styled Components
 */
import { Button } from './styledComponents/button'
/*
 * TS Interfaces
 */
import { IButtonProps, IButtonState } from "./intefraces";
/*
 * Expo
 */
export default class extends React.Component<IButtonProps, IButtonState> {
	render() {
		return (
			<Button {...this.props}>{this.props.children}</Button>
		);
	}
}

