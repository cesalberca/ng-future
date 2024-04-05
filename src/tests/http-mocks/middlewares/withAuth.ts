import { DefaultBodyType, HttpResponseResolver, PathParams } from 'msw'

export function withAuth<
  Params extends PathParams,
  RequestBodyType extends DefaultBodyType,
  ResponseBodyType extends DefaultBodyType,
>(
  resolver: HttpResponseResolver<Params, RequestBodyType, ResponseBodyType>,
): HttpResponseResolver<Params, RequestBodyType, ResponseBodyType> {
  return async input => {
    // NOTE: At the moment this code only works with client side requests.
    // Github issue: https://github.com/angular/angular-cli/issues/26323#issuecomment-1817475549
    // Github issue: https://github.com/angular/angular/issues/15730
    //
    // const { cookies } = input
    // if (!cookies[AUTH_TOKEN_KEY]) {
    //   throw new HttpResponse(undefined, { status: 401 })
    // }
    //
    return resolver(input)
  }
}
