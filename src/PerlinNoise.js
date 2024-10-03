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
   * @type {object}
   */
  #corners

  /**
   * @type {[RandomGradient]}
   */
  #randomGradients

  /**
   * @type {[Vector]}
   */
  #vectors

  /**
   * @type {[number]}
   */
  #dotProducts = []

  #perlinValue

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor (x, y) {
    this.#x = x
    this.#y = y

    this.computePerlinNoise()
  }

  /**
   * Computes the perlin noise.
   */
  computePerlinNoise () {
    this.findGridPoints()
    this.findRandomGradients()
    this.findVectors()
    this.findDotProducts()

    // The fade smoothens the interpolations.
    const fadeX = this.fade(this.#vectors[0].dx)
    const fadeY = this.fade(this.#vectors[0].dy)

    // Determine the interpolations on the x-axis.
    const interpolationX0 = this.interpolate(this.#dotProducts[0], this.#dotProducts[1], fadeX)
    const interpolationX1 = this.interpolate(this.#dotProducts[2], this.#dotProducts[3], fadeX)

    this.#perlinValue = this.interpolate(interpolationX0, interpolationX1, fadeY)
  }

  /**
   * Determine the corners.
   */
  findGridPoints () {
    const point0 = new Point(Math.floor(this.#x), Math.floor(this.#y))

    this.#corners = {
      point00: point0,
      point10: new Point(point0.x + 1, point0.y),
      point01: new Point(point0.x, point0.y + 1),
      point11: new Point(point0.x + 1, point0.y + 1)
    }
  }

  /**
   * Create random gradients for each corner.
   */
  findRandomGradients () {
    this.#randomGradients = []
    for (const corner of Object.values(this.#corners)) {
      this.#randomGradients.push(new RandomGradient(corner))
    }
  }

  /**
   * Compute the vectors from the corners to (x, y).
   */
  findVectors () {
    const dx0 = this.#x - this.#corners.point00.x
    const dy0 = this.#y - this.#corners.point00.y
    const dx1 = this.#x - this.#corners.point11.x
    const dy1 = this.#y - this.#corners.point11.y

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
   * Interpolate between two values.
   *
   * @param {number} dotProdA - Dot product.
   * @param {number} dotProdB - Dot product.
   * @param {number} fade - The fade value.
   * @returns {number} The interpolation.
   */
  interpolate (dotProdA, dotProdB, fade) {
    return dotProdA + fade * (dotProdB - dotProdA)
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
    return gradient.x * vector.dx + gradient.y * vector.dy
  }

  /**
   * Returns the primitive value of the specified object.
   *
   * @returns {number} The primitive value of the specified object.
   */
  valueOf () {
    return this.#perlinValue
  }
}
