//Все маршруты , все страницы которые будут в приложении

import React from 'react'
import Login from '../pages/Login'
import Event from '../pages/Event'

export interface IRoute {
  path: string //Путь роута
  component: React.ComponentType // Компонент который мы рендерим при роуте
  exact?: boolean // Однозначно индефицироваить маршрут
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}
//Список роутов
export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, exact: true, component: Login }]
//массив роутов для неавторизованных юзеров
export const privateRoutes: IRoute[] = [{ path: RouteNames.EVENT, exact: true, component: Event }]
//массив роутов для авторизованных юзеров
// На странцу календаря смогут попасть только авторизованные пользователи
