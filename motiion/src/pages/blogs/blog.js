
import React, { Component } from 'react'

import { Layout } from '../../layouts'
import { getClient } from '../../services/ContentfulClient'
import {
  SectionContainer,
  Tag,
  PaddingDiv,
  PlayFairText,
  FlexContainer,
  BackBtn,
  RobotoText,
  HorizontalLine,
  PostSummary,
  Card
} from '../../components'
import * as config from '../../config'

class Blog extends Component {
  state = {
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
    blogs: [],
  }

  componentDidMount () {
    this.loadEntry()
  }

  loadEntry = async () => {
    const { pathname } = this.props
    const n = pathname.lastIndexOf('/')
    const id = pathname.substring(n + 1)
    const { space, accessToken } = config.contentful
    const client = getClient(space, accessToken)
    const entriesResponse = await client.getEntries({ 'sys.id': id })
    if (entriesResponse.total > 0) {
      const blog = entriesResponse.items[0]
      this.loadEntries(blog)
    }
  }

  loadEntries = async blog => {
    const { blogs } = this.state
    console.log('blog:', blog.sys.id)
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
      this.setState({ blogs: blogs.concat(newBlogs), blog })
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
    console.log('time diff:', diff)
    return str
  }

  render () {
    const { blog, blogs } = this.state
    const { fields: { title, author, tags, content }, sys: { createdAt } } = blog
    const postedDate = this.calculateDateDiff(createdAt)
    return (
      <React.Fragment>
        <Layout
          pageTitle='Blog Post'
          meta={[
            { name: 'description', content: 'Mottion PWA Blog' },
            { name: 'keywords', content: 'Mottion, Gatsby, PWA, Blog, Post' },
          ]}
        >
          <section>
            <SectionContainer classes="blogdetail" column>
              <PaddingDiv top={20} bottom={10}>
                <BackBtn url={'/blogs'} title={'Blogs'} />
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
        </Layout>
      </React.Fragment>
    )
  }
}

export default Blog
