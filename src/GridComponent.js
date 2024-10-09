/**
 * @file The GridComponent class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a component on a grid.
 */
export class GridComponent {
  /**
   * The x-component.
   *
   * @type {number}
   */
  #x

  /**
   * The y-component.
   *
   * @type {number}
   */
  #y

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-component.
   * @param {number} y - The y-component.
   */
  constructor (x, y) {
    if (this.constructor === GridComponent) {
      throw new Error('Can\'t instantiate abstract class.')
    }
    this.x = x
    this.y = y
  }

  /**
   * Returns the x-component.
   *
   * @returns {number} x - The x-component.
   */
  get x () {
    return this.#x
  }

  /**
   * Sets the x-component.
   *
   * @param {number} x - The x-component.
   */
  set x (x) {
    this.#checkIfNumber(x)
    this.#x = x
  }

  /**
   * Returns the y-component.
   *
   * @returns {number} y - The y-component.
   */
  get y () {
    return this.#y
  }

  /**
   * Sets the y-component.
   *
   * @param {number} y - The y-component.
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
}
