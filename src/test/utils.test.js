import { timeSince } from '../utilities/utils';

describe("Utils test cases", () => {
    it('timeSince method test', () => {
        const date = new Date()
        expect(timeSince(date)).toEqual("0 seconds");
    });

})