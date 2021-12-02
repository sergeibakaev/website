import { add } from "./sum"

describe('sum tests', () => {
  test('Should return correct value', () => {
    expect(add(1, 3)).toBe(4)
  })
})