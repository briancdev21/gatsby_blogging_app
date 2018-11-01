import styled from 'styled-components'

const FeatureList = styled.div`
  li {
    margin-left: 15px;
    list-style: none;
  }

  li:before {
    content: '\2022',
    color: '#000'
  }
`

export default FeatureList
