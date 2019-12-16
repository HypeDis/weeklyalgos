const { stairClimber } = require('./Stair_Climber');
describe('stair climber', () => {
  test('it returns the correct number of unique combinations', () => {
    expect(stairClimber(3)).toEqual(3);
    expect(stairClimber(5)).toEqual(8);
    expect(stairClimber(10)).toEqual(89);
    expect(stairClimber(35)).toEqual(14930352);
  });
});
