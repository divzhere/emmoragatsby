import React from "react"
import logo from "../../../images/emmora_logo.png"
import data from "./data"
import {
  AboutUsImage,
  AboutUsSection,
  BlockText,
  ContentSection,
  HeadingIcon,
  ResponsiveHeading,
  SectionHeadingPrimary,
} from "./styled"

const AboutUs = () => {
  return (
    <AboutUsSection>
      <ContentSection
        responsivePadding="50px 30px"
        padding="50px 115px 35px 115px"
        display="block"
        align="left"
        color="#f2cfb8"
      >
        <ResponsiveHeading>
          <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
          <HeadingIcon src={logo} />
        </ResponsiveHeading>
        <BlockText size="16px">{data.description}</BlockText>
      </ContentSection>
      <ContentSection
        responsivePadding="50px 30px"
        padding="50px 115px 35px 115px"
        display="none"
        align="center"
        color="#79ab9d"
      >
        <AboutUsImage src={logo} />
      </ContentSection>
    </AboutUsSection>
  )
}

export default AboutUs
