import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  align-items: ${ props => props.alignItems ? props.alignItems : 'center' };
  justify-content: ${ props => props.justifyContent ? props.justifyContent : 'center' };
  height: 100%;
  flex-flow: row wrap;

  &.profile {
    align-items: flex-start;
    flex-direction: row;
  
    .content {
      text-align: left;
    }
  }

  &.careers-openpositions {
    justifyContent: space-between;
  }


  @media (max-width: 600px) {
    &.careers-openpositions {
      justifyContent: flex-start;
    }
  }


  @media (max-width: 600px) {
    padding: 0 10px;

    &.profile {
      align-items: center;
      flex-direction: column;

      .content {
        text-align: center;
      }
    }

    &.careers-openpositions {
      justifyContent: center;
    }
  }
`

export default FlexContainer
