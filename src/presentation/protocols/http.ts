export interface IHttpResponse {
  statusCode: number
  body: any
}

export interface IHttpRequest {
  headers?: { [key: string]: string }
  body?: any
}
