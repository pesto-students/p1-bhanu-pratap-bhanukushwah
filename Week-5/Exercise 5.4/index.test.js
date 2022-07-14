const mathOperations = require('./index')

describe('Test Math Operations', () => {
    test('addition of 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3)
    })

    test('addition of -1 + 2 should return 1', () => {
        expect(mathOperations.sum(-1, 2)).toBe(1)
    })

    test('subtraction of 1 - 2 should return -1', () => {
        expect(mathOperations.diff(1, 2)).toBe(-1)
    })

    test('subtraction of -1 - 2 should return -3', () => {
        expect(mathOperations.diff(-1, 2)).toBe(-3)
    })

    test('multiplication of 1 * 2 should return 2', () => {
        expect(mathOperations.product(1, 2)).toBe(2)
    })

    test('multiplication of -1 * 2 should return -2', () => {
        expect(mathOperations.product(-1, 2)).toBe(-2)
    })
})