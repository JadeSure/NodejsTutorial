function sum(a, b) {
    return a + b
}

describe('sum function', () => {
    it("should return the correct sum of two number", () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
})