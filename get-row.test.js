const getRow = require('./get-row.js');


describe('getRow', () => {
  it(`given a name, returns the row from the pokemon 2D array with that name in it`, () => {
    const row1 = ['unown','https://pokeapi.co/api/v2/pokemon/201/'];
    const row2 = ['wobbuffet','https://pokeapi.co/api/v2/pokemon/202/'];
    const row3 = ['granbull','https://pokeapi.co/api/v2/pokemon/210/'];
    const row4 = ['swampert','https://pokeapi.co/api/v2/pokemon/260/'];

    expect(getRow('unown')).toEqual(row1);
    expect(getRow('wobbuffet')).toEqual(row2);
    expect(getRow('granbull')).toEqual(row3);
    expect(getRow('swampert')).toEqual(row4);
  })

  it(`returns null if no pokemon exists within the data with that name`, () => {
    expect(getRow('colin')).toBe(null);
    expect(getRow('mesi')).toBe(null);
    expect(getRow('anthony')).toBe(null);
    expect(getRow('speed racer')).toBe(null);
    expect(getRow('sailor mercury')).toBe(null);
    expect(getRow('kira')).toBe(null);
  })
})
