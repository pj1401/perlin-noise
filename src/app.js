/**
 * @file The starting point of the application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Hello } from './Hello.js'
import { Point } from './Point.js'

try {
  const hello = new Hello()

  console.log(hello.toString())

  const point0 = new Point(1, 2)

  console.log(`(${point0.x}, ${point0.y})`)
} catch (error) {
  console.error(error.message)
}
