
import React, { Component } from 'react'

import { Layout } from '../layouts'
import { getClient } from '../services/ContentfulClient'
import {
  SectionContainer,
  PaddingDiv,
  PlayFairText,
  SearchBox,
  FlexContainer,
  BackBtn,
  PostSummary,
  Card,
  BlogLoadMoreBtn,
  Tag,
  RobotoText,
  HorizontalLine
} from '../components'
import * as config from '../config'

class Blogs extends Component {
  state = {
    blogs: [],
    skip: 0,
    blog: {
      fields: {
        title: '',
        content: '',
        author: '',
        tags: []
      },
      sys: {
        id: '',
        createdAt: new Date(),
      }
    },
    isLoaded: false,
  }

  componentDidMount () {
    this.mounted = true
    const { location } = this.props
    let path = location.pathname
    path = path.slice(0, -1)
    const n = path.lastIndexOf('/')
    const id = path.substring(n + 1)
    if (id === 'blogs') {
      this.loadBlogsEntries()
    } else {
      this.loadEntry(id)
    }
  }

  loadBlogsEntries = async () => {
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
    if (this.mounted) this.setState({ blogs: blogs.concat(newBlogs), skip: skip + 2, isBlogMain: true })
  }

  loadEntry = async id => {
    const { space, accessToken } = config.contentful
    const client = getClient(space, accessToken)
    const entriesResponse = await client.getEntries({ 'sys.id': id })
    if (entriesResponse.total > 0 && this.mounted) {
      const blog = entriesResponse.items[0]
      this.setState({ blog, isLoaded: true, isBlogMain: false })
      this.loadEntries(blog)
    }
  }

  loadEntries = async blog => {
    const { blogs } = this.state
    if (blog.sys.id) {
      const { space, accessToken } = config.contentful
      const client = getClient(space, accessToken)
      const entriesResponse = await client.getEntries({
        content_type: 'blogPost',
        skip: 0,
        limit: 3,
        order: '-sys.updatedAt',
        'fields.tags[in]': blog.fields.tags.join(','),
        'sys.id[ne]': blog.sys.id,
      })
      const newBlogs = entriesResponse.items
      if (this.mounted) this.setState({ blogs: blogs.concat(newBlogs) })
    }
  }

  calculateDateDiff = dateStr => {
    const timestamp = new Date(dateStr).getTime()
    const today = new Date().getTime()
    const diff = (today - timestamp) / 1000
    let str

    if (diff > 86400 * 30 * 12) {
      str = `${ parseInt(diff / 86400 / 30 / 12) } years ago`
    }
    if (diff < 86400 * 30 * 12 * 2) {
      str = `1 year ago`
    }
    if (diff < 86400 * 30 * 12) {
      str = `${ parseInt(diff / 86400 / 30) } months ago`
    }
    if (diff < 86400 * 30 * 2) {
      str = `1 month ago`
    }
    if (diff < 86400 * 30) {
      str = `${ parseInt(diff / 86400) } days ago`
    }
    if (diff < 86400 * 2) {
      str = `1 day ago`
    }
    if (diff < 86400) {
      str = `${ parseInt(diff / 3600) } hrs ago`
    }
    if (diff < 7200) {
      str = '1 hr ago'
    }
    if (diff < 3600) {
      str = `${ parseInt(diff / 60) } mins ago`
    }
    if (diff < 60) {
      str = '1 min ago'
    }
    return str
  }

  moreLoadHander = () => {
    this.loadBlogsEntries()
  }

  render () {
    const { blogs, blog, isBlogMain, isLoaded } = this.state
    const { fields: { title, author, tags, content }, sys: { createdAt } } = blog
    const postedDate = this.calculateDateDiff(createdAt)
    return (
      <React.Fragment>
        <Layout
          pageTitle='Blogs'
          meta={[
            { name: 'description', content: 'Mottion PWA Blogs' },
            { name: 'keywords', content: 'Mottion, Gatsby, PWA, Blogs' },
          ]}
        >
          {isBlogMain && (
            <React.Fragment>
              <section>
                <SectionContainer classes="blogs" column>
                  <PaddingDiv top={20} bottom={10}>
                    <BackBtn url={'/'} title={'Home'} />
                  </PaddingDiv>
                  <PaddingDiv top={10} bottom={40}>
                    <FlexContainer justifyContent="space-between">
                      <PlayFairText className={'blogs-title'} weight="900" size={72} color="#000">
                        Blogs
                      </PlayFairText>
                      {/* <SearchBox placeholder="Search blog" /> */}
                    </FlexContainer>
                  </PaddingDiv>
                </SectionContainer>
              </section>
              <section style={{ background: '#f5f5f5' }}>
                <SectionContainer classes="blogs" column>
                  <PaddingDiv top={60} bottom={40}>
                    <FlexContainer className="blogs-container">
                      {blogs.map((blog, index) => (
                        <Card key={index} style={{ minWidth: '40%', width: 'auto' }}>
                          <PostSummary blog={blog} blackTheme />
                        </Card>
                      ))}
                    </FlexContainer>
                  </PaddingDiv>
                  <FlexContainer>
                    <BlogLoadMoreBtn moreLoadHander={this.moreLoadHander} />
                  </FlexContainer>
                  <PaddingDiv className="bottom-padding"/>
                </SectionContainer>
              </section>
            </React.Fragment>
          )}
          {!isBlogMain && isLoaded && (
            <React.Fragment>
              <section>
                <SectionContainer classes="blogdetail" column>
                  <PaddingDiv top={20} bottom={10}>
                    <BackBtn url={'/blogs/'} title={'Blogs'} />
                  </PaddingDiv>
                  <PaddingDiv top={10} className="title-container">
                    <FlexContainer justifyContent="space-between">
                      <PlayFairText weight="900" className="blogdetail-title" color="#000" style={{ textTransform: 'capitalize' }}>
                        {title}
                      </PlayFairText>
                    </FlexContainer>
                  </PaddingDiv>
                  <PaddingDiv bottom={25} top={0}>
                    <FlexContainer justifyContent="flex-start">
                      <RobotoText size={16} weight={400} color={'#00000066'}>{postedDate}&nbsp;</RobotoText>
                      <RobotoText size={50} weight={400} color={'#00000045'} style={{ lineHeight: '6px' }}>&#xb7;</RobotoText>
                      <RobotoText size={16} weight={400} color={'#00000066'} style={{ textTransform: 'capitalize' }}>
                        &nbsp;By {author}
                      </RobotoText>
                    </FlexContainer>
                  </PaddingDiv>
                </SectionContainer>
              </section>
              <section style={{ background: '#f5f5f5' }}>
                <SectionContainer classes="blogdetail" column>
                  <PaddingDiv top={40} bottom={40}>
                    <RobotoText size={18} weight={300} color={'#000000a3'} dangerouslySetInnerHTML={{ __html: content }}>
                    </RobotoText>
                  </PaddingDiv>
                  <PaddingDiv>
                    {tags.map((tag, index) =>
                      <Tag name={tag} key={index} />
                    )}
                  </PaddingDiv>
                </SectionContainer>
                <PaddingDiv bottom={40} />
              </section>
              <section style={{ backgroundColor: '#f5f5f5' }}>
                <SectionContainer classes="blogdetail" column>
                  <HorizontalLine height={2} color={'#979797'} style={{ width: '100%' }} />
                  <PaddingDiv top={50} bottom={30}>
                    <RobotoText size="24" weight="600" color="#000">
                      Related blogs
                    </RobotoText>
                  </PaddingDiv>
                  <PaddingDiv bottom={100}>
                    <FlexContainer justifyContent="flex-start" className="relatedBlogs">
                      {blogs.map((blog, index) => (
                        <Card key={index}>
                          <PostSummary blog={blog} blackTheme hideContent />
                        </Card>
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

export default Blogs
