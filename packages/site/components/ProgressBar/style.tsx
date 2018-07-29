/*!
 * Dependencies
 */

import styled, { StyledFunction } from 'styled-components';

const div: StyledFunction<IProgressBarProps & React.HTMLProps<HTMLInputElement>> = styled.div;
const p: StyledFunction<IProgressBarProps & React.HTMLProps<HTMLInputElement>> = styled.p;

/*!
 * Expo
 */

export const ProgressBar = div`
  height: 7px;

  width: ${(props) => {
    if (props.size) return props.size + 'px';
    return '350px';
  }};
`;

export const Part = div`
  display: inline-block;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: ${(props) => {
    if (props.color) return props.color;
    return 'transparent';
  }};
  width: ${(props) => {
    if (props.percents) return props.percents;
    return 0;
  }};
  border-top-left-radius: ${(props) => {
    if (props.first) return '10px';
    return 0;
  }};
  border-bottom-left-radius: ${(props) => {
    if (props.first) return '10px';
    return 0;
  }};
  border-top-right-radius: ${(props) => {
    if (props.last) return '10px';
    return 0;
  }};
  border-bottom-right-radius: ${(props) => {
    if (props.last) return '10px';
    return 0;
  }};
`;

export const Footer = div`
  height: 7px;
  lineHeight: 1
  width: ${(props) => {
    if (props.size) return props.size + 'px';
    return '350px';
  }};
`;

export const Header = div`
  margin-right: 20px;
  height: 7px;
  line-height: 0.5;
  text-align: left;
  width: ${(props) => {
    if (props.size) return props.size + 'px';
    return '350px';
  }};
`;

export const Title = styled.span`
  font-size: 0.85em;
`;

export const Item = p`
  display: inline-block;
  font-size: 0.85em;

  width: ${(props) => {
    if (props.percents) return props.percents;
    return 0;
  }};
  color: ${(props) => {
    if (props.color) return props.color;
    return 'transparent';
  }};
  text-align: ${(props) => {
    if (props.first) return 'left';
    if (props.last) return 'right';
    return 'center';
  }};
`;
