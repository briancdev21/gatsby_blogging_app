import styled from 'styled-components';
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import { PaddingDiv, HorizontalLine, RoundBtn,  RobotoText } from '../components';

const PostSummary = ({ blog, style, blackTheme }) => {
  const { title, content, sys } = blog;
  const bgColor = blackTheme ? '#000' : '#fff';
  const btnColor = blackTheme ? '#fff' : '#1e22aa';
  const btnBgColor =  blackTheme ? '#1e22aa' : '#fff';

  return (
    <Container style={style}>
      <PaddingDiv bottom={20}>
        <RoundBtn
          style={{
            borderRadius: 18,
            border: `solid 1px #979797`,
            padding: '8px 20px',
            fontWeight: 900
          }}
          size={12}
          bgColor="transparent"
          color={bgColor}
        >
          WAY OF WORK
        </RoundBtn>
      </PaddingDiv>
      <RobotoText color={bgColor} size="24" weight="600"> {title}
      </RobotoText>
      <PaddingDiv top={10} bottom={20}>
        <HorizontalLine size={60} color={bgColor} height={3} />
      </PaddingDiv>
      <PaddingDiv
        bottom={35}
        style={{
          minHeight: 100,
          opacity: 0.8,
        }}
      >
        <RobotoText color={bgColor} size="16" weight="300">
          <LinesEllipsis
            text={content}
            maxLine={4}
            ellipsis='...'
            trimRight
            basedOn='words'
          />
        </RobotoText>
      </PaddingDiv>
      <PaddingDiv>
        <RoundBtn size={16} bgColor={btnBgColor} color={btnColor} >Read more</RoundBtn>
      </PaddingDiv>
    </Container>
  )
}

const Container = styled.article`
  text-align: left;

  &:nth-child(even) {
    padding-left: 15px;
  }
  &:nth-child(odd) {
    padding-right: 15px;
  }
`;

export default PostSummary;
