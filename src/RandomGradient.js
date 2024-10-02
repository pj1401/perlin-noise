/**
 * @file The RandomGradient class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Gradient } from './Gradient.js'
import { Point } from './Point.js'

/**
 * Represents the gradient of a line.
 */
export class RandomGradient {
  /**
   * The randomised gradient.
   *
   * @type {Gradient}
   */
  #gradient

  /**
   * Initialises the object.
   *
   * @param {Point} point - The point on the grid.
   */
  constructor (point) {
    this.#gradient = this.randomiseGradient(point.x, point.y)
  }

  /**
   * Get the randomised gradient.
   *
   * @returns {Gradient} The randomised gradient.
   */
  get gradient () {
    return this.#gradient
  }

  /**
   * Returns the x-component.
   *
   * @returns {number} x - The x-component.
   */
  get x () {
    return this.#gradient.x
  }

  /**
   * Returns the y-component.
   *
   * @returns {number} y - The y-component.
   */
  get y () {
    return this.#gradient.y
  }

  /**
   * Randomises a gradient.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {Gradient} The randomised gradient.
   */
  randomiseGradient (x, y) {
    const angle = this.#random(x, y) * 2 * Math.PI

    return new Gradient(Math.cos(angle), Math.sin(angle))
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

  /**
   * Determines whether or not the passed argument is a number.
   *
   * @param {object} value - The value to be tested.
   * @throws {TypeError} The passed argument is not a number.
   */
  checkIfNumber (value) {
    if (Number.isNaN(value) || typeof value !== 'number') {
      throw new TypeError('The passed argument is not a number.')
    }
  }
}
