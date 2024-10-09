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
    this.x = x
    this.y = y
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
   * Sets the x-coordinate.
   *
   * @param {number} x - The x-coordinate.
   */
  set x (x) {
    this.#checkIfNumber(x)
    this.#x = x
  }

  /**
   * Returns the y-coordinate.
   *
   * @returns {number} y - The y-coordinate.
   */
  get y () {
    return this.#y
  }

  /**
   * Sets the y-coordinate.
   *
   * @param {number} y - The y-coordinate.
   */
  set y (y) {
    this.#checkIfNumber(y)
    this.#y = y
  }

  /**
   * Determines whether or not the passed argument is a number.
   *
   * @param {object} value - The value to be tested.
   * @throws {TypeError} The passed argument is not a number.
   */
  #checkIfNumber (value) {
    if (Number.isNaN(value) || typeof value !== 'number') {
      throw new TypeError('The passed argument is not a number.')
    }
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    return `(${this.x}, ${this.y})`
  }
}
