import { Button, Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { rules } from '../utils/rules'

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth)
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  const { login } = useActions()

  const submit = () => {
    login(username, password)
  }
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required('Пожалуйста введите имя пользователя!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required('Пожалуйста введите пароль')]}
      >
        <Input value={password} onChange={(e) => setpassword(e.target.value)} type={'password'} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          onClick={() => console.log('error', error)}
          type='primary'
          htmlType='submit'
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
