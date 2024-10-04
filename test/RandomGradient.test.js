/**
 * @file Tests for the Gradient.js file.
 * @module test/Gradient.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Point } from '../src/Point.js'
import { RandomGradient } from '../src/RandomGradient.js'

test('Generate random gradient', () => {
  const randomGradients = [
    new RandomGradient(new Point(1, 2)),
    new RandomGradient(new Point(2, 2)),
    new RandomGradient(new Point(1, 3)),
    new RandomGradient(new Point(2, 3))
  ]

  expect(randomGradients[0].x).toBeCloseTo(0.101279206)
  expect(randomGradients[0].y).toBeCloseTo(0.994858041)

  expect(randomGradients[1].x).toBeCloseTo(0.007886916)
  expect(randomGradients[1].y).toBeCloseTo(-0.999968898)

  expect(randomGradients[2].x).toBeCloseTo(0.937233865)
  expect(randomGradients[2].y).toBeCloseTo(-0.348701422)

  expect(randomGradients[3].x).toBeCloseTo(-0.037835073)
  expect(randomGradients[3].y).toBeCloseTo(0.999283997)
})
