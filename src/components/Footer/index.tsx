import React from 'react'
// import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'gatsby'
import css from '@emotion/css'
import {
  FooterWrapper,
  FooterHeading,
  FooterLinkList,
  FooterLinks,
  ContactLink,
  SocialIconsSection,
  SocialIcons,
  SocialLinks,
  SocialImg,
  SectionOne,
  SectionTwo,
  SectionThree
} from './styles'
import { linksGroup2, linksGroup1, linksGroup3, socialLinks } from './data'

export const FooterLink = ({ linkText, link }) => {
  return (
    <Link
      to={link}
      css={css`
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
      `}
    >
      {linkText}
    </Link>
  )
}

const Footer = () => {
  const MobileDevicePortrait = useMediaQuery({
    query: '(max-width: 480px)'
  })

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <footer>
      {!MobileDevicePortrait && !isPortrait ? (
        <FooterWrapper>
          <FooterHeading>Wir sind jederzeit telefonisch für Sie erreichbar.</FooterHeading>
          <SectionOne>
            <SectionTwo>
              <FooterLinkList>
                {linksGroup3.map(link => {
                  return (
                    <FooterLinks key={link.text}>
                      <ContactLink href={link.link}>{link.text}</ContactLink>
                    </FooterLinks>
                  )
                })}
              </FooterLinkList>
              <SocialIconsSection>
                {socialLinks.map((icon, index) => {
                  return (
                    <SocialIcons key={index}>
                      <SocialLinks href={icon.link}>
                        <SocialImg src={icon.img} />
                      </SocialLinks>
                    </SocialIcons>
                  )
                })}
              </SocialIconsSection>
            </SectionTwo>
            <SectionThree>
              <FooterLinkList>
                {linksGroup1.map(link => {
                  if (link.text === 'Karriere') {
                    return (
                      <FooterLinks key={link.text}>
                        <ContactLink target="_blank" href={link.link}>
                          {link.text}
                        </ContactLink>
                      </FooterLinks>
                    )
                  }
                  return (
                    <FooterLinks key={link.text}>
                      <FooterLink link={link.link} linkText={link.text} />
                    </FooterLinks>
                  )
                })}
              </FooterLinkList>
            </SectionThree>
            <SectionThree>
              <FooterLinkList>
                {linksGroup2.map(link => {
                  return (
                    <FooterLinks key={link.text}>
                      <FooterLink link={link.link} linkText={link.text} />
                    </FooterLinks>
                  )
                })}
              </FooterLinkList>
            </SectionThree>
          </SectionOne>
        </FooterWrapper>
      ) : (
        <FooterWrapper>
          <SocialIconsSection>
            {socialLinks.map((icon, index) => {
              return (
                <SocialIcons key={icon.link + index}>
                  <SocialLinks href={icon.link}>
                    <SocialImg src={icon.img} />
                  </SocialLinks>
                </SocialIcons>
              )
            })}
          </SocialIconsSection>
          <FooterLinkList>
            {linksGroup2.map(link => {
              return (
                <FooterLinks key={link.text}>
                  <ContactLink href={link.link}>{link.text}</ContactLink>
                </FooterLinks>
              )
            })}
          </FooterLinkList>
          <FooterLinkList>
            {linksGroup3.map(link => {
              return (
                <FooterLinks key={link.text}>
                  <ContactLink href={link.link}>{link.text}</ContactLink>
                </FooterLinks>
              )
            })}
          </FooterLinkList>
        </FooterWrapper>
      )}
    </footer>
  )
}

export default Footer
