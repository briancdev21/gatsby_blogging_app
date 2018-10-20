import styled from 'styled-components';

const PostSummary = styled.article`
  text-align: left;
  width: 50%; 
  &:nth-child(even) {
    padding-left: 15px;
  }
  &:nth-child(odd) {
    padding-right: 15px;
  }
`;

export default PostSummary;
