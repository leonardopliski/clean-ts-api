import env from '@/main/config/env'
import { AccountMongoRepository } from '@/infra/db/mongodb/account'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import { DbAuthentication } from '@/data/usecases/account/authentication'
import { IAuthentication } from '@/domain/usecases/account/authentication'

export const makeDbAuthentication = (): IAuthentication => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
