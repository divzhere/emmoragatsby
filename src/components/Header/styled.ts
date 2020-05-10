import styled from '@emotion/styled'
import { animated } from 'react-spring'

export const NavBar = styled(animated.nav)`
  position: absolute;
  background: white;
  width: 100%;
  height: 166px;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
  font-size: 1.4rem;
  @media (max-width: 769px) {
    height: 54px;
  }
`

export const Text = styled.p`
  margin-bottom: 0px;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 500;
  margin-left: 73px;
  margin-top: 0px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: white;
`

export const AnchorText = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0px;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 500;
  margin-left: 73px;
  margin-top: 21px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: white;
`

export const Reactangle = styled.div`
  position: absolute;
  z-index: 11;
  top: 0;
  right: 0;
  border-bottom-left-radius: 50px;
  width: 272px;
  height: 84px;
  background: #79ab9d;
  @media (max-width: 769px) {
    display: none;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  height: 166px;
  background: white;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 769px) {
    height: 70px;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavLinks = styled(animated.ul)`
  align-items: flex-end;
  display: flex;
  background: white;
  margin-bottom: 0px;
  padding-bottom: 18px;
  margin-right: 176px;
  & a {
    font-family: Rubik;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #01656b;
    margin-right: 63px;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
export const Image = styled.img`
  width: 122px;
  height: 122px;
  align-self: flex-end;
  padding-bottom: 18px;
  margin-left: 25px;
  @media (max-width: 769px) {
    height: 60px;
    width: 60px;
    padding-bottom: 0px;
    margin-left: 22px;
    margin-top: 16px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  padding-right: 0.7rem;
  cursor: pointer;
  display: block;
  & span {
    background: #01565b;
    display: block;
    position: relative;
    border-radius: 3px;
    width: 29px;
    height: 4px;
    margin-bottom: 6px;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -10px;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }
`
export const MenuText = styled.div`
  width: 48px;
  height: 22px;
  margin-right: 9px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #01565b;
`
export const Container = styled.div`
  display: flex;
`

export const CollapseWrapper = styled.div`
  background: white;
  position: absolute;
  top: 140px;
  z-index: 10;
  left: 0;
  right: 0;
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 769px) {
    top: 58px;
  }
`

export const NavLinksCollapse = styled.ul`
  list-style-type: none;
  background: white;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    width: 76px;
    height: 21px;
    font-family: Rubik;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #01656b;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`
