import { IAuthentication, IAddAccount, ILoadAccountByToken } from '@/domain/usecases'
import faker from 'faker'

export class AddAccountSpy implements IAddAccount {
  result = true
  addAccountParams: IAddAccount.Params

  async add (account: IAddAccount.Params): Promise<IAddAccount.Result> {
    this.addAccountParams = account
    return this.result
  }
}

export class AuthenticationSpy implements IAuthentication {
  authenticationParams: IAuthentication.Params
  authenticationModel: IAuthentication.Result = {
    accessToken: faker.datatype.uuid(),
    name: faker.name.findName()
  }

  async auth (authenticationParams: IAuthentication.Params): Promise<IAuthentication.Result> {
    this.authenticationParams = authenticationParams
    return await Promise.resolve(this.authenticationModel)
  }
}

export class LoadAccountByTokenSpy implements ILoadAccountByToken {
  result = { id: faker.datatype.uuid() }
  accessToken: string
  role: string

  async load (accessToken: string, role?: string): Promise<ILoadAccountByToken.Result> {
    this.accessToken = accessToken
    this.role = role
    return await Promise.resolve(this.result)
  }
}
