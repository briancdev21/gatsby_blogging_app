import React from 'react';

import JobDetail from './job';
import Careers from '../Careers';

const JobsPage = (props) => {
  const { pathname } = props.location;
  var n = pathname.lastIndexOf('/');
  var pageId = pathname.substring(n + 1);
  const Child = pageId === 'job' || pageId === '' ? Careers : JobDetail;
  console.log('jobs page');
  return (
    <Child pathname={pathname} />
  );
};

export default JobsPage;
