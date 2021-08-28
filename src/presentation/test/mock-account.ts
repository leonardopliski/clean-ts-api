import { TAccountModel } from '@/domain/models/account'
import { IAuthentication, TAuthenticationParams } from '@/domain/usecases/account/authentication'
import { IAddAccount, TAddAccountParams } from '@/domain/usecases/account/add-account'
import { mockAccountModel } from '@/domain/test'
import { ILoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'

export const mockAddAccount = (): IAddAccount => {
  class AddAccountStub implements IAddAccount {
    async add (account: TAddAccountParams): Promise<TAccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): IAuthentication => {
  class AuthenticationStub implements IAuthentication {
    async auth (authentication: TAuthenticationParams): Promise<string> {
      return await Promise.resolve('any_token')
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): ILoadAccountByToken => {
  class LoadAccountByTokenStub implements ILoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<TAccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  const loadAccountByTokenStub = new LoadAccountByTokenStub()
  return loadAccountByTokenStub
}
