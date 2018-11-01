import styled from 'styled-components'

const FlexView = styled.div`
  flex: ${ props => props.size ? props.size : 1 };
  height: 100%;
`

export default FlexView
