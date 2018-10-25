import styled from 'styled-components'

const PlayFairText = styled.div`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-family: "Playfair Display";
  color: ${props => props.color ? props.color : '#000'};
  letter-spacing: 0.32px;
  line-height: ${props => props.size > 60 ? 1.45 : 1.25}em
    
  @media only screen and (max-width: 600px) {
    font-size: ${props => props.size * 0.9}px;
    line-height: ${props => props.size > 60 ? 1.45 : 1.35}em
  }
  
  @media only screen and (max-width: 500px) {
    font-size: ${props => props.size * 0.85}px;
    line-height: ${props => props.size > 60 ? 1.45 : 1.45}em
  }

  @media only screen and (max-width: 400px) {
    font-size: ${props => props.size * 0.8}px;
    line-height: ${props => props.size > 60 ? 1.45 : 1.6}em
  }
`;

export default PlayFairText;
