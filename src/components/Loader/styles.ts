import styled, { keyframes } from 'styled-components'

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const Circle = styled.div`
  position: absolute;

  top: 17px;
  width: 9px;
  height: 9px;

  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  width: 80px;
  height: 40px;

  ${Circle}:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  ${Circle}:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  ${Circle}:nth-child(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  ${Circle}:nth-child(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`
