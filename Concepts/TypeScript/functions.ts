// with generals params

function concatName (name: string, lastname: string): string {
    return `${name} ${lastname}`
}
console.log(concatName('Fredy', 'Cortés'))

// with optionals params

function gradesAverage (grade1: number, grade2: number, grade3 ?: number): number {
    if (!grade3) {
        grade3 = 0.0
        var n = 2
    }
    return (grade1 + grade2 + grade3) / (n || 3)
}
console.log(gradesAverage(3.4, 4.5))
console.log(gradesAverage(3.4, 4.5, 4.9))

// with defaults params

function add (n1: number = 0, n2: number = 0): number {
    return n1 + n2
}
console.log(add())
console.log(add(3))
console.log(add(5, 23))
