/**
 * @file The Point class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a point on a grid.
 */
export class Point {
  /**
   * The x-coordinate.
   *
   * @type {number}
   */
  #x

  /**
   * The y-coordinate.
   *
   * @type {number}
   */
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
   * Returns the x-coordinate.
   *
   * @returns {number} x - The x-coordinate.
   */
  get x () {
    return this.#x
  }

  /**
   * Returns the y-coordinate.
   *
   * @returns {number} y - The y-coordinate.
   */
  get y () {
    return this.#y
  }
}
