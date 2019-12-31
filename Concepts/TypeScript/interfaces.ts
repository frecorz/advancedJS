const PI = 3.1416

enum Color {
    red = 'Red'
}

interface Rectangle {
    width: number,
    height: number,
    color?: Color
}

interface Circle {
    radio: number,
    color?: Color
}

let rect: Rectangle = {
    width: 8,
    height: 3
}

let circle: Circle = {
    radio: 4,
    color: Color.red
}

function areaRectangle (r: Rectangle) {
    return r.height * r.width
}

function areaCircle (radio: number) {
    return 2 * PI * radio
}

const areaRec = areaRectangle(rect)
console.log(`Area of rectangle is ${areaRec}`)

const areaCir = areaCircle(circle.radio)
console.log(`Area of circle is ${areaCir}`)

rect.toString = function () {
    return this.color ? `This rectangle is of ${this.color} color` : `This rectangle hasn't color`
}

circle.toString = function () {
    return this.color ? `This circle is of ${this.color} color` : `This circle hasn't color`
}

console.log(rect.toString())
console.log(circle.toString())
