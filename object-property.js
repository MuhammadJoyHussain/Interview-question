const students = [
    {id: 21, name: 'khabib Nurmegamedov'},
    {id: 31, name: 'McGregor'},
    {id: 41, name: 'Angelina Jowly'},
    {id: 71, name: 'tom cruise'}

];
 

const names = students.map( s=> s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40)
console.log(biggerOne)