const getUrl = require('./get-url.js');


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
