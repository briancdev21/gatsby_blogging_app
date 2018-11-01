import React from 'react'

import BlogDetail from './blog'
import Blogs from './blogs'

const BlogsPage = props => {
  const { pathname } = props.location
  const n = pathname.lastIndexOf('/')
  const pageId = pathname.substring(n + 1)
  const Child = pageId === 'blogs' || pageId === '' ? Blogs : BlogDetail
  return (
    <Child pathname={pathname} />
  )
}

export default BlogsPage
