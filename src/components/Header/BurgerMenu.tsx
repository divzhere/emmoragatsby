import React from 'react'
import { Container, MenuText, Wrapper } from './styled'

const Burgermenu = (props: any) => {
  return (
    <Wrapper onClick={props.handleNavbar}>
      <Container>
        {/* <MenuText>Menu</MenuText> */}
        <div className={props.navbarState ? 'open' : ''}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Burgermenu
