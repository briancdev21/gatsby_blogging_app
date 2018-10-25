import React, { Component } from 'react'

import { Layout } from '../layouts'
import { FirstWeEatMain, FirstWeEatSideBg, InfoDetail } from '../styles';
import { SectionContainer, PaddingDiv, HorizontalLine, RoundBtn, PlayFairText, RobotoText, InfoAside, BlogSide, MoreButton, PostSummary, FloatContactSection, FlexContainer, FlexView, SubscribeEmail, Profile } from '../components';
import { icArrowWhite, ProfilePhotoAre, ProfilePhotoDag, ProfilePhotoMaren } from '../images';
import * as config from '../config'
import { getClient } from '../services/ContentfulClient'

class IndexPage extends Component {
  state = {
    blogs: [],
    skip: 0,
  }

  componentDidMount() {
    this.loadEntries();
  }

  loadEntries = async () => {
    const { skip, blogs } = this.state;
    const { space, accessToken } = config.contentful;
    const client = getClient(space, accessToken);
    const entriesResponse = await client.getEntries({
      content_type: 'blogPost',
      skip: skip,
      limit: 2,
      order: 'sys.createdAt'
    });
    const newBlogs = entriesResponse.items;
    this.setState({ blogs: blogs.concat(newBlogs), skip: skip + 2 });
  }

  render() {
    const { blogs } = this.state;
    const isMobile = window.innerWidth < 600;
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
            <SectionContainer alignItems="center" style={{ minHeight: isMobile ? 520 : 660 }} >
              <FirstWeEatMain>
                <PaddingDiv>
                  <PlayFairText size="72" weight="900" >First we eat</PlayFairText>
                  <RobotoText size="44" weight="600" >Then we do everything else</RobotoText>
                </PaddingDiv>
                <PaddingDiv top={35} bottom={35}>
                  <HorizontalLine size={60} height={3} />
                </PaddingDiv>
                <PaddingDiv>
                  <RoundBtn size={20} bgColor="#1e22aa" color="#fff" link="/careers">Learn more</RoundBtn>
                </PaddingDiv>
              </FirstWeEatMain>
              <FirstWeEatSideBg />
            </SectionContainer>
          </section>
          {/* 'Our Technologies ...' Section */}
          <section style={{ background: '#f5f5f5', overflow: 'hidden' }}>
            <SectionContainer>
              <InfoAside width={isMobile ? '100%' : 320}>
                <PlayFairText size="48" weight="900" color="#fff">
                  Our technology supports the global food industry
                </PlayFairText>
                <HorizontalLine size={60} color="#fff" height={4} style={{ display: isMobile ? 'none' : 'block'}} />
              </InfoAside>
              <InfoDetail>
                <HorizontalLine size={6000} color="#1e22aa" height={2} style={{ display: isMobile ? 'none' : 'block'}} />
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
          <section style={{ background: '#111', height: isMobile ? 'auto' : 810, position: 'relative' }}>
            <SectionContainer style={{ textAlign: 'center', display: 'block'}}>
              <PaddingDiv top={80} bottom={20}>
                <PlayFairText size={isMobile ? 40 : 60} weight="900" color="#fff">
                  {!isMobile && (
                    <PaddingDiv left={10} right={10}>
                      What are we up to?
                    </PaddingDiv>
                  )}              
                  {isMobile && (
                    <PaddingDiv left={50} right={50}>
                      What are we up to?
                    </PaddingDiv>
                  )}
                </PlayFairText>
                <PaddingDiv top={20} bottom={20}>
                  <MoreButton href={"/blogs"}>More blogs <img src={icArrowWhite} alt="white arrow"/></MoreButton>
                </PaddingDiv>
                <PaddingDiv top={40}>
                  <div style={{display: 'flex', flexFlow: 'row wrap', margin: isMobile ? 0 : '0 -15px' }}>
                    {blogs.map((blog, index) => (
                      <FlexView key={index} size={1} style={{ margin: 15 }}>
                        <PostSummary blog={blog} />
                      </FlexView>
                    ))}
                  </div>
                </PaddingDiv>
              </PaddingDiv>
            </SectionContainer>
            <BlogSide isMobile={isMobile} />
          </section>
          <PaddingDiv top={30} bottom={30} />
        </Layout>
      </React.Fragment>
    )
  }
}

export default IndexPage
