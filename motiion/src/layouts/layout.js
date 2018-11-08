import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import {
  LoadingGif
} from '../images'

class Layout extends Component {
  state = {
    isDOMLoaded: false,
  }

  componentDidMount () {
    console.log('window.isDOMLoaded:', window.isDOMLoaded)
    setTimeout(() => { this.handleLoad() }, 3000)
    window.addEventListener('load', this.handleLoad)
    if (window.isDOMLoaded) this.setState({ isDOMLoaded: true })
  }

  handleLoad = () => {
    console.log('dom content loaded')
    window.isDOMLoaded = true
    this.setState({ isDOMLoaded: true })
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.handleLoad)
  }

  render () {
    const { children, meta, pageTitle } = this.props
    const { isDOMLoaded } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={`${ pageTitle } - ${ data.site.siteMetadata.title }`}
              meta={meta}
            >
              <html lang="en" />
            </Helmet>
            {isDOMLoaded && (
              <React.Fragment>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div style={{ paddingTop: 60, minHeight: 'calc(100vh - 100px)' }}>
                  {children}
                </div>
                <Footer />
              </React.Fragment>
            )}
          </>
        )}
      />
    )
  }
}

export default Layout
