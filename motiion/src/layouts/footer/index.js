import React from 'react'
import { Link } from 'gatsby'

import { Wrapper, Logo, Links, Container, FlexContainer, CustomLink } from './components'
import { LogoPng } from '../../images'

const Footer = () => (
  <Wrapper>
    <Container>
      <FlexContainer>
        <Link to="/"><Logo src={LogoPng} ></Logo></Link>
        <Links>
          <CustomLink to="/" activeClassName="active"><span>Home</span></CustomLink>
          <CustomLink to="/careers" activeClassName="active"><span>Careers</span></CustomLink>
          <CustomLink to="/blogs" activeClassName="active"><span>Blogs</span></CustomLink>
        </Links>
      </FlexContainer>
    </Container>
  </Wrapper>
)

export default Footer
