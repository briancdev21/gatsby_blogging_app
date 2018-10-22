import React from 'react'

import { Layout } from '../layouts'
import { SectionContainer, PaddingDiv, PlayFairText, RobotoText, MoreButton, FlexContainer, FlexView, HorizontalLine, RectButton } from '../components';
import { icArrowBlue, EmptyLogo } from '../images';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout
        pageTitle='Careers'
        meta={[
          { name: 'description', content: 'Mottion PWA' },
          { name: 'keywords', content: 'Mottion, Gatsby, PWA' },
        ]}
      >
        <section>
          <SectionContainer column style={{ minHeight: 0 }}>
            <PaddingDiv top={10} bottom={10}>
              Back to <a href="/">Home</a>
            </PaddingDiv>
            <PaddingDiv top={10} bottom={40}>
              <PlayFairText weight="900" size={72} color="#000">
                Careers
              </PlayFairText>
            </PaddingDiv>
          </SectionContainer>
        </section>
        <section>
          <SectionContainer column>
            <PaddingDiv top={20} bottom={20}>
              <RobotoText size="24" weight="600" color="#000">
                Why we are here
              </RobotoText>
            </PaddingDiv>
            <div>
              <p>
                Food is the world’s largest industry, representing about 10% of the global GDP and employs hundreds of millions of people. One of the greatest challenges facing the world today is how to feed a growing global population, and provide them with healthy, nutritious and tasty food that is produced in a sustainable and efficient way.
              </p>
              <p>
                Agricultural products are cornerstones of the economy of the majority of the Worlds countries and the economic viability of the industry is likely the biggest driver of getting more people out of poverty globally. In addition consumers are looking for more visibility and transparency  throughout the supply chain. This is all happening while huge amounts of food goes to waste. It is estimated that about 50% of all US food produce is left rotting in the fields. Similarly, large quantities of fresh meats are being frozen or turned into cheap animal feed and excellent specialty coffees are roasted to a crisp and sold in bulk at historically low prices.
              </p>
              <p>
                Some parts of the food industry are becoming more technologically advanced, but the solutions are usually focusing on the internal operations of the companies rather than facilitating collaboration, coordination and information sharing across parties such as growers, exporters, importers, wholesalers, distributors, retailers and logistics companies.
              </p>
              <p>
                We are not building ERP systems, but rather the information fabric that can connect these systems and / or be the platform on which a new generation of ERP features can be built. Examples of such features are end-to-end tracking and tracing of foods to ensure food safety and product differentiation and new ways to trade to manage the ebbs and flow of supply and demand.
              </p>
              <p>
                Motiion is a remote-only company and we give our employees the opportunity to solve challenges in the global food industry while living and working wherever you are most comfortable. We believe in transparency, diversity, merit and fostering a culture of accountability, personal impact and career growth.
              </p>
            </div>
            <PaddingDiv bottom={60}>
              <MoreButton style={{ color: '#1e22aa', justifyContent: 'flex-start' }} href={'#'}>See opportunities <img src={icArrowBlue} alt="white arrow"/></MoreButton>
            </PaddingDiv>
          </SectionContainer>
        </section>
        <section style={{ background: '#F5F5F5' }}>
          <SectionContainer column>
            <PaddingDiv top={100} bottom={20}>
              <RobotoText size="24" weight="600" color="#000">
                Why we are different
              </RobotoText>
            </PaddingDiv>
            <PaddingDiv bottom={70}>
              Our main goals with Motiion are easy to explain: We want to build a company that we would like to enjoy spending the rest of our careers in, that has a positive impact on the world and that will outlast us. Achieving these goals will be challenging, but we know we can do it. Here’s why:
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    A strong founder team
                  </RobotoText>
                  <PaddingDiv bottom={40} top={20}>
                    Our main goals with Motiion are easy to explain: We want to build a company that we would like to enjoy spending the rest of our careers in, that has a positive impact on the world and that will outlast us. Achieving these goals will be challenging, but we know we can do it. Here’s why:
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    A strong founder team
                  </RobotoText>
                  <PaddingDiv bottom={40} top={20}>
                    Our main goals with Motiion are easy to explain: We want to build a company that we would like to enjoy spending the rest of our careers in, that has a positive impact on the world and that will outlast us. Achieving these goals will be challenging, but we know we can do it. Here’s why:
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    Self-funded
                  </RobotoText>
                  <PaddingDiv bottom={40} top={20}>
                    The founders have invested $10 million to allow us to focus on building technology and product the right way. Our eyes are on the goals of building a global technology platform. We are laser focused on customer needs, but will make product priorities based on our long-term goals, not short-term revenue.
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    Remote-only
                  </RobotoText>
                  <PaddingDiv bottom={40} top={20}>
                    <p>We believe technology that enables remote work to be better than a corporate office setting is already here and the world of business is just about to catch up. Remote work certainly comes with drawbacks, but the strongly believe the advantages vastly outnumber the disadvantages. Speaking to dozens of experienced remote employees has shown us that the number one obstacle to building a successful remote workplace is doing it half-way by having some people be co-located and some remote. We want the same mode of collaboration for everyone and will therefore have no offices at all.</p>
                    <p>This does not mean that you have to work from home all the time, or at all. Motiion will pay for co-working space if that’s what you prefer!</p>
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    Personal impact of collaborating individuals
                  </RobotoText>
                  <PaddingDiv bottom={40} top={20}>
                    We have seen first-hand how corporate culture can devolve into empire building and reporting lines. Motiion will have great managers, but we recognize and value the skills of individual contributors. You can grow your career at Motiion doing the work you love and excel at. Your merit matters, not your title.
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <PaddingDiv bottom={10} top={10}>
              <FlexContainer>
                <FlexView size={2}>
                  <img src={EmptyLogo} />
                </FlexView>
                <FlexView size={10}>
                  <RobotoText size="24" weight="600" color="#000">
                    Benefits
                  </RobotoText>
                  <PaddingDiv bottom={40} top={15}>
                    We have top notch benefits, matching most of the large US tech companies, including 401k matching, excellent health insurance and a generous vacation policy.
                  </PaddingDiv>
                </FlexView>
              </FlexContainer>
            </PaddingDiv>
            <HorizontalLine height={2} color={'#979797'} style={{ width: '100%' }} />
          </SectionContainer>
        </section>
        {/*  */}
        <section style={{ background: '#F5F5F5' }}>
          <SectionContainer column style={{ minHeight: 0 }}>
            <PaddingDiv top={100} bottom={20}>
              <RobotoText size="24" weight="600" color="#000">
                Open positions
              </RobotoText>
            </PaddingDiv>
            <PaddingDiv bottom={100}>
              <FlexContainer justifyContent="space-between">
                <RectButton>
                  <RobotoText size="24" weight="600" color="#1e22aa">
                    Product Manager
                  </RobotoText>
                </RectButton>
                <RectButton>
                  <RobotoText size="24" weight="600" color="#1e22aa">
                    Software Engineer
                  </RobotoText>
                  <RobotoText size="20" weight="400" color="#1e22aa">
                    Full-stack
                  </RobotoText>
                  <RobotoText size="20" weight="400" color="#1e22aa">
                    Back-end focused
                  </RobotoText>
                </RectButton>
                <RectButton>
                  <RobotoText size="24" weight="600" color="#1e22aa">
                    Software Engineer
                  </RobotoText>
                  <RobotoText size="20" weight="400" color="#1e22aa">
                    Full-stack
                  </RobotoText>
                  <RobotoText size="20" weight="400" color="#1e22aa">
                    Back-end focused
                  </RobotoText>
                </RectButton>
              </FlexContainer>
              <PaddingDiv bottom={35} />
              <FlexContainer>
                <RobotoText size="18" weight="400" color="#00000060">
                  Sounds interesting? Take a look at our open positions!
                </RobotoText>
              </FlexContainer>
            </PaddingDiv>
          </SectionContainer>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
