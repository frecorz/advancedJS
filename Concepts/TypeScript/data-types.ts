// Boolean
let founded: boolean = true
founded = false

// Numbers
let myMass: number = 89.88
const gravityinEarth: number = 9.82
let myWeightinEarth = myMass * gravityinEarth

// Strings
const myName: string = 'Fredy Cortés'
let sayHello = `Hi, my name is ${myName}`

// Arrays
let names: string[] = []
names = ['Ricardo', 'José', 'Leonardo']
names.push('200')

let namesandNumbers: Array < string | number > = []
namesandNumbers.push('Diego')
namesandNumbers.push('Isabella')
namesandNumbers.push(20.2)

// Objects
let Person: object = {
    name: 'Fredy',
    lastname: 'Cortés',
    mass: 89.88
}

// Enum
enum Color {
    Blue = 'blue',
    Green = 'green',
    Gray = 'gray'
}
const myFavoriteColor: Color = Color.Blue
console.log(`My favorite color is ${myFavoriteColor}`)

// Any
let anySome: any = 'is String'
anySome = {
    name: 'any Name'
}
