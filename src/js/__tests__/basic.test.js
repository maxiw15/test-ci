import health from "../basic";
import sortHeroes from "../app";

test('should healty', () => {
  const result = health({name: 'Маг', health: 90});
  expect(result).toBe('healthy');
});

test('should wounded', () => {
  const result = health({name: 'Маг', health: 35});
  expect(result).toBe('wounded');
});

test('should critical', () => {
  const result = health({name: 'Маг', health: 5});
  expect(result).toBe('critical');
});

test('sort heroes', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroes(heroes)).toEqual(sortedHeroes);
});

