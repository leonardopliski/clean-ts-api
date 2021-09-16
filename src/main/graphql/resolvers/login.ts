import { adaptResolver } from '@/main/adapters'
import { makeLoginController } from '@/main/factories/controllers/login/login/login-controller-factory'
import { makeSignUpController } from '@/main/factories/controllers/login/signup/signup-controller-factory'

export default {
  Query: {
    login: async (parent: any, args: any, context: any) => await adaptResolver(makeLoginController(), args, context)
  },

  Mutation: {
    signUp: async (parent: any, args: any, context: any) => await adaptResolver(makeSignUpController(), args, context)
  }
}
