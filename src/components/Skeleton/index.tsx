import * as React from 'react'

import { Wrapper } from './styles'

type Props = {
  height: string
  width?: string
}

function Skeleton({ height, width = '100%' }: Props) {
  return <Wrapper data-testid="skeleton" height={height} width={width} />
}

export default Skeleton
