import test from 'unit.js';

import { multiply , add } from '../src/app.js';

describe('add', function() {
    it('add(4, 2) should be equal to 6', function() {
        let result = add(4, 2);
        test.number(result).is(6);
        result.should.be.equal(6);
    });

    it('add(4, 2) equal to 0', function() {
        let result = add(4, -4);
        test.number(result).is(0);
        result.should.be.equal(0);
    });

    it('add(4, 2) should be a negatif number', function() {
        let result = add(4, -6);
        test.number(result).is(-2);
        result.should.be.equal(-2);
    });
});


