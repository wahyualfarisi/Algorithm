const arr = [1, 5,4,2,6,79,3,2,566,78,43,4,5,2,4,6,7];

const arrSort = arr.sort( (a, b) => a - b )

// console.log(arrSort)

const data = [
    {
        name: 'Wahyu',
        age: 25
    },
    {
        name: 'Isyana',
        age: 45
    },
    {
        name: 'Raisa',
        age: 18
    },
    {
        name: 'John',
        age: 90
    },
    {
        name: 'Jane',
        age: 31
    }
];

//sort asc value from age person data 
function sortAge(arr)
{
    return arr.sort((a,b) => a.age - b.age)
}



const sort1 = sortAge(data)
console.log(sort1)

