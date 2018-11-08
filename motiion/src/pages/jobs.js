import React from 'react'

import { Layout } from '../layouts'
import {
  SectionContainer,
  PaddingDiv,
  PlayFairText,
  RobotoText,
  RoundBtn,
  FlexContainer,
  FlexView,
  BackBtn,
  HorizontalLine,
  RectButton
} from '../components'

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
    isLoaded: false,
  }

  componentDidMount () {
    this.mounted = true
    this.loadJobDetail()
  }

  componentWillUnmount () {
    this.mounted = false
  }

  loadJobDetail = () => {
    const { location } = this.props
    let path = location.pathname
    path = path.slice(0, -1)
    const n = path.lastIndexOf('/')
    const id = path.substring(n + 1)
    const cmp = this
    /* eslint-disable no-undef */
    const oReq = new XMLHttpRequest()
    oReq.onreadystatechange = function () {
      if (oReq.readyState === XMLHttpRequest.DONE) {
        cmp.loadData(oReq.responseText)
      }
    }
    oReq.open('GET', `https://api.lever.co/v0/postings/motiion/${ id }?mode=json`)
    oReq.send()
  }

  loadJobsByLocation = jobDetail => {
    /* eslint-disable no-undef */
    fetch(`https://api.lever.co/v0/postings/motiion?location=${ jobDetail.categories.location }&skip=0&limit=4&mode=json`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        if (this.mounted) {
          let relatedJobs = []
          relatedJobs = data.filter(j => j.id !== jobDetail.id)
          if (relatedJobs.length < 3) {
            this.loadJobsByTeam(jobDetail, relatedJobs)
          } else {
            this.setState({ relatedJobs })
          }
        }
      })
  }

  loadJobsByTeam = (jobDetail, relatedJobs) => {
    fetch(`https://api.lever.co/v0/postings/motiion?team=${ jobDetail.categories.team }&skip=0&mode=json`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        if (this.mounted) {
          let jobs = data
          relatedJobs.forEach(job => {
            jobs = jobs.filter(j => j.id !== job.id)
          })
          jobs = relatedJobs.concat(jobs)
          this.setState({ relatedJobs: jobs.slice(0, 3) })
        }
      })
  }

  loadData = data => {
    if (this.mounted) {
      const jobDetail = JSON.parse(data)
      this.loadJobsByLocation(jobDetail)
      this.setState({ data: JSON.parse(data), isLoaded: true })
    }
  }

  render () {
    const { data, relatedJobs, isLoaded } = this.state
    const { text: title, categories, applyUrl, description, lists } = data
    return (
      <React.Fragment>
        <Layout
          pageTitle='Jobs'
          meta={[
            { name: 'description', content: 'Mottion PWA' },
            { name: 'keywords', content: 'Mottion, Jobs, PWA' },
          ]}
        >
          {isLoaded && (
            <React.Fragment>
              <section>
                <SectionContainer classes="jobdetail" column>
                  <PaddingDiv top={20} bottom={20}>
                    <BackBtn url={'/careers'} title={'Careers'} />
                  </PaddingDiv>
                  <PaddingDiv top={0} bottom={40}>
                    <PlayFairText weight="900" size={60} color="#000">
                      {title}
                    </PlayFairText>
                  </PaddingDiv>
                  <PaddingDiv top={0} className="meta">
                    <FlexContainer style={{ padding: 0 }}>
                      <FlexView size={1}>
                        <ul>
                          <li><RobotoText size={18} weight={500} >{categories.location || ''}</RobotoText></li>
                          <li><RobotoText size={18} weight={500} >{categories.team || ''}</RobotoText></li>
                          <li><RobotoText size={18} weight={500} >{categories.commitment || ''}</RobotoText></li>
                        </ul>
                      </FlexView>
                      <div className="applybtn-container">
                        <RoundBtn
                          link={applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size={20}
                          bgcolor="#013EBF"
                          color="#fff"
                          className="applybtn"
                          style={{ paddingRight: '1.5em', paddingLeft: '1.5em' }}
                        >
                          Apply for this job
                        </RoundBtn>
                      </div>
                    </FlexContainer>
                  </PaddingDiv>
                </SectionContainer>
              </section>
              <section style={{ backgroundColor: '#f5f5f5' }}>
                <SectionContainer classes="jobdetail" column>
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
                  <SectionContainer classes="jobdetail" column>
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
                <SectionContainer classes="jobdetail3 jobdetail" style={{ justifyContent: 'center' }}>
                  <PaddingDiv className="jobdetail3-applybtn-container">
                    <FlexContainer>
                      <RoundBtn
                        size={20}
                        link={applyUrl}
                        bgcolor="#013EBF"
                        color="#fff"
                        className="applybtn"
                        style={{ paddingRight: '1.5em', paddingLeft: '1.5em' }}
                      >
                        Apply for this job
                      </RoundBtn>
                    </FlexContainer>
                  </PaddingDiv>
                </SectionContainer>
              </section>
              <section
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <SectionContainer classes="jobdetail" column>
                  <HorizontalLine
                    height={2}
                    color={'#979797'}
                    style={{ width: '100%' }}
                  />
                  <PaddingDiv top={70} bottom={30}>
                    <RobotoText size="24" weight="600" color="#000">
                      Related jobs
                    </RobotoText>
                  </PaddingDiv>
                  <PaddingDiv bottom={100}>
                    <FlexContainer
                      className="relatedjobs"
                    >
                      {relatedJobs && relatedJobs.map((opportunity, index) => (
                        <RectButton link={`/jobs/${ opportunity.id }/`} key={index}>
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
            </React.Fragment>
          )}
        </Layout>
      </React.Fragment>
    )
  }
}

export default JobPage
