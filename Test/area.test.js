const getArea = require('../area');

test('getArea([2,3]) should return 10', () => {
    expect(getArea([2,3])).toBe(10);
});

test('getArea([-1,3]) should return -1', () => {
    expect(getArea([-1,3])).toBe(-1);
});

test('getArea([0,0]) should return 0', () => {
    expect(getArea([0,0])).toBe(0);
});

test('getArea(3) should return -1', () => {
    expect(getArea(3)).toBe(-1);
});

test('getArea("ciao") should return -1', () => {
    expect(getArea("ciao")).toBe(-1);
});