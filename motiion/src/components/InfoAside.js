import React from 'react'
import styled from 'styled-components'

const InfoAside = ({ children, width }) => {
  return (
    <div style={{width: width}}>
      <Main>
        {children}
      </Main>
      <SideBg />
    </div>
  )
}

export default InfoAside;

const Main = styled.div`
  text-align: right;
  padding: 70px 32px;
  width: 320px;
  height: 660px;
  background: #000;
	color: #FFFFFF;
	letter-spacing: 0.84px;
	line-height: 60px;
  text-align: right;
`;

const SideBg = styled.div`
  position: absolute;
  top: 500px;
  left: -12px;
  width: 300px;
  height: 200px;
  background: #d8d8d8;
`;
