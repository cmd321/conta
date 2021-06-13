import * as React from 'react'
import * as d3 from 'd3-scale'

import { NegativeValueRect, PositiveValueRect, Wrapper } from './styles'

const { useMemo } = React

type info = {
  id: number
  date: string
  amountEntered: number
  amountOut: number
}

type Props = {
  data: info[]
  onMouseOver?: (
    event: React.MouseEvent,
    data: { id: number; date: string; value: number }
  ) => void
}

const getMaxValue = (data: info[]): number => {
  let max = -1

  data.forEach((d) => {
    if (d.amountEntered > max) max = d.amountEntered
    if (d.amountOut > max) max = d.amountOut
  })

  return max
}

function Chart({ data, onMouseOver }: Props): JSX.Element {
  const scaleY = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([getMaxValue(data), -getMaxValue(data)])
        .range([10, 190]),
    [data]
  )

  const scaleX = useMemo(
    () =>
      d3
        .scaleBand()
        .domain(data.map((d) => d.date))
        .range([20, 480])
        .padding(0.4)
        .round(true),
    [data]
  )

  return (
    <Wrapper>
      <svg viewBox="0 0 500 200" style={{ maxWidth: '100%' }}>
        <g>
          {data.map((d) => (
            <React.Fragment key={d.id}>
              <PositiveValueRect
                data-testid={`positiveValueRect${d.id}`}
                x={scaleX(d.date)}
                y={scaleY(d.amountEntered)}
                height={scaleY(0) - scaleY(d.amountEntered)}
                width={scaleX.bandwidth()}
                onMouseOver={(evt) => {
                  if (onMouseOver)
                    onMouseOver(evt, {
                      id: d.id,
                      date: d.date,
                      value: d.amountEntered,
                    })
                }}
              >
                <animate
                  attributeName="height"
                  from="0"
                  to={scaleY(0) - scaleY(d.amountEntered)}
                  dur="0.3s"
                  fill="freeze"
                />
              </PositiveValueRect>
              <NegativeValueRect
                data-testid={`negativeValueRect${d.id}`}
                x={scaleX(d.date)}
                y={scaleY(0)}
                height={scaleY(-d.amountOut) - scaleY(0)}
                width={scaleX.bandwidth()}
                onMouseOver={(evt) => {
                  if (onMouseOver)
                    onMouseOver(evt, {
                      id: d.id,
                      date: d.date,
                      value: -d.amountOut,
                    })
                }}
              >
                <animate
                  attributeName="height"
                  from="0"
                  to={scaleY(-d.amountOut) - scaleY(0)}
                  dur="0.3s"
                  fill="freeze"
                />
              </NegativeValueRect>
            </React.Fragment>
          ))}
        </g>
      </svg>
    </Wrapper>
  )
}

export default Chart
