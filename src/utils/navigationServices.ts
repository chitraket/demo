import * as React from 'react'

export const navigationRef: any = React.createRef()

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params)
}
export const resetNavigation = (name: string, index?: number) => {
  navigationRef.current?.reset({
    index: index || 0,
    routes: [{ name: name }],
  })
}
export const getCurrentRoute = () => {
  return navigationRef.current?.getCurrentRoute()
}
export const navigateDispatch = (data: any) => {
  navigationRef.current?.dispatch(data)
}
