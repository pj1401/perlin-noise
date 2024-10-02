/**
 * @file The PerlinNoise class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

// import { Point } from './Point.js'

/**
 * Represents 2D perlin noise.
 */
export class PerlinNoise {
  #x
  #y

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor (x, y) {
    this.#x = x
    this.#y = y
  }

  /**
   * Determine coordinates.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  findGridPoints (x, y) {
    // const point0 = new Point(Math.floor(this.#x), Math.floor(this.#y))

    // TODO: Get x0 + 1 and y0 + 1.
    // const point1 = new Point()
  }
}
