const { uniquePaths } = require('./Unique_Paths');
describe('Unique Paths', () => {
  test('it should return the correct number of paths', () => {
    expect(uniquePaths(2, 2)).toEqual(2);
    expect(uniquePaths(3, 4)).toEqual(10);
    expect(uniquePaths(10, 15)).toEqual(817190);
  });
});
