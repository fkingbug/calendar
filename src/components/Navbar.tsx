import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const NavBar: FC = () => {
  const { push } = useHistory()
  const { logout } = useActions()
  const { isAuth, user } = useTypedSelector((state) => state.auth)
  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user?.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => logout()} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => push(RouteNames.LOGIN)} key={1}>
              Лог
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  )
}

export default NavBar
//usHistory и его метод push позволяют делать переход на страницу при клике ?
