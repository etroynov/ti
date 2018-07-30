/*!
 * Dependencies
 */

import * as React from 'react';

/*!
 * Styled Components
 */

import { Button } from './styles';

/*!
 * Expo
 */

export default (props: IButtonProps) => (
  <Button {...props}>{props.children}</Button>
);
