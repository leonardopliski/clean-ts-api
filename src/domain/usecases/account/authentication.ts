export type TAuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (authentication: TAuthenticationParams) => Promise<string>
}
