import { Link } from 'gatsby'
import React from 'react'
import logo from './Assets/logo.png'
import { Image } from './styled'

const Brand = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Company Logo" />
    </Link>
  )
}

export default Brand
