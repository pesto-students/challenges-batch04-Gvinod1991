// write your own test cases
import { flipArgs } from './flipArgs'

describe("flipArgs", () => {
    test("flipArgs function should return function", () => {
        expect(typeof flipArgs()).toBe('function');
    });
    test("flipArgs should return a function with revered ordered argument invocation", () => {
        const foo = (a, b, c) => a - b + c;
        const flipped = flipArgs(foo);
        expect(flipped(8, 6, 2)).toBe(4);
    });
    test("flipArgs should return null if no arguments passed", () => {
        const foo = jest.fn()
        const flipped = flipArgs(foo);
        expect(flipped()).toBe(null);
    });
})
