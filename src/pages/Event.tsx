import { Button, Layout, Row } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Ivent } from '../models/Ivent'

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { fetchGuests, createEvent, fetchEvents } = useActions()
  const { guests, events } = useTypedSelector((state) => state.event)
  const { user } = useTypedSelector((state) => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [])
  const addNewEvent = (event: Ivent) => {
    setModalVisible(false)
    createEvent(event)
  }
  return (
    <Layout>
      {JSON.stringify(events)}
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}> Добавить событие </Button>
      </Row>
      <Modal
        title='Добавить событие'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent}></EventForm>
      </Modal>
    </Layout>
  )
}

export default Event
