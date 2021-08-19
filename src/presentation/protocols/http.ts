export type THttpResponse = {
  statusCode: number
  body: any
}

export type THttpRequest = {
  headers?: Record<string, any>
  body?: any
}
