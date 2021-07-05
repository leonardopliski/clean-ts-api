import { IAddAccount, IAddAccountModel } from '../../../domain/usecases/add-account'
import { IAccountModel } from '../../../domain/models/account'
import { IEncrypter } from '../../protocols/encrypter'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: IEncrypter

  constructor (encrypter: IEncrypter) {
    this.encrypter = encrypter
  }

  async add (account: IAddAccountModel): Promise<IAccountModel | null> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(null))
  }
}
