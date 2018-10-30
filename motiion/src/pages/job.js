import React from 'react'

import { Layout } from '../layouts'
import { SectionContainer, PaddingDiv, PlayFairText, RobotoText, RoundBtn, FlexContainer, FlexView, BackBtn, HorizontalLine, RectButton } from '../components';

const data = { 
  additional: `<div><b style="font-size: 24px">Why we are different</b></div><div><br></div><div>Our main goals with Motiion are easy to explain: We want to build a company that we would like to&nbsp;<i>enjoy&nbsp;</i>spending the rest of our careers in, that has a positive impact on the world and that will outlast us. Achieving these goals will be challenging, but we know we can do it. Here's why:</div><div><br></div><div><b style="font-size: 18px">A strong founder team</b></div><div>We, the founders, have a proven track record of building successful companies from scratch. We will take all of the amazing and painful experiences of the past and apply them to create a company we all will be very proud of.</div><div><br></div><div><b style="font-size: 18px">Self-funded</b></div><div>The founders have invested $10 million to allow us to focus on building technology and product the right way. Our eyes are on the goals of building a global technology platform. We are laser focused on customer needs, but will make product priorities based on our long-term goals, not short-term revenue.</div><div><br></div><div><b style="font-size: 18px">Remote-first</b></div><div>We believe technology that enables remote work to be&nbsp;<i>better</i>&nbsp;than a corporate office setting is already here and the world of business is just about to catch up. Remote work certainly comes with drawbacks, but the strongly believe the advantages vastly outnumber the disadvantages. Speaking to dozens of experienced remote employees has shown us that the number one obstacle to building a successful remote workplace is doing it half-way by having some people be co-located and some remote. We want the same mode of collaboration for&nbsp;<i>everyone</i>&nbsp;and our team will be working remotely most of the time. </div><div><br></div><div>This does not mean that you have to work from home all the time, or at all. Motiion will pay for co-working space if that's what you prefer. We will also encourage team members that live in the same area to meet up and work together when it makes sense. We will also make sure we all meet regularly for real in-person interaction!</div><div><br></div><div><b style="font-size: 18px">Personal impact of collaborating individuals</b></div><div>We have seen first-hand how corporate culture can devolve into empire building and reporting lines. Motiion will have great managers, but we recognize and value the skills of individual contributors. You can grow your career at Motiion doing the work you love and excel at. Your merit matters, not your title.</div><div><br></div><div><b style="font-size: 18px">Benefits</b></div><div>We have top notch benefits, matching most of the large US tech companies, including 401k matching, excellent health insurance and a generous vacation policy.</div><div><br></div>`,
  applyUrl: `https://jobs.lever.co/motiion/e0eee12e-dabe-454a-9b80-e1d457da01db/apply`,
  categories: { commitment: "Full-time", location: "Remote [US Only]", team: "Product and Engineering" },
  createdAt: 1538501404317,
  description: `<div>Motiion is a remote-only company and we give our employees the opportunity to solve challenges in the global food industry while living and working wherever you are most comfortable. We believe in transparency, diversity, merit and fostering a culture of accountability, personal impact and career growth.</div><div><br></div><div>As a member of the first product team at Motiion you have will have unique opportunity to take products from concept to production as we build towards our goal of becoming the global technology platform for the food industry. You will work closely with the co-founder team and be part of not just defining and implementing our technology and product strategy, but also the way we work together as we scale our company.</div><div><br></div><div>We do not have any particular seniority requirements for this role, as long as you have shipped great products - from scratch. You drove the product design and implementation process of a significant product (or feature set) from inception to launch. You're proud of what you brought to the market, but you might also be humbled by the experience and know you will do even better next time. </div><div><br></div><div>Demonstrated ability to design and ship great product(s) is a requirement, but management experience is not. We know that great products are built by collaborative individuals, not by managers. We also know that many amazing PMs can be excellent people managers, but that's often not what they prefer. Motiion values individual contribution and strongly believe it's the key to Motiion's success. </div>`,
  hostedUrl: "https://jobs.lever.co/motiion/e0eee12e-dabe-454a-9b80-e1d457da01db",
  id: "e0eee12e-dabe-454a-9b80-e1d457da01db",
  lists: [
    {
      content: "<li><b>An eye for simplicity in design.</b> You enjoy making complicated things simpler and cutting what’s not important and polishing what is.</li><li><b>Enjoys working with customers and developers alike - Product Management and Product Ownership. </b>You thrive on chatting with customers, identifying what’s important and then find the best ways to build it with your development teammates. You to understand technology well enough to have productive conversations with developers.</li><li><b>Strong sense of aesthetics and user experience.</b> You know what users love and only compromise when there’s a very good reason for it.</li><li><b>A disciplined approach to the Product Development process. </b>Intellect and talent is important, but so is having the good old “tools in the toolbox”. You know the process well and can facilitate all of the steps required to launch new product and iterate on existing ones.</li><li><b>Performance recognized by your peers.</b> Past colleagues would love to work with you again.</li><li><b>Starter and finisher.</b> You often identify a problem, design a solution and bring it to a state of completion - alone or with collaborators.&nbsp;</li><li><b>Work hard and smart.</b> Your work ethic is unquestioned, and you know how to get things done so you can balance your work and personal life in a sustainable way.</li><li><b>Disciplined and reliable.</b> We are a remote company and you enjoy the benefits of working remotely while consistently delivering what you have committed to. When you hit a snag, you communicate and reset expectations early.</li><li><b>Collaborative.</b> You know that your team members’ perspectives will make your solutions better. Similarly, you use your strengths to make the team perform.</li><li><b>Appreciation of honest feedback.</b> You know that the best way to learn and grow is through constructive feedback delivered kindly, but without unnecessary ambiguity. You feedback given to as an opportunity to get better and strive to do the same for others.</li><li><b>Analytical and practical mind.</b> You strive for simple, precise solutions to complex problems. Complex solutions are only acceptable when absolutely needed.</li>",
      text: "Some signs of a great candidate",
    }
  ],
  text: "Product Manager"
}

const JobPage = () => {
  const { text: title, categories, applyUrl, description, lists } = data;
  const isMobile = window.innerWidth < 600;
  return (
    <React.Fragment>
      <Layout
        pageTitle='Jobs'
        meta={[
          { name: 'description', content: 'Mottion PWA' },
          { name: 'keywords', content: 'Mottion, Jobs, PWA' },
        ]}
      >
        <section>
          <SectionContainer column>
            <PaddingDiv top={20} bottom={20}>
              <BackBtn url={"/careers"} title={'Careers'} />
            </PaddingDiv>
            <PaddingDiv top={0} bottom={40}>
              <PlayFairText weight="900" size={60} color="#000">
                {title}
              </PlayFairText>
            </PaddingDiv>
            <PaddingDiv top={0} bottom={isMobile ? 60 : 30}>
              <FlexContainer style={{ padding: 0 }}>
                <FlexView size={1}>
                  <ul>
                    <li><RobotoText size={18} weight={500} >{categories.location || ''}</RobotoText></li>
                    <li><RobotoText size={18} weight={500} >{categories.team || ''}</RobotoText></li>
                    <li><RobotoText size={18} weight={500} >{categories.commitment || ''}</RobotoText></li>
                  </ul>
                </FlexView>
                <div style={{ width: isMobile ? '100%' : 'auto'}}>
                  <RoundBtn link={applyUrl} target="_blank" rel="noopener noreferrer" size={20} bgColor="#1e22aa" color="#fff" style={{ paddingRight: '1.5em', paddingLeft: '1.5em', width: isMobile ? '100%' : 'auto' }} >
                    Apply for this job
                  </RoundBtn>
                </div>
              </FlexContainer>
            </PaddingDiv>
          </SectionContainer>
        </section>
        <section style={{ backgroundColor: '#f5f5f5' }}>
          <SectionContainer column>
            <PaddingDiv top={40} bottom={20}>
              <RobotoText size="24" weight="600" color="#000">
                About the company
              </RobotoText>
            </PaddingDiv>
            <PaddingDiv bottom={30}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </PaddingDiv>
          </SectionContainer>
        </section>
        {lists.map((list, index) => (
          <section style={{ backgroundColor: '#f5f5f5' }} key={index}>
            <SectionContainer column>
              <PaddingDiv top={40} bottom={20}>
                <RobotoText size="24" weight="600" color="#000">
                  {list.text}
                </RobotoText>
              </PaddingDiv>
              <PaddingDiv bottom={30}>
                <div className="featurelist" dangerouslySetInnerHTML={{ __html: list.content }} />
              </PaddingDiv>
            </SectionContainer>
          </section>
        ))}
        <section style={{ backgroundColor: '#f5f5f5' }}>
          <SectionContainer style={{ justifyContent: 'center' }}>
            <PaddingDiv top={isMobile ? 0 : 50} bottom={isMobile ? 50 :80} style={{ width: isMobile ? '100%' : 'auto' }}>
              <FlexContainer>
                <RoundBtn size={20} link={applyUrl} bgColor="#1e22aa" color="#fff" style={{ paddingRight: '1.5em', paddingLeft: '1.5em', width: isMobile ? '100%' : 'auto' }} >
                  Apply for this job
                </RoundBtn>
              </FlexContainer>
            </PaddingDiv>
          </SectionContainer>
        </section>
        <section  style={{ backgroundColor: '#f5f5f5' }}>
          <SectionContainer column>
            <HorizontalLine height={2} color={'#979797'} style={{ width: '100%' }} />
            <PaddingDiv top={70} bottom={30}>
              <RobotoText size="24" weight="600" color="#000">
                Related jobs
              </RobotoText>
            </PaddingDiv>
            <PaddingDiv bottom={100}>
              <FlexContainer justifyContent={isMobile ? "center" : "flex-start"} style={{ margin: '0 -15px' }}>
                <RectButton>
                  <RobotoText size="24" weight="500" color="#1e22aa">
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
                  <RobotoText size="24" weight="500" color="#1e22aa">
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
            </PaddingDiv>
          </SectionContainer>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default JobPage
