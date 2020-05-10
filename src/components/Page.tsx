import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {

  }
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
