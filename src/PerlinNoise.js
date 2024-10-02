/**
 * @file The PerlinNoise class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Point } from './Point.js'

/**
 * Represents 2D perlin noise.
 */
export class PerlinNoise {
  #x
  #y

  /**
   * @type {[Point]}
   */
  #corners

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor (x, y) {
    this.#x = x
    this.#y = y

    this.findGridPoints()
  }

  /**
   * Determine the corners.
   */
  findGridPoints () {
    const point0 = new Point(Math.floor(this.#x), Math.floor(this.#y))

    const point1 = new Point(point0.x + 1, point0.y)

    const point2 = new Point(point0.x, point0.y + 1)

    const point3 = new Point(point0.x + 1, point0.y + 1)

    this.#corners = [point0, point1, point2, point3]
  }
}
