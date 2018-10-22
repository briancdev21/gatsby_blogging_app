import React from 'react'

import { Layout } from '../layouts'
import { SectionContainer, PaddingDiv, PlayFairText, RobotoText, MoreButton } from '../components';
import { icArrowBlue } from '../images';

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
              Back to <a href="">Home</a>
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
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
