import styled from 'styled-components'

const FloatContactSection = styled.div`
  position: absolute;
  top: -110px;
  width: 1280px;
  left: calc(50vw - 1280px / 2);
  height: 220px;
  background: #1168DB;
  border-radius: 5px;
  display: flex;
  box-shadow: 0 15px 100px rgba(2, 2, 2, 0.8);

  & .side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    & div {
      margin: 8px;
    }
  }

  @media (max-width: 1350px) and (min-width: 780px) {
    position: static;
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100%;
    padding: 0 10px;

    & .side {
      display: none;
    }
  }

  @media (max-width: 780px) {
    position: static;
    top: 0;
    left: 0;
    border-radius: 0;
    height: auto;
    width: 100%;
    flex-flow: column;

    & .side {
      display: none;
    }
  }
`

export default FloatContactSection
