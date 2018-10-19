import React from 'react'
import { Link } from 'gatsby'

import { HeaderWrapper, Logo, Links, Container, FlexContainer, Icon, CustomLink } from './components'
import { LogoPng, FacebookWhite, TwitterWhite, LinkedinWhite } from '../../images'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <Link to="/"><Logo src={LogoPng} ></Logo></Link>
      <FlexContainer>
        <Links>
          <CustomLink to="/" activeClassName="active" exact ><span>Home</span></CustomLink>
          <CustomLink to="/careers" activeClassName="active" exact ><span>Careers</span></CustomLink>
          <CustomLink to="/blogs" activeClassName="active" exact ><span>Blogs</span></CustomLink>
        </Links>
        <Links>
          <Icon src={FacebookWhite} ></Icon>
          <Icon src={TwitterWhite} ></Icon>
          <Icon src={LinkedinWhite} ></Icon>
        </Links>
      </FlexContainer>
    </Container>
  </HeaderWrapper>
)

export default Header
