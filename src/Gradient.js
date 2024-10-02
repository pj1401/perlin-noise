/**
 * @file The Gradient class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the gradient of a line.
 */
export class Gradient {
  /**
   * Randomises a gradient.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {Gradient} The randomised gradient.
   */
  randomiseGradient (x, y) {
    const angle = this.random(x, y) * 2 * Math.PI

    // TODO: Should return a gradient.
    return Math.cos(angle)
  }

  /**
   * Generates a random value between 0 and 1 based on the input coordinates x and y.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @returns {number} A value between 0 and 1.
   */
  random (x, y) {
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
