import { TAccountModel } from '@/domain/models/account'

export type TAddAccountModel = {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (account: TAddAccountModel) => Promise<TAccountModel>
}
