// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

class LocalStorageMock {
  store: {
    [prop: string]: string
  }

  length: number

  constructor() {
    this.store = {}
    this.length = 0
  }

  clear() {
    this.store = {}
  }

  getItem(key: string) {
    return this.store[key]
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value)
    this.length += 1
  }

  removeItem(key: string) {
    delete this.store[key]
    this.length -= 1
  }

  key(key: number) {
    return this.store[key]
  }
}

global.localStorage = new LocalStorageMock()
