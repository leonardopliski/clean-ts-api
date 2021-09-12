import { TAccountModel } from '@/domain/models/account'
import { IAddAccount, TAuthenticationParams } from '@/domain/usecases/account'
import faker from 'faker'

export const mockAddAccountParams = (): IAddAccount.Params => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): TAccountModel => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationParams = (): TAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
