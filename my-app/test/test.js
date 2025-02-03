const { add, subtract } = require('../myMath');
const assert = require('assert');

describe('add', () => {
    it('should return 7 when adding 3 and 4', () => {
        const result = add(3, 4);
        assert.equal(result, 7, "are equal")
    })
});

describe('subtract', () => {
    it('should return 1 when subtracting 3 from 4', () => {
        const result = subtract(4, 3);
        assert.equal(result, 1, "are equal")
    })
});