import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { routes } from 'routes/consts'
import { logout } from 'services/user'

import {
  IconClose,
  IconMenu,
  Item,
  Link,
  List,
  ListWrapper,
  Text,
  Wrapper,
} from './styles'

const { useState } = React

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  const handleLogout = () => {
    logout()
    history.push(routes.login)
  }

  return (
    <Wrapper>
      <ListWrapper>
        <IconMenu onClick={() => setIsOpen(true)} />
        <List isOpen={isOpen}>
          <IconClose onClick={() => setIsOpen(false)} />
          <Item>
            <Link to={routes.home} exact>
              Início
            </Link>
          </Item>
          <Item>
            <Link to={routes.transfer}>Transferência</Link>
          </Item>
          <Item>
            <Link to={routes.statement}>Extrato</Link>
          </Item>
          <Item>
            <Text onClick={handleLogout}>Sair</Text>
          </Item>
        </List>
      </ListWrapper>
    </Wrapper>
  )
}

export default Navbar
