/**
 * @file Tests for the Gradient.js file.
 * @module test/Gradient.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RandomGradient } from '../src/RandomGradient.js'

test('Generate random gradient', () => {
  const randomGradient = new RandomGradient(1, 2)
  expect(`${randomGradient.gradient}`).toBe('[0.10127920553803356, 0.9948580413936376]')
})
