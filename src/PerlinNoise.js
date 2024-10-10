/**
 * @file The PerlinNoise class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { GridComponent } from './GridComponent.js'
import { Point } from './Point.js'
import { RandomGradient } from './RandomGradient.js'
import { Vector } from './Vector.js'

/**
 * Represents 2D perlin noise.
 */
export class PerlinNoise extends GridComponent {
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
   * The perlin value.
   *
   * @type {number}
   */
  #perlinValue

  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor (x, y) {
    super(x, y)

    this.computePerlinNoise()
  }

  /**
   * Computes the perlin noise.
   */
  computePerlinNoise () {
    this.#findGridPoints()
    this.#createRandomGradients()
    this.#computeVectors()
    const dotProducts = this.#computeDotProducts()

    // The fade smoothens the interpolations.
    const fadeX = this.fade(this.#vectors[0].x)
    const fadeY = this.fade(this.#vectors[0].y)

    // Determine the interpolations on the x-axis.
    const interpolationsX = this.#interpolateAxis(dotProducts, fadeX)

    this.#perlinValue = this.interpolate(interpolationsX[0], interpolationsX[1], fadeY)
  }

  /**
   * Determine the corners.
   */
  #findGridPoints () {
    const point0 = new Point(Math.floor(this.x), Math.floor(this.y))

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
  #createRandomGradients () {
    this.#randomGradients = []
    for (const corner of Object.values(this.#corners)) {
      this.#randomGradients.push(new RandomGradient(corner))
    }
  }

  /**
   * Compute the vectors from the corners to (x, y).
   */
  #computeVectors () {
    const dx0 = this.x - this.#corners.point00.x
    const dy0 = this.y - this.#corners.point00.y
    const dx1 = this.x - this.#corners.point11.x
    const dy1 = this.y - this.#corners.point11.y

    this.#vectors = [
      new Vector(dx0, dy0),
      new Vector(dx1, dy0),
      new Vector(dx0, dy1),
      new Vector(dx1, dy1)
    ]
  }

  /**
   * Determine the dot products.
   *
   * @returns {[number]} The dot products.
   */
  #computeDotProducts () {
    const dotProducts = []
    for (let i = 0; i < this.#randomGradients.length; i++) {
      dotProducts.push(this.dotProduct(this.#randomGradients[i], this.#vectors[i]))
    }
    return dotProducts
  }

  /**
   * Determine the interpolations on an axis.
   *
   * @param {[number]} dotProducts - The dot products.
   * @param {number} fadeValue - The fade value to soften the interpolations.
   * @returns {[number]} The interpolated values on the axis.
   */
  #interpolateAxis (dotProducts, fadeValue) {
    const interpolations = []
    for (let i = 0; i <= dotProducts.length / 2; i += 2) {
      interpolations.push(this.interpolate(dotProducts[i], dotProducts[i + 1], fadeValue))
    }
    return interpolations
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
    return gradient.x * vector.x + gradient.y * vector.y
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
