import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

//Кастомный хук чтобы удобнее работать с редаксом
