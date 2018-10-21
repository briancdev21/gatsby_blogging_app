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
    padding: 10px;
    border-bottom: none;
  }
  &.active {
    opacity: 1;

    span {
      border-bottom: solid 1px white;
    }
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
`;
