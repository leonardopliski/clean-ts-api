import { makeDbLoadAccountByToken } from '../usecases/account/load-account-by-token'
import { AuthMiddleware } from '@/presentation/middlewares'
import { IMiddleware } from '@/presentation/protocols'

export const makeAuthMiddleware = (role?: string): IMiddleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
