import styled from 'styled-components';

const RoundBtn = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
	height: 60px;
	color: #FFFFFF;
	font-family: 'Roboto';
	font-size: 20px;
	letter-spacing: 0.83px;
	line-height: 20px;
  text-align: center;
  padding: 20px 50px;
  border-radius: 5px;
  font-weight: 500;
  display: inline-block;
}`;

export default RoundBtn;
