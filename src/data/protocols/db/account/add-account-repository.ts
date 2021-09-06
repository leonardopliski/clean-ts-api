import { TAddAccountParams } from '@/domain/usecases/account/add-account'
import { TAccountModel } from '@/domain/models/account'

export interface IAddAccountRepository {
  add: (data: TAddAccountParams) => Promise<TAccountModel>
}
