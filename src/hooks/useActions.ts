import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allActionCreators } from '../store/reducers/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActionCreators, dispatch)
}

//Чтобы не юзать диспатч
//До:
//  const dispatch = useDispatch()
// const submit = () => {
//     dispatch(AuthActionCreators.login(username, password))
//   }
//После :
//  const { login } = useActions()
//const submit = () => {
//    login(username, password))
//  }
