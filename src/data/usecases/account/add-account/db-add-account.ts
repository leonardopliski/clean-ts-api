import {
  IAddAccount,
  IHasher,
  IAddAccountRepository,
  ILoadAccountByEmailRepository
} from './db-add-account-protocols'
import { TAccountModel } from '@/domain/models'

export class DbAddAccount implements IAddAccount {
  constructor (
    private readonly hasher: IHasher,
    private readonly addAccountRepository: IAddAccountRepository,
    private readonly loadAccountByEmailRepository: ILoadAccountByEmailRepository
  ) {}

  async add (accountData: IAddAccount.Params): Promise<IAddAccount.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      accountData.email
    )
    let newAccount: TAccountModel = null
    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      newAccount = await this.addAccountRepository.add({
        ...accountData,
        password: hashedPassword
      })
    }
    return newAccount !== null
  }
}
