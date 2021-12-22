import { AppDispatch } from '../..'
import UserService from '../../../api/UserService'
import { IUser } from '../../../models/IUser'
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types'

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: isLoading,
  }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
  //ниже асинхронные экшены
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      setTimeout(async () => {
        const response = await UserService.getUsers()
        const mockUser = response.data.find(
          (user) => user.username === username && user.password === password
        )
        if (mockUser) {
          localStorage.setItem('auth', 'true') //сохранили в локал стредж статус логина
          localStorage.setItem('username', mockUser.username) // юзер нейм в локал сторедж
          dispatch(AuthActionCreators.setUser(mockUser))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(AuthActionCreators.setError('Некореректный логин или пароль'))
        }
      }, 1000)
      dispatch(AuthActionCreators.setIsLoading(false))
    } catch (error) {
      dispatch(AuthActionCreators.setError('произошла ошибка при логине'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
}
