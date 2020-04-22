let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
}

// this in the above code refers to the object context.

let users = [
    {name: 'Fidel', age: 21},
    {name: 'Hugo', age: 29},
    {name: 'Tuco', age: 31},
    {name: 'Badger', age: 25},
    {name: 'Pete', age: 23},
    {name: 'Viktor', age: 26},
    {name: 'Gus', age: 32},
]


console.log(users.filter(army.canJoin,army));