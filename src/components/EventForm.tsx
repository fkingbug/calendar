import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IUser } from '../models/IUser'
import { Ivent } from '../models/Ivent'
import { formatDate } from '../utils/date'
import { rules } from '../utils/rules'

interface EventFromProps {
  guests: IUser[]
  submit: (event: Ivent) => void
}

const EventForm: FC<EventFromProps> = (props) => {
  const [event, setEvent] = useState<Ivent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as Ivent)
  const { user } = useTypedSelector((state) => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) })
    }
  }

  const submitForm = () => {
    props.submit({ ...event, author: user?.username })
  }
  return (
    <Form onFinish={submitForm}>
      <Form.Item label='Описание события' name='descriprion' rules={[rules.required()]}>
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label='Дата события'
        name='date'
        rules={[rules.required(), rules.isDateAfter('Нельзя создать прошедшую дату')]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label='Выберите пациента' name='guest' rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guests) => (
            <Option value={guests.username}>{guests.username}</Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
