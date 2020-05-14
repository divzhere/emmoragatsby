import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const AboutUsSection = styled.div`
  display: flex;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  ${mq[1]} {
    display: block;
  }
`

export const SectionHeadingPrimary = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
  ${mq[2]} {
    font-size: 27px;
    font-weight: 900;
    display: inline-block;
    width: 80%;
  }
`

export const ContentSection = styled.div`
  background-color: ${props => props.color};
  float: left;
  text-align: ${props => props.align};
  padding: ${props => props.padding};
  width: 50%;
  ${mq[2]} {
    width: 100%;
    padding: ${props => props.responsivePadding};
    background-color: 80abad;
    display: ${props => props.display};
  }
`
export const AboutUsImage = styled.img`
  width: 80%;
  ${mq[1]} {
    width: 100%;
  }
`

export const HeadingIcon = styled.img`
  width: 20%;
  display: none;
  padding-bottom: 14px;
  ${mq[1]} {
    display: inline-block;
  }
`
export const ResponsiveHeading = styled.div`
  display: block;
  ${mq[1]} {
    display: flex;
    margin-bottom: 10px;
  }
`

export const BlockText = styled.p`
  color: #01656b;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.size};
  & > strong {
    color: #01656b;
  }
`
