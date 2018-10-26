import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  max-width: calc(50% - 30px);
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;;
  flex-direction: column;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0px 0px 3px 0px rgba(0,0,0,0.24);
  border-radius: 6px;
  text-decoration: none;
  margin: 15px;
  padding: 30px;

  &:hover {
    box-shadow: 0 4px 28px 14px rgba(0,0,0,0.12), 0px 1px 12px 1px rgba(0,0,0,0.24);
  }
`;

export default Card;
