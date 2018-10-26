import styled from 'styled-components';
import { Link } from 'gatsby'

export const CustomLink = styled(Link)`
	opacity: 0.6;
	color: #FFFFFF;
	font-size: 20px;
	letter-spacing: 0.67px;
  line-height: 24px;
  font-weight: 300;
  text-decoration: none;

  & span {
    padding: 10px 5px;
    margin: 0 10px;
    border-bottom: none;
  }
  &.active {
    opacity: 1;

    span {
      border-bottom: solid 1px white;
    }
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  background-color: #1E22AA;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(2, 2, 2, 0.7);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 960px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 30px;
  padding-right: 30px;
  margin: 0;
  margin-top: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 5px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    margin: 10px;
    cursor: pointer;
  }
`;

export const MobileContainer = styled.header`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    height: 60px;
    width: 100vw;
    justify-content: flex-start;
    align-items: center;
    background-color: #1E22AA;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 3px 10px rgba(2, 2, 2, 0.7);
  }
`
export const HamburgerIcon = styled.img`
  height: 25px;
  width: 33px;
  margin: 0 -20px 0px 20px;
  cursor: pointer;
`
export const MobileMenuPanel = styled.div`
  width: 100vw;
  text-align: left;
  padding: 30px;
  background-color: #1E22AA;
`

export const CloseLink = styled.img`
  position: fixed;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin: 0;
`

export const MobileWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background-color: #1e22aa42;
`
