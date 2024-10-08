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

test('Dot products', () => {
  const perlin0 = new PerlinNoise(1.3, 2.1)

  const gradients = [
    { x: 0.101279205538, y: 0.994858041394 },
    { x: 0.007886915561, y: -0.999968897798 },
    { x: 0.937233865382, y: -0.348701421821 },
    { x: -0.037835073065, y: 0.999283997293 },
    { x: -0.992802137105, y: 0.119766091022 },
    { x: 0.263549535693, y: -0.964645863639 },
    { x: 1, y: 0 }
  ]

  const vectors = [
    { dx: 0.3, dy: 0.1 },
    { dx: -0.7, dy: 0.1 },
    { dx: -0.3, dy: -0.9 },
    { dx: -0.7, dy: -0.9 },
    { dx: 0, dy: 0 },
    { dx: -1, dy: -1 },
    { dx: 0.5, dy: 0.5 }
  ]

  const expectedValues = [
    0.1298695658008,
    -0.1055177306725,
    0.032661120024299994,
    -0.8728710464182,
    0,
    0.701096327946,
    0.5
  ]

  for (let i = 0; i < gradients.length; i++) {
    expect(perlin0.dotProduct(gradients[i], vectors[i])).toBeCloseTo(expectedValues[i])
  }
})

test('Fade', () => {
  const perlin0 = new PerlinNoise(1.3, 2.1)

  const fadeValues = [
    { difference: 0, expected: 0 },
    { difference: 0.1, expected: 0.00856 },
    { difference: 0.3, expected: 0.16308 },
    { difference: 0.5, expected: 0.5 },
    { difference: 0.7, expected: 0.836912 }
  ]

  for (const fadeValue of fadeValues) {
    expect(perlin0.fade(fadeValue.difference)).toBeCloseTo(fadeValue.expected)
  }
})
