import React from 'react'

import { Layout } from '../layouts'
import { FirstWeEatMain, FirstWeEatSideBg, InfoDetail } from '../styles';
import { Section, PaddingDiv, HorizontalLine, RoundBtn, PlayFairText, RobotoText, InfoAside } from '../components';

const IndexPage = () => (
  <React.Fragment>
    <Layout
      pageTitle='Home'
      meta={[
        { name: 'description', content: 'Mottion PWA' },
        { name: 'keywords', content: 'Mottion, Gatsby, PWA' },
      ]}
    >
      <Section>
        <FirstWeEatMain>
          <PaddingDiv>
            <PlayFairText size="72" weight="900" >First we eat</PlayFairText>
            <RobotoText size="44" weight="600" >Then we do everything else</RobotoText>
          </PaddingDiv>
          <PaddingDiv top={35} bottom={35}>
            <HorizontalLine size={60} height={3} />
          </PaddingDiv>
          <PaddingDiv>
            <RoundBtn bgColor="#1e22aa" color="#fff" >Learn more</RoundBtn>
          </PaddingDiv>
        </FirstWeEatMain>
        <FirstWeEatSideBg />
      </Section>
      <Section style={{ background: '#f5f5f5' }}>
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
      </Section>
    </Layout>
  </React.Fragment>
)

export default IndexPage
