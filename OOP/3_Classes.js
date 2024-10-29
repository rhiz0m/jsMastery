// Classes basic

class Triangle {
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }
}

let firstTri = new Triangle() // Instantiation
firstTri.a = 3
firstTri.b = 4
console.log(firstTri.getArea()) // 6
console.log(firstTri.getHypotenuse()) // 5

console.log(firstTri)

let secondTri = new Triangle()
secondTri.a = 5
secondTri.b = 12
console.log(secondTri.getArea()) // 30
console.log(secondTri.getHypotenuse()) // 13

console.log(secondTri)

console.log(typeof secondTri) // object
console.log(secondTri instanceof Triangle)
/**
 *  Classes start with an Uppercase
 *
 */
