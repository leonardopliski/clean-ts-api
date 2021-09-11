import env from '@/main/config/env'
import { ILoadAccountByToken } from '@/domain/usecases/account'
import { AccountMongoRepository } from '@/infra/db/mongodb/account'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter'
import { DbLoadAccountByToken } from '@/data/usecases/account'

export const makeDbLoadAccountByToken = (): ILoadAccountByToken => {
  const accountMongoRepository = new AccountMongoRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
