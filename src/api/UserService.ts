import axios, { AxiosResponse } from 'axios'
import { IUser } from '../models/IUser'

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>('./users.json')
  }
}
//В action-creators  делали пост запрос -  const response = await axios.get<IUser[]>('./users.json')
//теперь const response = await UserService.getUsers() и так в каждом action-creators
