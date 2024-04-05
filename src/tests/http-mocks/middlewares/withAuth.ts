import { DefaultBodyType, HttpResponseResolver, PathParams } from 'msw'

export function withAuth<
  Params extends PathParams,
  RequestBodyType extends DefaultBodyType,
  ResponseBodyType extends DefaultBodyType,
>(
  resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>,
): HttpResponseResolver<Params, RequestBodyType, ResponseBodyType> {
  return async input => {
    const { cookies } = input
    console.log('withAuth cookies', cookies)

    return resolver(input)
  }
}
