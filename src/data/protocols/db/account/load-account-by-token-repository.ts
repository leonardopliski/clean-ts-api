import { TAccountModel } from '@/data/usecases/account/add-account/db-add-account-protocols'

export interface ILoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<ILoadAccountByTokenRepository.Result>
}

export namespace ILoadAccountByTokenRepository {
  export type Result = TAccountModel
}
