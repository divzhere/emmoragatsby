import React from "react"
import DasSind from "../components/AboutUs/DasSind"
import DieEmmora from "../components/AboutUs/DieEmmora"
import FolgeUns from "../components/AboutUs/FolgeUns"
import Header from "../components/AboutUs/Header"
import UberEmmora from "../components/AboutUs/UberEmmora"
import UnsereWerte from "../components/AboutUs/UnsereWerte"
import WerdeTeil from "../components/AboutUs/WerdeTeil"
import Wirbringen from "../components/AboutUs/Wirbringen"
import Container from "../components/Container"
import IndexLayout from "../components/layouts"
import Page from "../components/Page"

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Header />
        <UberEmmora />
        <Wirbringen />
        <DasSind />
        <UnsereWerte />
        <DieEmmora />
        <FolgeUns />
        <WerdeTeil />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
