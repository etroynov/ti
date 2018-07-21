import styled, { StyledFunction } from "styled-components"

/*
 * TS Interfaces
 */
import { IButtonProps } from "../intefraces";

const button: StyledFunction<IButtonProps & React.HTMLProps<HTMLInputElement>> = styled.button


const Button = button`
  background-color: ${props => {
    if (props.primary) {
      return '#1e87f0'
    } else if (props.danger) {
      return '#f0506e'
    } else if (props.secondary) {
      return '#151515'
    } else {
      return 'transparent'
    }
  }};
  color: ${props => {
    if (props.primary || props.danger || props.secondary) {
      return 'white'
    } else if (props.disabled) {
      return '#e5e5e5'
    } else {
      return 'inherit'
    }
  }};
  border: ${props => {
    if (props.primary || props.danger || props.secondary || props.link) {
      return 'none'
    } else {
      return '1px  solid #e5e5e5;'
    }
  }};
  width: ${props => {
    if (props.full) {
      return '100%'
    }
  }};
  padding: ${props => {
    if (props.large) {
      return '0 40px'
    } else if (props.small) {
      return '0 15px'
    } else {
      return '0 30px'
    }
  }};
  line-height: ${props => {
    if (props.large) {
      return '53px'
    } else if (props.small) {
      return '28px'
    } else {
      return '38px'
    }
  }};
  font-size: ${props => {
    if (props.large || props.small) {
      return '14px'
    }
  }};
//УБРАТЬ  
  marginRight: 20,
  display: 'inline-block'
//
  cursor: pointer;
  text-decoration: none;
  outline: none;
  // font: inherit;

  &:hover:enabled {
      border-color: ${props => {
    if (!props.primary && !props.danger && !props.secondary && !props.link) {
      return 'black'
    }
  }};
      background-color: ${props => {
    if (props.primary) {
      return '#0f7ae5'
    } else if (props.danger) {
      return '#ee395b'
    } else if (props.secondary) {
      return '#151515'
    }
  }};
      color: ${props => {
    if (props.link) {
      return '#0f6ecd'
    }
  }};
      text-decoration: ${props => {
    if (props.link) {
      return 'underline'
    }
  }};
    }
  &:focus {
    border-color: ${props => {
    if (!props.primary && !props.danger && !props.secondary && !props.link) {
      return 'black'
    }
  }};
    background-color: ${props => {
    if (props.primary) {
      return '#0f7ae5'
    } else if (props.danger) {
      return '#ee395b'
    } else if (props.secondary) {
      return '#151515'
    }
  }};
    color: ${props => {
    if (props.link) {
      return '#0f6ecd'
    }
  }};
    text-decoration: ${props => {
    if (props.link) {
      return 'underline'
    }
  }};
  }
`;

export { Button }