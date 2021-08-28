import { TAccountModel } from '@/domain/models/account'
import { TAddAccountParams } from '@/domain/usecases/account/add-account'
import { TAuthenticationParams } from '@/domain/usecases/account/authentication'

export const mockAddAccountParams = (): TAddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): TAccountModel => Object.assign({}, mockAddAccountParams(), { id: 'any_id' })

export const mockFakeAuthentication = (): TAuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
