import { getPlanets, getPlanetById } from '../index';

test('getPlanets', () => {
  expect(getPlanets).toBeDefined();
});

test('getPlanetById', () => {
  expect(getPlanetById(1)).toBeDefined();
});
