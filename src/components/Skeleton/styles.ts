import styled, { css, keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`

export const Wrapper = styled.div<{ height: string; width: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey8};

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.4) 20%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${css`
      ${loadingAnimation} 1.5s infinite
    `};
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`
