import { rest } from 'msw'

import { data } from './data'

const appData = data

export const getHandlers = ({ delay }: { delay: number }) => [
  rest.post(
    'http://localhost:9000/user/login',
    (req: any, res: any, ctx: any) => {
      const { body } = req
      const { user } = appData
      if (
        body.agency === user.agency &&
        body.account === user.account &&
        body.password === user.password
      ) {
        return res(
          ctx.delay(delay),
          ctx.status(202, 'Mocked status'),
          ctx.json({
            token: 'token_here',
          })
        )
      }
      return res(
        ctx.delay(delay),
        ctx.status(401, 'Mocked error'),
        ctx.json({
          error: { message: 'Credênciais inválidas.' },
        })
      )
    }
  ),
  rest.get('http://localhost:9000/user', (_: any, res: any, ctx: any) => {
    return res(
      ctx.delay(delay),
      ctx.status(202, 'Mocked status'),
      ctx.json(appData.user)
    )
  }),
  rest.get(
    'http://localhost:9000/statements',
    (req: any, res: any, ctx: any) => {
      const page = req.url.searchParams.get('page')

      return res(
        ctx.delay(delay),
        ctx.status(202, 'Mocked status'),
        ctx.json({
          count: appData.statements.length,
          rows: appData.statements.slice((page - 1) * 10, page * 10),
        })
      )
    }
  ),
  rest.get(
    'http://localhost:9000/statements/grouped-by-day',
    (_: any, res: any, ctx: any) => {
      return res(
        ctx.delay(delay),
        ctx.status(202, 'Mocked status'),
        ctx.json(appData.statementsGroupedByDay)
      )
    }
  ),
  rest.post(
    'http://localhost:9000/transfer',
    (req: any, res: any, ctx: any) => {
      const { body } = req
      const { user, statements, statementsGroupedByDay } = appData

      if (body.value <= user.balance) {
        user.balance -= body.value
        appData.statements = [
          {
            id: statements.length + 1,
            date: new Date(2020, 0, 30).toISOString(),
            type: 'TRANSFER',
            value: -body.value,
          },
          ...statements,
        ]
        statementsGroupedByDay[statementsGroupedByDay.length - 1].amountOut +=
          body.value
        return res(ctx.status(202, 'Mocked status'), ctx.json(user))
      }
      return res(
        ctx.status(400, 'Mocked status'),
        ctx.json({
          error: {
            message:
              'Você não tem saldo suficiente para efetuar essa transferência.',
          },
        })
      )
    }
  ),
]
