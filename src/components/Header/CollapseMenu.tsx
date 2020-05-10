import { Link } from 'gatsby'
import React from 'react'
import { useSpring } from 'react-spring'
import { CollapseWrapper, NavLinksCollapse } from './styled'

const CollapseMenu = (props: any) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate((openValue: any) => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinksCollapse>
          <li>
            <Link to="/" onClick={props.handleNavbar}>
              Bestattung
            </Link>
          </li>
          <li>
            <Link to="/bestattungen-corona" onClick={props.handleNavbar}>
              Corona
            </Link>
          </li>
          <li>
            <Link to="/vorsorge" onClick={props.handleNavbar}>
              Vorsorge
            </Link>
          </li>
          <li>
            <Link to="/magazin/trauer" onClick={props.handleNavbar}>
              Trauer
            </Link>
          </li>
          <li>
            <Link to="/podcast-ende-gut" onClick={props.handleNavbar}>
              Podcast
            </Link>
          </li>
          <li>
            <Link to="/" onClick={props.handleNavbar}>
              Netzwerk
            </Link>
          </li>
          <li>
            <Link to="/magazin" onClick={props.handleNavbar}>
              Magazin
            </Link>
          </li>
          <li>
            <Link to="/partners" onClick={props.handleNavbar}>
              Netzwerk
            </Link>
          </li>
        </NavLinksCollapse>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu
