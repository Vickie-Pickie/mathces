import sortHealthBar from '../app';

const result = [
  {
    name: 'маг',
    health: 100,
  },
  {
    name: 'лучник',
    health: 80,
  },
  {
    name: 'мечник',
    health: 10,
  },
];

test.each([
  [
    [
      {
        name: 'мечник',
        health: 10,
      },
      {
        name: 'лучник',
        health: 80,
      },
      {
        name: 'маг',
        health: 100,
      },
    ], result,
  ],
  [
    [
      {
        name: 'лучник',
        health: 80,
      },
      {
        name: 'мечник',
        health: 10,
      },
      {
        name: 'маг',
        health: 100,
      },
    ], result,
  ],
  [
    [
      {
        name: 'маг',
        health: 100,
      },
      {
        name: 'лучник',
        health: 80,
      },
      {
        name: 'мечник',
        health: 10,
      },
    ], result,
  ],
])('Список персонажей: %o сортируется по убыванию здоровья: %o', (heroes, expected) => {
  const received = sortHealthBar(heroes);
  expect(received).toEqual(expected);
});
