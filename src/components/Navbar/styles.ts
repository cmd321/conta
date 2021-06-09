import styled, { css, keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as Close } from 'assets/close.svg'
import { ReactComponent as Menu } from 'assets/menu.svg'

const openMenu = keyframes`
  from {
    right: -200px;
  }
  to {
    right: 0;
  }
`

const closeMenu = keyframes`
  from {
    right: 0;
  }
  to {
    right: -200px;
  }
`

export const IconClose = styled(Close)`
  display: none;

  margin: 25px 25px 50px auto;

  cursor: pointer;

  @media (max-width: 850px) {
    display: block;
  }
`

export const IconMenu = styled(Menu)`
  display: none;
  position: absolute;
  top: 25px;
  right: 25px;

  cursor: pointer;

  @media (max-width: 850px) {
    display: block;
  }
`

export const Item = styled.li``

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;

  @media (max-width: 850px) {
    padding: 10px;
    margin-left: 30px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    text-decoration: underline;
  }
`

export const List = styled.ul<{ isOpen: boolean }>`
  display: flex;

  @media (max-width: 850px) {
    position: fixed;
    z-index: 5;
    flex-direction: column;

    height: 100vh;
    top: 0;
    right: -200px;
    width: 200px;

    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0 15px rgba(0, 0, 0, 0.3);
  }

  animation: ${({ isOpen }) =>
    isOpen
      ? css`
          ${openMenu} 0.3s ease-in-out forwards
        `
      : css`
          ${closeMenu} 0.3s ease-in-out forwards
        `};

  ${Item}:not(:last-child) {
    margin-right: 30px;

    @media (max-width: 850px) {
      margin-right: 0;
      padding-bottom: 30px;
    }
  }
`

export const ListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 90%;
  padding: 30px 100px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  cursor: pointer;

  @media (max-width: 850px) {
    padding: 10px;
    margin-left: 30px;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
