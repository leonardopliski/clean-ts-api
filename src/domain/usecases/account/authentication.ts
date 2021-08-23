export type TAuthenticationModel = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (authentication: TAuthenticationModel) => Promise<string>
}
