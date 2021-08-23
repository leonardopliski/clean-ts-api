import { TAccountModel } from '@/data/usecases/account/add-account/db-add-account-protocols'

export interface ILoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<TAccountModel>
}
