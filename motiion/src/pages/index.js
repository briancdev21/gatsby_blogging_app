import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'

import { Layout } from '../layouts'
import { FirstWeEatMain, FirstWeEatSideBg, InfoDetail } from '../styles';
import { SectionContainer, PaddingDiv, HorizontalLine, RoundBtn, PlayFairText, RobotoText, InfoAside, BlogSide, MoreButton, PostSummary } from '../components';
import { icArrowWhite } from '../images';

const IndexPage = () => {
  const blogs = [{
   title: "Mottion Collaboration Tools",
   content: "In a previous post, we discussed some of the goals we have for collaboration at Motiion. In this post we’ll dig deeper into the actual tools enabling our way of work. We’ll focus on our work. In a previous post, we discussed some of the goals we have for collaboration at Motiion. In this post we’ll dig deeper into the actual tools enabling our way of work. We’ll focus on our work.", 
  },
  {
    title: "Motiion Way of Work Goals",
    content: "Motiion is currently a small, remote-only company. We are excited about the opportunities that this brings and we want to make we get a set of tools and processes that make remote collaboration effective, enjoyable work. Motiion is currently a small, remote-only company. We are excited about the opportunities that this brings and we want to make we get a set of tools and processes that make remote collaboration effective, enjoyable work.",
  }];
  return (
    <React.Fragment>
      <Layout
        pageTitle='Home'
        meta={[
          { name: 'description', content: 'Mottion PWA' },
          { name: 'keywords', content: 'Mottion, Gatsby, PWA' },
        ]}
      >
        <section>
          <SectionContainer alignItems="center">
            <FirstWeEatMain>
              <PaddingDiv>
                <PlayFairText size="72" weight="900" >First we eat</PlayFairText>
                <RobotoText size="44" weight="600" >Then we do everything else</RobotoText>
              </PaddingDiv>
              <PaddingDiv top={35} bottom={35}>
                <HorizontalLine size={60} height={3} />
              </PaddingDiv>
              <PaddingDiv>
                <RoundBtn size={20} bgColor="#1e22aa" color="#fff" >Learn more</RoundBtn>
              </PaddingDiv>
            </FirstWeEatMain>
            <FirstWeEatSideBg />
          </SectionContainer>
        </section>
        <section style={{ background: '#f5f5f5' }}>
          <SectionContainer>
            <InfoAside width={320} >
              <PlayFairText size="48" weight="900" color="#fff">
                Our technology supports the global food industry
              </PlayFairText>
              <HorizontalLine size={60} color="#fff" height={4} />
            </InfoAside>
            <InfoDetail>
              <HorizontalLine size={6000} color="#1e22aa" height={2} />
              <p>
                We’ re a global technology team developing solutions to support the global food industry.The Motiion Platform supports information flows within and across companies in the food value chain, enabling players in the industry to focus on their own specific tools and systems.
              </p>
              <p>
                We believe modern software technology and open, transparent information will foster trust, reduce waste, improve profitability
                for everyone and, ultimately, feed the world.
              </p>
              <p>
                Motiion is a remote - only company and we give our employees the opportunity to solve challenges in the global food industry
                while living and working wherever you are most comfortable.We believe in transparency, diversity, merit and fostering a culture of accountability, personal impact and career growth.
              </p>
              <p>
                <b>Join us!</b>
              </p>
            </InfoDetail>
          </SectionContainer>
        </section>
        {/* 'What are we up to' Blog Section */}
        <section style={{ background: '#111', height: 810, position: 'relative' }}>
          <SectionContainer style={{ textAlign: 'center', display: 'block'}}>
            <PaddingDiv top={95} bottom={20}>
              <PlayFairText size="60" weight="900" color="#fff">
                What are we up to?
              </PlayFairText>
              <PaddingDiv top={20} bottom={20}>
                <MoreButton >More blogs <img src={icArrowWhite} alt="white arrow"/></MoreButton>
              </PaddingDiv>
              <PaddingDiv top={40}>
                <div style={{display: 'flex', flexWrap: 'row wrap'}}>
                  {blogs.map((blog, index) => (
                    <PostSummary key={index}>
                      <PaddingDiv bottom={20}>
                        <RoundBtn
                          style={{
                            borderRadius: 12, border: 'solid 1px #fff', padding: '8px 25px'
                          }}
                          size={10}
                          bgColor="transparent"
                          color="#fff"
                        >
                          WAY OF WORK
                        </RoundBtn>
                      </PaddingDiv>
                      <RobotoText color="#fff" size="24" weight="600"> {blog.title}
                      </RobotoText>
                      <PaddingDiv top={30} bottom={30}>
                        <HorizontalLine size={60} color="#fff" height={3} />
                      </PaddingDiv>
                      <PaddingDiv
                        bottom={45}
                        style={{
                          minHeight: 100,
                        }}
                      >
                        <RobotoText color="#fff" size="16" weight="300">
                          <LinesEllipsis
                            text={blog.content}
                            maxLine={4}
                            ellipsis='...'
                            trimRight
                            basedOn='words'
                          />
                        </RobotoText>
                      </PaddingDiv>
                      <PaddingDiv>
                        <RoundBtn size={16} bgColor="#fff" color="#1e22aa" >Read more</RoundBtn>
                      </PaddingDiv>
                    </PostSummary>
                  ))}
                </div>
              </PaddingDiv>
            </PaddingDiv>
          </SectionContainer>
          <BlogSide />
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
