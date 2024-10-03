/**
 * @file Tests for the PerlinNoise.js file.
 * @module test/PerlinNoise.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { PerlinNoise } from '../src/PerlinNoise.js'

test('Perlin noise values', () => {
  const perlin0 = new PerlinNoise(1.3, 2.1)

  expect(perlin0.valueOf()).toBeCloseTo(0.093744)
})

test('Perlin noise values', () => {
  const perlin1 = new PerlinNoise(5.5, 3.7)

  expect(perlin1.valueOf()).toBeCloseTo(-0.177968)
})

test('Perlin noise values', () => {
  const perlin2 = new PerlinNoise(10.0, 20.0)

  expect(perlin2.valueOf()).toBeCloseTo(0)
})

test('Perlin noise values', () => {
  const perlin3 = new PerlinNoise(100.0, 200.0)

  expect(perlin3.valueOf()).toBeCloseTo(0)
})

test('Perlin noise values', () => {
  const perlin4 = new PerlinNoise(0.5, 0.5)
  expect(perlin4.valueOf()).toBeCloseTo(0.006776)
})
