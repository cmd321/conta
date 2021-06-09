import * as React from 'react'

import Loader from '../Loader'

import { IconWrapper, Wrapper } from './styles'

type Props = {
  children: React.ReactChild
  loading?: boolean
  onClick?: React.MouseEventHandler
}

function Button({ children, loading, onClick }: Props): JSX.Element {
  return (
    <Wrapper disabled={loading} onClick={onClick}>
      {loading ? (
        <IconWrapper>
          <Loader />
        </IconWrapper>
      ) : (
        children
      )}
    </Wrapper>
  )
}

export default Button
