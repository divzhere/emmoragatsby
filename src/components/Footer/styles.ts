import styled from '@emotion/styled'

export const FooterWrapper = styled.div`
  text-align: center;
  padding: 52px 0;
  width: 100%;
  background-color: #bcd5ce;
  font-size: 18px;
  color: #01565b;
  margin-top: 80px;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0 0%;
  }
`
export const FooterLinkList = styled.ul`
  padding: 25px;
  text-align: left;
  font-weight: 400;
  display: inline-block;
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
  }
`
export const FooterLinks = styled.li`
  font-family: Rubik;
  display: block;
`
export const FooterHeading = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
`
export const ContactLink = styled.a`
  font-family: Rubik;
  font-size: 18px;
  line-height: 35px;
  letter-spacing: normal;
  color: #01656b;
  display: grid;
  text-decoration: none;
  &:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #01656b;
  }
  display: inline-block;
`
export const SocialIconsSection = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
`

export const SocialIcons = styled.li`
  display: block;
`
export const SocialLinks = styled.a``

export const SocialImg = styled.img`
  height: 42px;
  padding: 0 15px;
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 15px;
  }
`

export const SectionOne = styled.div`
  padding: 0 10%;
  display: flex;
  @media (min-width: 320px) and (max-width: 480px) {
    display: inline-grid;
  }
`
export const SectionTwo = styled.div`
  padding: 0;
  margin: 0;
  width: 40%;
  display: inline-grid;
  float: left;
`
export const SectionThree = styled.div`
  width: 25%;
  float: left;
`
