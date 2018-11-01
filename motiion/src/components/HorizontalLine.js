import styled from 'styled-components'

const HorizontalLine = styled.div`
  width: ${ props => props.size }px;
  background-color: ${ props => props.color ? props.color : '#000' };
  height: ${ props => props.height }px;
  border-radius: 1.5px;
  display: inline-block;
`

export default HorizontalLine
