import { TAccountModel } from '@/domain/models/account'

export interface ILoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<TAccountModel>
}
