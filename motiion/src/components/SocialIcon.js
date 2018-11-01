import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 24px;
  margin: 0;
  margin-right: 10px;
`

const SocialIcon = ({ link, src }) => (
  <a href={link}>
    <Img src={src} />
  </a>
)

export default SocialIcon
