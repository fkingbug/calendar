import { AuthActionCreators } from './auth/action-creators'
import { EventActionCreators } from './event/action-creators'

//Если много action-creator
export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
  // ...AuthActionCreators,
  // ...AuthActionCreators,
}
