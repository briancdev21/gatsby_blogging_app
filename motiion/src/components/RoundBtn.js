import styled from 'styled-components';

const RoundBtn = styled.div`
  background-color: ${props => props.bgColor};
	color: ${props => props.color ? props.color : '#FFFFFF'};
	font-family: 'Roboto';
	font-size: ${props => props.size}px;
	letter-spacing: 0.83px;
	line-height: 1em;
  text-align: center;
  padding: 1em 2.5em;
  border-radius: 5px;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
`

export default RoundBtn;
