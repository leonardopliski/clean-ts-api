import { TAccountModel } from '@/domain/models/account'

export type TAddAccountModel = Omit<TAccountModel, 'id'>

export interface IAddAccount {
  add: (account: TAddAccountModel) => Promise<TAccountModel>
}
