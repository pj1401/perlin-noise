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
    { gradient: new RandomGradient(new Point(1, 2)), expected: { x: 0.101279206, y: 0.994858041 } },
    { gradient: new RandomGradient(new Point(2, 2)), expected: { x: 0.007886916, y: -0.999968898 } },
    { gradient: new RandomGradient(new Point(1, 3)), expected: { x: 0.937233865, y: -0.348701422 } },
    { gradient: new RandomGradient(new Point(2, 3)), expected: { x: -0.037835073, y: 0.999283997 } }
  ]

  for (const randomGradient of randomGradients) {
    expect(randomGradient.gradient.x).toBeCloseTo(randomGradient.expected.x)
    expect(randomGradient.gradient.y).toBeCloseTo(randomGradient.expected.y)
  }
})
