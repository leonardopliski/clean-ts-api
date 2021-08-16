export interface IHttpResponse {
  statusCode: number
  body: any
}

export interface IHttpRequest {
  headers?: Record<string, any>
  body?: any
}
