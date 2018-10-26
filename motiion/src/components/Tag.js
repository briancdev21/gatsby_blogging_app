import styled from 'styled-components'
import React from 'react'

const Tag = ({ name }) => (
    <Round>
      #{name}
    </Round>
);

export default Tag

const Round = styled.div`
  font-size: 14px;
  padding: 10px 22px;
  border-radius: 20px;
  background: #dcdcdc;
  color: #000;
  display: inline-block;
  margin-right: 10px;
  text-transform: capitalize;
  opacity: 0.8;
`
