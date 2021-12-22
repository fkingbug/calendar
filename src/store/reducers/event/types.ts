import { IUser } from '../../../models/IUser'
import { Ivent } from '../../../models/Ivent'

export interface EventState {
  guests: IUser[]
  events: Ivent[]
}

export enum EventActionEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS
  payload: IUser[]
}
export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS
  payload: Ivent[]
}

export type EventAction = SetGuestsAction | SetEventsAction
