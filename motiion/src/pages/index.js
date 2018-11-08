import React, { Component } from 'react'

import { Layout } from '../layouts'
import { FirstWeEatMain, FirstWeEatSideBg, InfoDetail } from '../styles'
import {
  SectionContainer,
  PaddingDiv,
  HorizontalLine,
  RoundBtn,
  PlayFairText,
  RobotoText,
  InfoAside,
  BlogSide,
  MoreButton,
  PostSummary,
  FloatContactSection,
  FlexContainer,
  FlexView,
  SubscribeEmail,
  Profile
} from '../components'
import {
  icArrowWhite,
  ProfilePhotoAre,
  ProfilePhotoDag,
  ProfilePhotoMaren,
  homeIllustration
} from '../images'
import * as config from '../config'
import { getClient } from '../services/ContentfulClient'

class IndexPage extends Component {
  state = {
    blogs: [],
    skip: 0,
  }

  componentDidMount () {
    this.loadEntries()
  }

  loadEntries = async () => {
    const { skip, blogs } = this.state
    const { space, accessToken } = config.contentful
    const client = getClient(space, accessToken)
    const entriesResponse = await client.getEntries({
      content_type: 'blogPost',
      skip: skip,
      limit: 2,
      order: 'sys.createdAt'
    })
    const newBlogs = entriesResponse.items
    this.setState({ blogs: blogs.concat(newBlogs), skip: skip + 2 })
  }
  /* eslint-disable max-len */
  render () {
    const { blogs } = this.state
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
            <SectionContainer
              classes={'home-FirstWeEat'}
              alignItems="center"
            >
              <FirstWeEatMain>
                <PaddingDiv>
                  <PlayFairText size="72" weight="900" >First we eat</PlayFairText>
                  <RobotoText size="44" weight="600" >Then we do everything else</RobotoText>
                </PaddingDiv>
                <PaddingDiv top={35} bottom={35}>
                  <HorizontalLine size={60} height={3} />
                </PaddingDiv>
                <PaddingDiv>
                  <RoundBtn
                    size={20}
                    bgcolor="#013ebf"
                    color="#fff"
                    link="/careers/"
                  >
                    Learn more
                  </RoundBtn>
                </PaddingDiv>
              </FirstWeEatMain>
              <FirstWeEatSideBg>
                <img src={homeIllustration} alt="home illustration" />
              </FirstWeEatSideBg>
            </SectionContainer>
          </section>
          {/* 'Our Technologies ...' Section */}
          <section style={{ background: '#f5f5f5', overflow: 'hidden' }}>
            <SectionContainer style={{ padding: 0 }} classes={'fluid'}>
              <InfoAside>
                <PlayFairText className="title" size="48" weight="900" color="#fff">
                  Our technology supports the global food industry
                </PlayFairText>
                <HorizontalLine
                  className={'home-our_tech'}
                  size={60}
                  color="#fff"
                  height={4}
                />
              </InfoAside>
              <InfoDetail>
                <HorizontalLine
                  size={6000}
                  className={'home-InfoDetail'}
                  color="#1e22aa"
                  height={2}
                />
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
          <section
            style={{ background: '#111', position: 'relative' }}
          >
            <SectionContainer classes={'home-blogs'} style={{ textAlign: 'center', display: 'block' }}>
              <PaddingDiv top={80} bottom={20}>
                <PlayFairText
                  mobileSize={40}
                  size={60}
                  weight="900"
                  color="#fff"
                >
                  <PaddingDiv className="section-title">
                    What are we up to?
                  </PaddingDiv>
                </PlayFairText>
                <PaddingDiv top={20} bottom={20}>
                  <MoreButton to={'/blogs/'}>More blogs <img src={icArrowWhite} alt="white arrow"/></MoreButton>
                </PaddingDiv>
                <PaddingDiv top={40}>
                  <div className="blogs" style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    {blogs.map((blog, index) => (
                      <FlexView key={index} size={1} style={{ margin: 15 }}>
                        <PostSummary blog={blog} />
                      </FlexView>
                    ))}
                  </div>
                </PaddingDiv>
              </PaddingDiv>
            </SectionContainer>
            <BlogSide />
          </section>
          {/* Contact Section */}
          <section style={{ position: 'relative' }}>
            <FloatContactSection>
              <div className="side">
                <HorizontalLine size={60} color="#fff" height={1} />
                <HorizontalLine size={60} color="#fff" height={1} />
                <HorizontalLine size={60} color="#fff" height={1} />
              </div>
              <SectionContainer classes={'home-FloatContact'}>
                <FlexView size={5} className="left">
                  <FlexContainer
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <PlayFairText mobileSize={50} size={36} color="#fff" weight={900}>
                      Stay in touch?
                    </PlayFairText>
                    <PaddingDiv top={5} botom={5}>
                      <RobotoText mobileSize={25} size={20} color="#fff" weight={300}>
                        Sign up for updates from Motiion
                      </RobotoText>
                    </PaddingDiv>
                  </FlexContainer>
                </FlexView>
                <FlexView size={7} className="right">
                  <FlexContainer>
                    <SubscribeEmail />
                  </FlexContainer>
                </FlexView>
              </SectionContainer>
              <div className="side" />
            </FloatContactSection>
          </section>

          {/* Personal Info Section */}
          <section className="home-PersonalInfo">
            <div className="title_sec">
              <FlexContainer>
                <HorizontalLine
                  className={'home-PersonalInfo'}
                  color={'#1e22aa'}
                  height={1}
                  style={{ flex: 1 }}
                />
                <div style={{ textAlign: 'center', width: '80%' }}>
                  <PlayFairText mobileSize={45} size={60} weight={900} color={'#000'}>
                    We have built large scale technology companies
                  </PlayFairText>
                </div>
                <HorizontalLine color={'#1e22aa'} height={1} style={{ flex: 1 }}/>
              </FlexContainer>
            </div>
            <SectionContainer style={{ flexDirection: 'column' }} classes={'home-profileSec'}>
              <Profile
                title="Are Traasdahl"
                userRole="FOUNDER / CEO"
                profileLink={ProfilePhotoAre}
                content={'<p>Are has more than 20 years’ experience in mobile and digital content. He was the Founder & CEO of Tapad Inc. In 2016, Telenor Group acquired Tapad for $360M, making it the fifth largest venture-backed M&A exit in New York since 2009.</p><p>Traasdahl is a frequent contributor for outlets such as CNBC and Bloomberg News, and he has been featured in Forbes, the Wall Street Journal, Ad Age and other major news outlets. He was named Global Startup Awards’ Founder of the Year in 2016 and EY Entrepreneur of the Year in 2014. Prior to Tapad, he founded Thumbplay, a mobile entertainment service that he grew to more than $100MM in revenues in less than 3 years before he exited the company (the company, later acquired by Clear Channel, is now called iHeartRadio).</p>'
                }
              />
              <Profile
                title="Dag Liodden"
                userRole="FOUNDER / TECHNOLOGY"
                profileLink={ProfilePhotoDag}
                content="Dag is a technologist and entrepreneur. He co-founded Tapad Inc in 2010 and served as its Chief Technology Officer through 2017. Working in startups from the ground up in most of his career, he has built systems ranging from mobile applications, logistics systems and payment processing solutions to high throughput trading systems leveraging the bleeding edge of machine learning. Liodden is passionate about technology and loves building teams that build great products."
              />
              <Profile
                title="Maren Flasnes"
                userRole="PRODUCT"
                profileLink={ProfilePhotoMaren}
                content="Maren worked for Boston Consulting Group for almost 5 years, as a Management Consultant and Project Leader. During this time, she worked with Strategy, Digitalization & Advanced analytics, and operational improvement for leading Nordic and international Corporations, primarily within Media, Technology & Telecom and the Financial Industry. She started her career as a journalist and game reviewer in the Norwegian daypress in parallel with her university studies. Maren holds an MSc in Industrial Economics and Technology Management from the Norwegian University of Science and Technology (NTNU) and the University of Edinburgh with a major in operations research."
              />
            </SectionContainer>
          </section>
        </Layout>
      </React.Fragment>
    )
  }
}

export default IndexPage
