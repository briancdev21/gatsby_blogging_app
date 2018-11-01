import React from 'react'

import { Layout } from '../../layouts'
import { SectionContainer, PaddingDiv, PlayFairText, RobotoText, RoundBtn, FlexContainer, FlexView, BackBtn, HorizontalLine, RectButton } from '../../components';

class JobPage extends React.Component {
  state = {
    data: {
      additional: '',
      applyUrl: '',
      categories: { commitment: '', location: '', team: '' },
      createdAt: 1538501404317,
      description: '',
      hostedUrl: '',
      id: '',
      lists: [
        {
          content: '',
          text: '',
        }
      ],
      text: '',
    },
    relatedJobs: [],
  }

  componentDidMount() {
    this.mounted = true;
    this.loadJobDetail();
    this.loadRelatedJobs();
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  loadJobDetail = () => {
    const { pathname } = this.props;
    const n = pathname.lastIndexOf('/');
    const id = pathname.substring(n + 1);
    const cmp = this;
    const oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function() {
      if (oReq.readyState == XMLHttpRequest.DONE) {
        cmp.loadData(oReq.responseText);
      }
    }
    oReq.open("GET", `https://api.lever.co/v0/postings/motiion/${id}?mode=json`);
    oReq.send();
  }

  loadRelatedJobs = () => {
    fetch('https://api.lever.co/v0/postings/motiion?skip=0&limit=3&mode=json')
    .then(results=>{
      return results.json();
    })
    .then(data => {
      if (this.mounted) {
        this.setState({ relatedJobs: data })
      }
    })
  }

  loadData = (data) => {
    if (this.mounted) {
      this.setState({ data: JSON.parse(data) });
    }
  }

  render() {
    const { data, relatedJobs } = this.state;
    const { text: title, categories, applyUrl, description, lists } = data;
    console.log('title:', title);
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
                    <RoundBtn link={applyUrl} target="_blank" rel="noopener noreferrer" size={20} bgColor="#013EBF" color="#fff" style={{ paddingRight: '1.5em', paddingLeft: '1.5em', width: isMobile ? '100%' : 'auto' }} >
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
                  <RoundBtn size={20} link={applyUrl} bgColor="#013EBF" color="#fff" style={{ paddingRight: '1.5em', paddingLeft: '1.5em', width: isMobile ? '100%' : 'auto' }} >
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
                  {relatedJobs && relatedJobs.map((opportunity, index) => (
                    <RectButton link={`/jobs/${opportunity.id}`} key={index}>
                      <PaddingDiv right={30} left={30}>
                        <RobotoText size="24" weight="500" color="#013EBF">
                          {opportunity.text}
                        </RobotoText>
                      </PaddingDiv>
                    </RectButton>
                  ))}
                </FlexContainer>
              </PaddingDiv>
            </SectionContainer>
          </section>     
        </Layout>
      </React.Fragment>
    )
  }
}

export default JobPage
