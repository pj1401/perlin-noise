/**
 * @file Tests for the Gradient.js file.
 * @module test/Gradient.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Gradient } from '../src/Gradient.js'

test('Generate random deterministic number', () => {
  const gradient = new Gradient()
  expect(gradient.random(1, 2)).toBeCloseTo(0.2338532289647745)
})
