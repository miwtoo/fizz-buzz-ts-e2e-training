import { FizzBuzz } from "../fizz-buzz";

describe('FizzBuzz', () => {
    it('should return 1', () => {
        //act
        const result = FizzBuzz(1);

        expect(result).toBe('1');
    });
});