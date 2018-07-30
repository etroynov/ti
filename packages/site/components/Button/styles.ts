/*!
 * Dependencies
 */

import styled, { StyledFunction } from 'styled-components';

const button: StyledFunction<IButtonProps & React.HTMLProps<HTMLInputElement>> = styled.button;

/*!
 * Expo
 */

export const Button = button`
  margin: 0;
  font: inherit;
  color: inherit;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 30px;
  vertical-align: middle;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .1s ease-in-out;
  transition-property: color, background-color, border-color;
  border-radius: none;
  overflow: visible;
  cursor: pointer;
  outline: none;

  padding: ${(props) => {
    if (props.size) return props.theme.buttons.size[props.size].padding;

    return '0 30px';
  }};

  color: ${(props) => {
    if (props.type) return props.theme.button[props.type].color;

    return 'inherit';
  }};

  background-color: ${(props) => {
    if (props.type) return props.theme.button[props.type].backgroundColor;

    return 'transparent';
  }};

  border: ${(props) => {
    if (props.type) return props.theme.button[props.type].border;

    return '1px solid #e5e5e5';
  }};

  line-height: ${(props) => {
    if (props.size) return props.theme.buttons.size[props.size].lineHeight;

    return '38px';
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.type) return props.theme.button[props.type].hover.backgroundColor;

      return 'transparent';
    }};
  }

  &:disabled {
    background-color: transparent;
    color: #999;
    border-color: #e5e5e5;

    cursor: default;
  }

  &:focus {
    background-color: ${(props) => {
      if (props.type) return props.theme.button[props.type].focus.backgroundColor;

      return '';
    }};
  }
`;
