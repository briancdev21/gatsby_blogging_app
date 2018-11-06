import React from 'react'
import styled from 'styled-components'

const SectionContainer = ({ children, style, alignItems, column, classes }) => {
  return (
    <Container className={classes} alignItems={alignItems} style={{ ...style }} column={column}>
      {children}
    </Container>
  )
}

export default SectionContainer

const Container = styled.div`
  display: ${ props => props.column ? 'block' : 'flex' };
  align-items: ${ props => props.alignItems ? props.alignItems : 'flex-start' };
  max-width: 960px;
  width: 100%;
  margin: auto;
  position: relative;
  position: relative;
  
  &.home-blogs {
    height: 810px;
    .section-title {
      padding: 0 10px;
    }
    .blogs {
      margin: 0 -15px;
    }
  }

  &.home-FirstWeEat {
    min-height: 660px;
  }

  &.home-FloatContact {
    min-height: 0;
    height: 100%
  }
  
  .main-title {
    padding-bottom: 40px;
  }

  .openposition-title {
    padding-top: 70px;
  }

  .openposition-cards {
    padding-bottom: 100px;
  }

  &.blogs {
    .bottom-padding {
      padding-bottom: 300px;
    }

  }

  &.blogdetail {
    .blogdetail-title {
      font-size: 72px;
    }
    .title-container {
      padding-bottom: 40px;
    }
  }

  @media only screen and (max-width: 1040px) {
    &.careers {
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 1000px) {
    &.fluid {
      width: 100%;
      flex-flow: column;
      justify-content: center;
      padding: 10px;
    }

    &.home-profileSec {
      width: 100%;
      padding: 0 20px;
    }

    &.home-blogs {
      width: 100%;
      max-width: 960px;
      padding: 0 10px;
      height: auto;

      .blogs {
        margin: 0;
        article {
          margin-bottom: 50px;
        }
      }
    }

    &.blogs {
      padding: 0 20px;

      .blogs-title {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 780px) {
    &.home-FloatContact {
      flex-flow: column;
      justify-content: center;
      padding: 40px 20px 80px;
      width: 100%;
      
      .left {
        padding: 30px 0;
      }
      .right {
        width: 100%;
      }
    }

  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-flow: column;
    justify-content: center;
    padding: 10px;

    &.home-FirstWeEat {
      min-height: 520px;
    }

    &.home-profileSec {
      width: 100%;
      padding: 0 10px;
    }
  
    &.home-blogs {
      .section-title {
        padding: 0 50px;
      }
    }

    &.home-FloatContact {
      padding: 40px 0 100px 0;
      
      .left {
        padding: 50px 0;
      }
      .right {
        width: 100%;
      }
    }

    &.careers {
      padding: 0 10px;

      .main-title {
        padding-bottom: 0px;
      }

      .openposition-title {
        padding-top: 50px;
      }

      .openposition-cards {
        padding-bottom: 70px;
      }
    }


    &.blogdetail {
      .blogdetail-title {
        font-size: 48px;
      }
      .title-container {
        padding-bottom: 20px;
      }
    }

    &.blogs {
      padding: 0 10px;
      .blogs-title {
        width: auto;
      }

      .bottom-padding {
        padding-bottom: 100px;
      }
    }
  }
`
