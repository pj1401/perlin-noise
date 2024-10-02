/**
 * @file Tests for the Point.js file.
 * @module test/Point.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Point } from '../src/Point.js'

test('NaN in coordinates', () => {
  expect(() => new Point(NaN, 2)).toThrow(TypeError)
})

test('Non number in coordinates', () => {
  expect(() => new Point(1, 'number')).toThrow(TypeError)
  expect(() => new Point('4', 3)).toThrow(TypeError)
})
