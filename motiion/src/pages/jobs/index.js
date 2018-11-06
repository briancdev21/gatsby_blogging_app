import React from 'react'

import JobDetail from './job'
import Careers from '../careers'

const JobsPage = props => {
  const { pathname } = props.location
  const n = pathname.lastIndexOf('/')
  const pageId = pathname.substring(n + 1)
  const Child = pageId === 'job' || pageId === '' ? Careers : JobDetail
  console.log('jobs page')
  return (
    <Child pathname={pathname} />
  )
}

export default JobsPage
