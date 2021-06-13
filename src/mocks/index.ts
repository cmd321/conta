import { setupWorker } from 'msw'

import { getHandlers } from './handlers'

const handlers = getHandlers({ delay: 2000 })
export const mockServer = setupWorker(...handlers)
