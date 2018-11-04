import React from 'react'
import { Link } from 'gatsby'

import { Wrapper, MobileFooter, Logo, Links, Container, FlexContainer, CustomLink } from './components'
import { LogoPng } from '../../images'
import { PaddingDiv } from '../../components'

const Footer = () => (
  <React.Fragment>
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
    <MobileFooter>
      <PaddingDiv top={10}>
        <Links>
          <CustomLink to="/" activeClassName="active"><span>Home</span></CustomLink>
          <CustomLink to="/careers" activeClassName="active"><span>Careers</span></CustomLink>
          <CustomLink to="/blogs" activeClassName="active"><span>Blogs</span></CustomLink>
        </Links>
      </PaddingDiv>
      <PaddingDiv top={10}>
        <Link to="/"><Logo src={LogoPng} ></Logo></Link>
      </PaddingDiv>
    </MobileFooter>
  </React.Fragment>
)

export default Footer
