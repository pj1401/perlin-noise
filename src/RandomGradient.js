/**
 * @file The RandomGradient class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Point } from './Point.js'
import { Vector } from './Vector.js'

/**
 * Represents the gradient of a line.
 */
export class RandomGradient extends Vector {
  /**
   * Initialises the object.
   *
   * @param {Point} point - The point on the grid.
   */
  constructor (point) {
    super(point.x, point.y)

    this.#randomiseGradient(point.x, point.y)
  }

  /**
   * Randomises a gradient.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  #randomiseGradient (x, y) {
    const angle = this.#random(x, y) * 2 * Math.PI

    this.x = Math.cos(angle)
    this.y = Math.sin(angle)
  }

  /**
   * Generates a random value between 0 and 1 based on the input coordinates x and y.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {number} A value between 0 and 1.
   */
  #random (x, y) {
    // Prime numbers are used to combine x and y.
    let seed = x * 374761393 + y * 668265263
    seed = (seed ^ (seed >> 13)) * 1274126177
    seed = (seed ^ (seed >> 16))

    // Convert to a value between 0 and 1.
    return (seed & 0x7fffffff) / 0x7fffffff
  }
}
