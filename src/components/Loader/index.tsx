import * as React from 'react'

import { Circle, Wrapper } from './styles'

function Loader(): JSX.Element {
  return (
    <Wrapper data-testid="loader">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Wrapper>
  )
}

export default Loader
