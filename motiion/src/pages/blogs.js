import React from 'react'

import { Layout } from '../layouts'
import { SectionContainer, PaddingDiv, PlayFairText, SearchBox, FlexContainer, BackBtn, PostSummary, Card } from '../components';

const loadedBlogs = [{
  title: "Mottion Collaboration Tools",
  content: "In a previous post, we discussed some of the goals we have for collaboration at Motiion. In this post we’ll dig deeper into the actual tools enabling our way of work. We’ll focus on our work. In a previous post, we discussed some of the goals we have for collaboration at Motiion. In this post we’ll dig deeper into the actual tools enabling our way of work. We’ll focus on our work.", 
 },
 {
   title: "Motiion Way of Work Goals",
   content: "Motiion is currently a small, remote-only company. We are excited about the opportunities that this brings and we want to make we get a set of tools and processes that make remote collaboration effective, enjoyable work. Motiion is currently a small, remote-only company. We are excited about the opportunities that this brings and we want to make we get a set of tools and processes that make remote collaboration effective, enjoyable work.",
 }];

const BlogsPage = () => {
  return (
    <React.Fragment>
      <Layout
        pageTitle='Blogs'
        meta={[
          { name: 'description', content: 'Mottion PWA Blogs' },
          { name: 'keywords', content: 'Mottion, Gatsby, PWA, Blogs' },
        ]}
      >
        <section>
          <SectionContainer column>
            <PaddingDiv top={20} bottom={10}>
              <BackBtn url={"/"} title={'Home'} />
            </PaddingDiv>
            <PaddingDiv top={10} bottom={40}>
              <FlexContainer justifyContent="space-between">
                <PlayFairText weight="900" size={72} color="#000">
                  Blogs
                </PlayFairText>
                <SearchBox placeholder="Search blog" />
              </FlexContainer>
            </PaddingDiv>
          </SectionContainer>
        </section>
        <section style={{ background: '#f5f5f5' }}>
          <SectionContainer>
            <PaddingDiv top={40} bottom={40}>
              <FlexContainer style={{flexWrap: 'row wrap', margin: '0 -15px' }}>
                {loadedBlogs.map((blog, index) => (
                  <Card>
                    <PostSummary key={index} blog={blog} blackTheme />
                  </Card>
                ))}
              </FlexContainer>
            </PaddingDiv>

          </SectionContainer>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default BlogsPage
