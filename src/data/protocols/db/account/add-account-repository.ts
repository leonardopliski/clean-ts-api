import { TAddAccountModel } from '@/domain/usecases/account/add-account'
import { TAccountModel } from '@/domain/models/account'

export interface IAddAccountRepository {
  add: (accountData: TAddAccountModel) => Promise<TAccountModel>
}
