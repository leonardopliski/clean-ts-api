import { IAccountModel, ILoadAccountByToken } from '../../../presentation/middlewares/auth-middleware-protocols'
import { IDecrypter } from '../../protocols/cryptography/decrypter'

export class DbLoadAccountByToken implements ILoadAccountByToken {
  constructor (private readonly decrypter: IDecrypter) { }

  async load (accessToken: string, role?: string): Promise<IAccountModel> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
