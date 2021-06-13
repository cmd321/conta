import * as React from 'react'

import { Circle, Wrapper } from './styles'

export enum variants {
  PRIMARY,
  SECONDARY,
}

type Props = {
  variant?: variants
}

function Loader({ variant = variants.SECONDARY }: Props): JSX.Element {
  return (
    <Wrapper data-testid="loader">
      <Circle variant={variant} />
      <Circle variant={variant} />
      <Circle variant={variant} />
      <Circle variant={variant} />
    </Wrapper>
  )
}

export default Loader
