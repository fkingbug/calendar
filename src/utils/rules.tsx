import moment, { Moment } from 'moment'

export const rules = {
  required: (message: string = 'Обязательное поле') => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    },
  }),
}
//Возвращает объект для инпутов
// rules={[{ required: true, message: 'Пожалуйста введите пароль' }]} до
// после создания rules.tsx rules={[rules.required('Пожалуйста введите пароль')]}
