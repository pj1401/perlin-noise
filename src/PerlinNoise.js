/**
 * @file The PerlinNoise class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Point } from './Point.js'
import { RandomGradient } from './RandomGradient.js'
import { Vector } from './Vector.js'

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
   * @type {[RandomGradient]}
   */
  #randomGradients = []

  /**
   * @type {[Vector]}
   */
  #vectors

  /**
   * @type {[number]}
   */
  #dotProducts = []

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
    this.findRandomGradients()
    this.findVectors()
    this.findDotProducts()
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

  /**
   * Create random gradients for each corner.
   */
  findRandomGradients () {
    for (const corner of this.#corners) {
      this.#randomGradients.push(new RandomGradient(corner))
    }
  }

  /**
   * Compute the vectors from the corners to (x, y).
   */
  findVectors () {
    const dx0 = this.#x - this.#corners[0].x
    const dy0 = this.#y - this.#corners[0].y
    const dx1 = this.#x - this.#corners[3].x
    const dy1 = this.#y - this.#corners[3].y

    const vector0 = new Vector(dx0, dy0)
    const vector1 = new Vector(dx1, dy0)
    const vector2 = new Vector(dx0, dy1)
    const vector3 = new Vector(dx1, dy1)

    this.#vectors = [vector0, vector1, vector2, vector3]
  }

  /**
   * Determine the dot products.
   */
  findDotProducts () {
    for (let i = 0; i < this.#randomGradients.length; i++) {
      this.#dotProducts.push(this.dotProduct(this.#randomGradients[i], this.#vectors[i]))
    }
  }

  /**
   * Softens the interpolations.
   *
   * @param {number} difference - The difference between points on the x- or y-axis.
   * @returns {number} The fade value.
   */
  fade (difference) {
    return difference * difference * difference * (difference * (difference * 6 - 15) + 10)
  }

  /**
   * Compute the dot product between the gradient and the vector.
   *
   * @param {RandomGradient} gradient - The gradient.
   * @param {Vector} vector - The vector.
   * @returns {number} - The dot product.
   */
  dotProduct (gradient, vector) {
    return gradient.x * vector.dx * gradient.y * vector.dy
  }
}
