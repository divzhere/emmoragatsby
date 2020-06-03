import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const HeroImage = styled.img`
  ${mq[1]} {
    width: 100%;
    position: absolute;
    z-index: 9;
  }
`
export const HeaderContainer = styled.div`
  ${mq[1]} {
    display: flex;
    justify-content: center;
  }
`

export const HeaderSection = styled.div`
  ${mq[1]} {
    background-color: #e59f71;
    margin-top: 210px;
    height: 315px;
    width: 317px;
    position: absolute;
    z-index: 1000;
  }
`
export const HeaderTitle = styled.div`
  ${mq[1]} {
    padding-top: 32px;
    font-family: Trirong;
    font-size: 36px;
    line-height: 42px;
    color: #01565b;
    margin-left: 17px;
    margin-right: 14px;
  }
`
export const HeaderSubTitle = styled.div`
  ${mq[1]} {
    font-family: Rubik;
    font-size: 16px;
    padding-top: 24px;
    padding-bottom: 32px;
    line-height: 21px;
    color: #01565b;
    margin-left: 17px;
    margin-right: 14px;
  }
`
export const HeaderDescription = styled.div`
  ${mq[1]} {
    font-family: Rubik;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    margin-left: 17px;
    margin-right: 14px;
  }
`
