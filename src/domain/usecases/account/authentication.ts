export type TAuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (authenticationParams: TAuthenticationParams) => Promise<string>
}
