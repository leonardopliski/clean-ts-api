import { IAddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { ILoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-repository'
import { ILoadAccountByTokenRepository } from '@/data/protocols/db/account/load-account-by-token-repository'
import { IUpdateAccessTokenRepository } from '@/data/protocols/db/account/update-access-token-repository'
import { TAddAccountParams } from '@/domain/usecases/account/add-account'
import { TAccountModel } from '@/domain/models/account'
import { mockAccountModel } from '@/domain/test'

export const mockAddAccountRepository = (): IAddAccountRepository => {
  class AddAccountRepositoryStub implements IAddAccountRepository {
    async add (accountData: TAddAccountParams): Promise<TAccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  return new AddAccountRepositoryStub()
}

export const mockLoadAccountByEmailRepository = (): ILoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements ILoadAccountByEmailRepository {
    async loadByEmail (email: string): Promise<TAccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByEmailRepositoryStub()
}

export const mockLoadAccountByTokenRepository = (): ILoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements ILoadAccountByTokenRepository {
    async loadByToken (token: string, role?: string): Promise<TAccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  const loadAccountByTokenRepositoryStub = new LoadAccountByTokenRepositoryStub()
  return loadAccountByTokenRepositoryStub
}

export const mockUpdateAccessTokenRepositoryStub = (): IUpdateAccessTokenRepository => {
  class UpdateAcccessTokenRepositoryStub implements IUpdateAccessTokenRepository {
    async updateAccessToken (id: string, token: string): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new UpdateAcccessTokenRepositoryStub()
}
