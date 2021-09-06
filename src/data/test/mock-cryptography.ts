import { IHasher } from '../protocols/cryptography/hasher'
import { IHashComparer } from '../protocols/cryptography/hash-comparer'
import { IEncrypter } from '../protocols/cryptography/encrypter'
import { IDecrypter } from '../protocols/cryptography/decrypter'
import faker from 'faker'

export class HasherSpy implements IHasher {
  digest = faker.datatype.uuid()
  plainText: string

  async hash (plainText: string): Promise<string> {
    this.plainText = plainText
    return await Promise.resolve(this.digest)
  }
}

export class DecrypterSpy implements IDecrypter {
  plainText = faker.internet.password()
  cipherText: string

  async decrypt (cipherText: string): Promise<string> {
    this.cipherText = cipherText
    return await Promise.resolve(this.plainText)
  }
}

export class EncrypterSpy implements IEncrypter {
  cipherText = faker.datatype.uuid()
  plainText: string

  async encrypt (plainText: string): Promise<string> {
    this.plainText = plainText
    return await Promise.resolve(this.cipherText)
  }
}

export class HashComparerSpy implements IHashComparer {
  plainText: string
  digest: string
  isValid = true

  async compare (plainText: string, digest: string): Promise<boolean> {
    this.plainText = plainText
    this.digest = digest
    return await Promise.resolve(this.isValid)
  }
}
