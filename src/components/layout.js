/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Nav from "./nav"
import Head from "./head"

import "../styles/media.css"
import "../styles/layout.css"


const Layout = () => {
 

  return (
    <>
      <Nav/>
      <Head/>
     
     
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
