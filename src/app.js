/**
 * @file The starting point of the application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RandomGradient } from './RandomGradient.js'
import { Point } from './Point.js'
import { PerlinNoise } from './PerlinNoise.js'

try {
  const point0 = new Point(1, 2)

  const randomGradient = new RandomGradient(1, 2)
  console.log(`${randomGradient.gradient}`)
  console.log(randomGradient.x)

  console.log(`${point0}`)

  const perlin0 = new PerlinNoise(1.3, 2.1)

  console.log()
  const perlin1 = new PerlinNoise(10.0, 20.0)

  console.log(perlin0.valueOf())
  console.log(perlin1.valueOf())
} catch (error) {
  console.error(error.message)
}
