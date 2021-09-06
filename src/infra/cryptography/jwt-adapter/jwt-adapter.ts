import { IDecrypter } from '@/data/protocols/cryptography/decrypter'
import { IEncrypter } from '@/data/protocols/cryptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements IEncrypter, IDecrypter {
  constructor (private readonly secret: string) { }

  async encrypt (plainText: string): Promise<string> {
    const accessToken = await jwt.sign({ id: plainText }, this.secret)
    return accessToken
  }

  async decrypt (cipherText: string): Promise<string> {
    const plainText = await jwt.verify(cipherText, this.secret) as string
    return plainText
  }
}
