import {Player} from './Player';

it('playerSpec is true', () => {
  const p = new Player({name: 'Hero', points: 15});
  expect(p.name).toBe('Hero');
});
