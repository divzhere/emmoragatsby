import React from "react"
import HeaderImage from "../../../images/header.jpg"
import data from "./data"
import {
  HeaderTitle,
  HeaderSubTitle,
  HeaderDescription,
  HeroImage,
  HeaderSection,
  HeaderContainer,
} from "./styled"

const Header = () => {
  return (
    <div>
      <HeroImage src={HeaderImage}></HeroImage>
      <HeaderContainer>
        <HeaderSection>
          <HeaderTitle>{data.title}</HeaderTitle>
          <HeaderSubTitle>{data.subTitle}</HeaderSubTitle>
          <HeaderDescription>{data.description}</HeaderDescription>
        </HeaderSection>
      </HeaderContainer>
    </div>
  )
}

export default Header
