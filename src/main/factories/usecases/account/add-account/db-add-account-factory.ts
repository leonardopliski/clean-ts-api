import { DbAddAccount } from '@/data/usecases/account'
import { IAddAccount } from '@/domain/usecases/account'
import { AccountMongoRepository } from '@/infra/db/mongodb/account'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'

export const makeDbAddAccount = (): IAddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
