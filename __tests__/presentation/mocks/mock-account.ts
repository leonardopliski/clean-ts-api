import { TAccountModel } from '@/domain/models/account'
import { IAuthentication, TAuthenticationParams } from '@/domain/usecases/account/authentication'
import { IAddAccount, TAddAccountParams } from '@/domain/usecases/account/add-account'
import { ILoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import { TAuthenticationModel } from '@/domain/models/authentication-model'
import { mockAccountModel } from '@/tests/domain/mocks'
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
  authenticationModel: TAuthenticationModel = {
    accessToken: faker.datatype.uuid(),
    name: faker.name.findName()
  }

  async auth (authenticationParams: TAuthenticationParams): Promise<TAuthenticationModel> {
    this.authenticationParams = authenticationParams
    return await Promise.resolve(this.authenticationModel)
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
