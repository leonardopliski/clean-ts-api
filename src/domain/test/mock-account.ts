import { TAccountModel } from '@/domain/models/account'
import { TAddAccountParams } from '@/domain/usecases/account/add-account'
import { TAuthenticationParams } from '@/domain/usecases/account/authentication'
import faker from 'faker'

export const mockAddAccountParams = (): TAddAccountParams => ({
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
