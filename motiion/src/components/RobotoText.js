import styled from 'styled-components'

const RobotoText = styled.div`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-family: "Roboto";
  color: ${props => props.color ? props.color : "#000"};
  letter-spacing: 0.32px;
  line-height: 1.45em;
`;

export default RobotoText;
