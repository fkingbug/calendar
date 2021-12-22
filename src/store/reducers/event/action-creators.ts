import { EventActionEnum, SetEventsAction, SetGuestsAction } from './types'
import { IUser } from '../../../models/IUser'
import { Ivent } from '../../../models/Ivent'
import { AppDispatch } from '../../index'
import UserService from '../../../api/UserService'

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
  setEvents: (payload: Ivent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventActionCreators.setGuests(response.data))
    } catch (e) {
      console.log(e)
    }
  },
  createEvent: (event: Ivent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Ivent[]
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (e) {
      console.log(e)
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Ivent[]
      const currentUserEvents = json.filter((ev) => ev.author === username || ev.guest === username)
      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e)
    }
  },
}
//fetchGuests - получаение всех юзеров из json
//createEvent
