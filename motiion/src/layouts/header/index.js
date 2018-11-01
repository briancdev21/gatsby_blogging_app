import React, { Component } from 'react'
import { Link } from 'gatsby'

import {
  HamburgerIcon,
  MobileWrapper,
  CloseLink,
  MobileMenuPanel,
  MobileContainer,
  HeaderWrapper,
  Logo,
  Links,
  Container,
  FlexContainer,
  Icon,
  CustomLink,
  PaddingDiv
} from './components'
import { icMenu, icClose, LogoPng, FacebookWhite, TwitterWhite, LinkedinWhite } from '../../images'

class Header extends Component {
  state = {
    showMobilePanel: false,
  }

  showMobilePanel = status => {
    this.setState({ showMobilePanel: status })
  }

  render () {
    const { showMobilePanel } = this.state
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Container>
            <Link to="/"><Logo src={LogoPng} ></Logo></Link>
            <FlexContainer>
              <Links>
                <CustomLink to="/" activeClassName="active"><span>Home</span></CustomLink>
                <CustomLink to="/careers" activeClassName="active"><span>Careers</span></CustomLink>
                <CustomLink to="/blogs" activeClassName="active"><span>Blogs</span></CustomLink>
              </Links>
              <Links>
                <Icon src={FacebookWhite} ></Icon>
                <Icon src={TwitterWhite} ></Icon>
                <Icon src={LinkedinWhite} ></Icon>
              </Links>
            </FlexContainer>
          </Container>
        </HeaderWrapper>
        <MobileContainer>
          <HamburgerIcon src={icMenu} alt="menu" onClick={() => this.showMobilePanel(true)} />
          <FlexContainer style={{ justifyContent: 'center' }}>
            <Link to="/"><Logo src={LogoPng} ></Logo></Link>
          </FlexContainer>
        </MobileContainer>
        {showMobilePanel && (
          <MobileWrapper>
            <MobileMenuPanel>
              <CloseLink src={icClose} onClick={() => this.showMobilePanel(false)} />
              <PaddingDiv top={35} bottom={25}>
                <CustomLink to="/" activeClassName="active"><span>Home</span></CustomLink>
              </PaddingDiv>
              <PaddingDiv top={35} bottom={25}>
                <CustomLink to="/careers" activeClassName="active"><span>Careers</span></CustomLink>
              </PaddingDiv>
              <PaddingDiv top={35} bottom={25}>
                <CustomLink to="/blogs" activeClassName="active"><span>Blogs</span></CustomLink>
              </PaddingDiv>

              <PaddingDiv top={50} bottom={15} style={{ margin: '0 5px' }}>
                <Links>
                  <Icon src={FacebookWhite} ></Icon>
                  <Icon src={TwitterWhite} ></Icon>
                  <Icon src={LinkedinWhite} ></Icon>
                </Links>
              </PaddingDiv>

            </MobileMenuPanel>
          </MobileWrapper>
        )}
      </React.Fragment>
    )
  }
}

export default Header
