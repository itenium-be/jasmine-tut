import {Player} from './Player';

it('player name is set', () => {
  const p = new Player({name: 'Yoshimitsu', points: 15});
  expect(p.name).toBe('Yoshimitsu');
});
