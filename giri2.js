var people = 
[
  {name: 'giri', age: 20},
  {name: 'vijay', age: 45}, 
  {name: 'John', age: 30}, 
  {name: 'Anitha', age: 19}, 
  {name: 'swathi', age: 25}
]
function youth(person) 
{
 return person.age > 20 && person.age < 30;
}
var firstYouth = people.find(youth);
console.log('First found youth:', firstYouth.name);