// ReCap OOP

const pet = {
    species: "dog",
    age: 2.5,
    name: "Elton",
    sayHi: function() {return "Barf, barf"}
}

console.log(pet.species)
console.log(pet["species"])

pet["favouriteFood"] = "meatballs"
pet.sayBye = function() { return "Woof, woof" }

pet[true] = "Jenny" // all keys gets stringified. 
console.log(pet.true)

console.log(pet)
console.log(pet.sayHi())
console.log(pet.sayBye())

/*
Notes

* Properties that don't exist always evaluate to undefined
* All keys gets stringifeid
* 

*/