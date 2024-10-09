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
    { gradient: new RandomGradient(new Point(0, 0)), expected: { x: 1, y: 0 } },
    { gradient: new RandomGradient(new Point(1, 2)), expected: { x: 0.101279206, y: 0.994858041 } },
    { gradient: new RandomGradient(new Point(2, 2)), expected: { x: 0.007886916, y: -0.999968898 } },
    { gradient: new RandomGradient(new Point(1, 3)), expected: { x: 0.937233865, y: -0.348701422 } },
    { gradient: new RandomGradient(new Point(2, 3)), expected: { x: -0.037835073, y: 0.999283997 } },
    { gradient: new RandomGradient(new Point(6, 4)), expected: { x: -0.722342956, y: 0.691534998 } },
    { gradient: new RandomGradient(new Point(10, 20)), expected: { x: -0.992802137, y: 0.119766091 } },
    { gradient: new RandomGradient(new Point(11, 21)), expected: { x: -0.821464307, y: 0.570259934 } },
    { gradient: new RandomGradient(new Point(100, 200)), expected: { x: -0.145267742, y: -0.989392381 } },
    { gradient: new RandomGradient(new Point(101, 201)), expected: { x: 0.263549536, y: -0.964645864 } }
  ]

  for (const randomGradient of randomGradients) {
    expect(randomGradient.gradient.x).toBeCloseTo(randomGradient.expected.x)
    expect(randomGradient.gradient.y).toBeCloseTo(randomGradient.expected.y)
  }
})

test('Generate random values', () => {
  const randomGradient = new RandomGradient(new Point(1, 2))

  const testValues = [
    { x: 1, y: 2, expected: 0.233853228964775 },
    { x: 5, y: 3, expected: 0.177478756372574 },
    { x: 10, y: 20, expected: 0.4808927688193 },
    { x: 100, y: 200, expected: 0.726797822735644 },
    { x: 0.5, y: 0.5, expected: 0.336138185735856 }
  ]

  for (const value of testValues) {
    expect(randomGradient.random(value.x, value.y)).toBeCloseTo(value.expected)
  }
})
