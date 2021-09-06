import { TAccountModel } from '@/domain/models/account'
import { IAuthentication, TAuthenticationParams } from '@/domain/usecases/account/authentication'
import { IAddAccount, TAddAccountParams } from '@/domain/usecases/account/add-account'
import { mockAccountModel } from '@/domain/test'
import { ILoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import faker from 'faker'

export class AddAccountSpy implements IAddAccount {
  accountModel = mockAccountModel()
  addAccountParams: TAddAccountParams

  async add (account: TAddAccountParams): Promise<TAccountModel> {
    this.addAccountParams = account
    return await Promise.resolve(this.accountModel)
  }
}

export class AuthenticationSpy implements IAuthentication {
  authenticationParams: TAuthenticationParams
  token = faker.datatype.uuid()

  async auth (authenticationParams: TAuthenticationParams): Promise<string> {
    this.authenticationParams = authenticationParams
    return await Promise.resolve(this.token)
  }
}

export class LoadAccountByTokenSpy implements ILoadAccountByToken {
  accountModel = mockAccountModel()
  accessToken: string
  role: string

  async load (accessToken: string, role?: string): Promise<TAccountModel> {
    this.accessToken = accessToken
    this.role = role
    return await Promise.resolve(this.accountModel)
  }
}
