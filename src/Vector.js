/**
 * @file The Vecor class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a vector.
 */
export class Vector {
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
    this.#x = x
    this.#y = y
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
    this.#y = y
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    return `[${this.#x}, ${this.#y}]`
  }
}
