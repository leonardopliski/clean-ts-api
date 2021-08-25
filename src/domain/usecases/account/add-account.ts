import { TAccountModel } from '@/domain/models/account'

export type TAddAccountParams = Omit<TAccountModel, 'id'>

export interface IAddAccount {
  add: (account: TAddAccountParams) => Promise<TAccountModel>
}
