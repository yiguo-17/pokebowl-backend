const {
  getRow,
  getUrl,
} = require('./main.js')


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

describe('getUrl', () => {
  it(`given a row, returns the url from it`, () => {
  const row1 = ['girafarig','https://pokeapi.co/api/v2/pokemon/203/'];
  const row2 = ['pineco','https://pokeapi.co/api/v2/pokemon/204/'];
  const row3 = ['forretress','https://pokeapi.co/api/v2/pokemon/205/'];
  const row4 = ['dunsparce','https://pokeapi.co/api/v2/pokemon/206/'];

  expect(getUrl(row1)).toBe('https://pokeapi.co/api/v2/pokemon/203/');
  expect(getUrl(row2)).toBe('https://pokeapi.co/api/v2/pokemon/204/');
  expect(getUrl(row3)).toBe('https://pokeapi.co/api/v2/pokemon/205/');
  expect(getUrl(row4)).toBe('https://pokeapi.co/api/v2/pokemon/206/');
  })

  it(`given null, returns null`, () => {
    expect(getUrl(null)).toBe(null);
  })
})
