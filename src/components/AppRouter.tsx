import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { privateRoutes, publicRoutes, RouteNames } from '../router'

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth)
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  )
}

export default AppRouter

//Вся логика для маршрутизации
//Switch - помогает выбрать 1 маршрут из тех которые находятся внутри него
//Если ниодин маршрут не найдет , мы можем сделать Redirect (На другую страницу)
//auth - Флаг показывает авторизован ли человек
