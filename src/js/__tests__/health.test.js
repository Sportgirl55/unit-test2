import heroesSort from '../app';


test ('greatest health toBe', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  
  const sortedHeroes = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  const result = heroesSort(heroes);

  expect(result).toBe(sortedHeroes);
})
// toBe не работает - убедилась!!


test ('greatest health toEqual', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  
  const sortedHeroes = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];

  const result = heroesSort(heroes);

  expect(result).toEqual(sortedHeroes);
})

