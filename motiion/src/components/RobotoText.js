import styled from 'styled-components'

const RobotoText = styled.div`
  font-size: ${ props => props.size }px;
  font-weight: ${ props => props.weight };
  font-family: "Roboto";
  color: ${ props => props.color ? props.color : '#000' };
  letter-spacing: 0.32px;
  line-height: 1.45em;
     
  @media only screen and (max-width: 600px) {
    font-size: ${ props => {
    const size = props.mobileSize ? props.mobileSize : props.size
    return size > 25 ? size * 0.9 : size
  }
}px;
    line-height: ${ props => props.size > 60 ? 1.45 : 1.35 }em
  }
  
  @media only screen and (max-width: 500px) {
    font-size: ${ props => {
    const size = props.mobileSize ? props.mobileSize : props.size
    return size > 25 ? size * 0.85 : size
  }
}px;
    line-height: ${ props => props.size > 60 ? 1.45 : 1.4 }em
  }

  @media only screen and (max-width: 400px) {
    font-size: ${ props => {
    const size = props.mobileSize ? props.mobileSize : props.size
    return size > 25 ? size * 0.8 : size
  }
}px;
    line-height: ${ props => props.size > 60 ? 1.45 : 1.5 }em
  }
`

export default RobotoText
