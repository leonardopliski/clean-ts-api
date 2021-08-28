import { IHasher } from '../protocols/cryptography/hasher'
import { IHashComparer } from '../protocols/cryptography/hash-comparer'
import { IEncrypter } from '../protocols/cryptography/encrypter'
import { IDecrypter } from '../protocols/cryptography/decrypter'

export const mockHasher = (): IHasher => {
  class HasherStub implements IHasher {
    async hash (value: string): Promise<string> {
      return await Promise.resolve('hashed_password')
    }
  }
  return new HasherStub()
}

export const mockDecrypter = (): IDecrypter => {
  class DecrypterStub implements IDecrypter {
    async decrypt (value: string): Promise<string> {
      return await Promise.resolve('any_token')
    }
  }
  const decrypterStub = new DecrypterStub()
  return decrypterStub
}

export const mockEncrypter = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    async encrypt (id: string): Promise<string> {
      return await Promise.resolve('any_token')
    }
  }
  return new EncrypterStub()
}

export const mockHashComparer = (): IHashComparer => {
  class HashComparerStub implements IHashComparer {
    async compare (value: string, hash: string): Promise<boolean> {
      return await Promise.resolve(true)
    }
  }
  return new HashComparerStub()
}
