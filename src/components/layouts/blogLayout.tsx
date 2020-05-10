import React from 'react'
import { Global, css } from '@emotion/core'
import Header from '../Header/Navbar'
import Footer from '../Footer'
import normalize from '../../styles/normalize'
import './blogLayout.css'

const Wrapper = (props: any) => {
  return (
    <div
    // style={{
    //   margin: `0 auto`,
    //   width: `100%`,
    //   marginTop: '12%'
    // }}
    >
      <Global styles={() => css(normalize)} />
      {props.children}
    </div>
  )
}

const BlogLayout = (props: any) => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{props.children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

export default BlogLayout
