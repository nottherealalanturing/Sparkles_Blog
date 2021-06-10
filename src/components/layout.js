import { Box } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Idayat Musa`} />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <Box m="0 auto" maxWidth="960px" padding={"0 1.0875rem 1.45rem"}>
        <main>{children}</main>
      </Box>
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
