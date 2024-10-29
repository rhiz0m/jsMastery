// Working with constructors

class Triangle {
  constructor(SideA, SideB) {
    ;(this.a = SideA), (this.b = SideB)
  }
  getArea() {
    return (this.a * this.b) / 2
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2)
  }

  sayHi() {
    return "HELLO FROM A TRIANGLE!!"
  }
}

let firstTri = new Triangle(5, 12)
console.log(firstTri)
console.log(firstTri.getArea())

let secondTri = new Triangle(3, 4)
console.log(secondTri)
console.log(secondTri.getArea())

/**
 *
 * Javascrip automatically calls the constructor
 *  when creating a new instance of the class!
 *
 * this.a this.b refers to the instance of the class, not the class itself.
 * That means all the individual created Triangles in this case.
 */
