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
   * The dx-component.
   *
   * @type {number}
   */
  #dx

  /**
   * The dy-component.
   *
   * @type {number}
   */
  #dy

  /**
   * Initialises the object.
   *
   * @param {number} dx - The dx-component.
   * @param {number} dy - The dy-component.
   */
  constructor (dx, dy) {
    this.#dx = dx
    this.#dy = dy
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    return `[${this.#dx}, ${this.#dy}]`
  }
}
