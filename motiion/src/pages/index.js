import React from 'react'

import { Layout } from '../layouts'
import { FirstWeEatMain, FirstWeEatSideBg, InfoAside, InfoDetail } from '../styles';
import { Section, PaddingDiv, HorizontalLine, RoundBtn, PlayFairText, RobotoText } from '../components';

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
          <PaddingDiv top={40} bottom={40}>
            <HorizontalLine size={60} />
          </PaddingDiv>
          <PaddingDiv>
            <RoundBtn bgColor="#1e22aa" color="#fff" >Learn more</RoundBtn>
          </PaddingDiv>
        </FirstWeEatMain>
        <FirstWeEatSideBg />
      </Section>
      <Section>
        <InfoAside>
          Our technology supports the global food industry
        </InfoAside>
        <InfoDetail>
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
