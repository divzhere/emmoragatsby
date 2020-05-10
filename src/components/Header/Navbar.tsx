import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import Brand from './Brand'
import BurgerMenu from './BurgerMenu'
import CollapseMenu from './CollapseMenu'
import { AnchorText, BurgerWrapper, FlexContainer, NavBar, NavLinks, Reactangle, Text } from './styled'

const Navbar = (props: any) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  })

  const [navbarState, setNavBarState] = useState(false)

  const handleNavbar = () => {
    setNavBarState(!navbarState)
  }

  // const linkAnimation = useSpring({
  //   from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
  //   to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  //   delay: 800,
  //   config: config.wobbly,
  // });

  return (
    <>
      <NavBar style={barAnimation}>
        <Reactangle>
          <AnchorText href="tel:030 233 273 47">030 233 273 47</AnchorText>
          <Text>Service Mo-Fr: 8-21</Text>
        </Reactangle>
        <FlexContainer>
          <Brand />
          <NavLinks>
            <Link to="/">Bestattung</Link>
            <Link to="/bestattungen-corona">Corona</Link>
            <Link to="/vorsorge">Vorsorge</Link>
            <Link to="/podcast-ende-gut">Podcast</Link>
            <Link to="/magazin/trauer">Trauer</Link>
            <Link to="/magazin">Magazin</Link>
            <Link to="/partners">Netzwerk</Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
    </>
  )
}

export default Navbar
