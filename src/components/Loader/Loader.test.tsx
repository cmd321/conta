import * as React from 'react'
import { render } from '@testing-library/react'

import Loader from './index'

test('render loader', () => {
  const { getByTestId } = render(<Loader />)

  getByTestId('loader')
})
