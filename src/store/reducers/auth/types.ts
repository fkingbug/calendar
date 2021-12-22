import { IUser } from '../../../models/IUser'

export interface AuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}
//Только 1 поле в сторе
export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}
//Список экшенов

//Интерфейсы для экшена
export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH
  payload: boolean
}
export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR
  payload: string
}
export interface SetUserAction {
  type: AuthActionEnum.SET_USER
  payload: IUser
}
export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING
  payload: boolean
}
//Интерфейс для смены состояния auth
//Обобщаем экшены
export type AuthAction = SetAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction
//export type AuthAction = SetAuthAction | ... | ...
