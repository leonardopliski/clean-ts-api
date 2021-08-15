import { IAccountModel, ILoadAccountByToken } from '../../../presentation/middlewares/auth-middleware-protocols'
import { IDecrypter } from '../../protocols/cryptography/decrypter'
import { ILoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'

export class DbLoadAccountByToken implements ILoadAccountByToken {
  constructor (
    private readonly decrypter: IDecrypter,
    private readonly loadAccountByTokenRepository: ILoadAccountByTokenRepository
  ) { }

  async load (accessToken: string, role?: string): Promise<IAccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(token, role)
      if (account) {
        return account
      }
    }
    return null
  }
}
