import React from 'react'
import { Layout } from '../layouts'
import { SectionContainer, PaddingDiv } from '../components';

const NotFoundPage = () => (
  <Layout>
    <section style={{ height: 'calc(100vh - 160px)' }}>
      <SectionContainer>
        <PaddingDiv top={100}>
          <h1>404 - Not Found</h1>
        </PaddingDiv>
      </SectionContainer>
    </section> 
  </Layout>
)

export default NotFoundPage
