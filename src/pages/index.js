import React from "react"
import { graphql } from "gatsby"

import { Navbar, Logo, Nav, NavLink } from "nelsonreitz-design-system"

export default ({ data }) => {
  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <Navbar>
      <Logo
        url="https://upload.wikimedia.org/wikipedia/en/b/b9/My_Little_Pony_G4_logo.svg"
        alt="My Little pony logo"
      />
      <Nav>
        {menuLinks.map(menuLink => (
          <NavLink link={menuLink.link}>{menuLink.name}</NavLink>
        ))}
      </Nav>
    </Navbar>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`
