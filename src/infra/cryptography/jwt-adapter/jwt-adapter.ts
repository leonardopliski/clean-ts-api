import jwt from 'jsonwebtoken'
import { IDecrypter } from '../../../data/protocols/cryptography/decrypter'
import { IEncrypter } from '../../../data/protocols/cryptography/encrypter'

export class JwtAdapter implements IEncrypter, IDecrypter {
  constructor (private readonly secret: string) { }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }

  async decrypt (token: string): Promise<string> {
    const value = await jwt.verify(token, this.secret) as string
    return value
  }
}
