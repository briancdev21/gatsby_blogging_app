import styled from 'styled-components'

const HorizontalLine = styled.div`
  width: ${ props => props.size }px;
  background-color: ${ props => props.color ? props.color : '#000' };
  height: ${ props => props.height }px;
  border-radius: 1.5px;
  display: inline-block;
  
  &.home-PersonalInfo {
    max-width: 260px;
  }

  @media (max-width: 600px) {
    &.home-our_tech {
      display: none;
    }
  }
  @media (max-width: 980px) {
    &.home-InfoDetail {
      display: none;
    }

  }
`

export default HorizontalLine
