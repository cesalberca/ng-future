import { HttpInterceptorFn } from '@angular/common/http'

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('hola')
  return next(
    req.clone({
      withCredentials: true,
    }),
  )
}
