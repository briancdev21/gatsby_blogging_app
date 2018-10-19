import styled from 'styled-components'

const PlayFairText = styled.div`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-family: "Playfair Display";
  color: ${props => props.color ? props.color : '#000'};
  letter-spacing: 0.32px;
  line-height: ${props => props.size > 60 ? 1.45 : 1.25}em
`;

export default PlayFairText;
