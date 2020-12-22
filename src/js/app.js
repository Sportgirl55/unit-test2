// TODO: write your code here
// let heroes = [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ];

// const heroesSort = heroes.sort((a, b) => b.health - a.health);
// console.log(heroes);


export default function heroesSort(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}

// console.log(heroesSort(heroes));