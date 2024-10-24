/**
 * @file Tests for the PerlinNoise class.
 * @module test/PerlinNoise.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.1.0
 */

import PerlinNoise from '../index.js'

/**
 * Represents a test case for perlin noise values.
 */
class PerlinNoiseTestCase {
  /**
   * Initialises the object.
   *
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @param {number} expected - The expected noise value.
   */
  constructor (x, y, expected) {
    this.x = x
    this.y = y
    this.expected = expected
  }

  /**
   * Run the test case.
   *
   * @param {PerlinNoise} perlin - The PerlinNoise object.
   */
  runTest (perlin) {
    const actual = perlin.generatePerlinNoise(this.x, this.y)
    expect(actual).toBeCloseTo(this.expected)
  }
}

describe('Perlin noise values', () => {
  test('Perlin noise with undefined seed', () => {
    const perlin = new PerlinNoise()
    const testCases = [
      new PerlinNoiseTestCase(1.3, 2.1, 0.093744),
      new PerlinNoiseTestCase(5.5, 3.7, -0.177968),
      new PerlinNoiseTestCase(10.0, 20.0, 0),
      new PerlinNoiseTestCase(100.0, 200.0, 0),
      new PerlinNoiseTestCase(0, 0.5, -0.056895),
      new PerlinNoiseTestCase(0.1, 0.5, -0.05546),
      new PerlinNoiseTestCase(0.2, 0.5, -0.051994),
      new PerlinNoiseTestCase(0.3, 0.5, -0.042475),
      new PerlinNoiseTestCase(0.4, 0.5, -0.023314),
      new PerlinNoiseTestCase(0.5, 0.5, 0.006776),
      new PerlinNoiseTestCase(0.5, 0.6, -0.00591),
      new PerlinNoiseTestCase(0.5, 0.7, -0.028887),
      new PerlinNoiseTestCase(0.5, 0.8, -0.059371),
      new PerlinNoiseTestCase(0.5, 0.9, -0.092953),
      new PerlinNoiseTestCase(0.5, 1, -0.126147)
    ]

    for (const testCase of testCases) {
      testCase.runTest(perlin)
    }
  })

  test('Using a seed', () => {
    // TODO: Should there be a different class for these test cases?
    const perlin = new PerlinNoise(4783)
    const testCases = [
      { perlin: new PerlinNoise(1.3, 2.1, 4783), expected: 0.028378 },
      { perlin: new PerlinNoise(5.5, 3.7, 4783), expected: -0.223627 },
      { perlin: new PerlinNoise(10, 20, 4783), expected: 0 },
      { perlin: new PerlinNoise(1.3, 2.1, 6829), expected: 0.206701 },
      { perlin: new PerlinNoise(5.5, 3.7, 6829), expected: 0.169030 },
      { perlin: new PerlinNoise(10, 20, 6829), expected: 0 },
      { perlin: new PerlinNoise(1.3, 2.1, 7001), expected: -0.166117 },
      { perlin: new PerlinNoise(5.5, 3.7, 7001), expected: 0.183346 },
      { perlin: new PerlinNoise(10, 20, 7001), expected: 0 },
      { perlin: new PerlinNoise(0, 0.5, 24815821), expected: -0.3184 },
      { perlin: new PerlinNoise(0.1, 0.5, 24815821), expected: -0.391194 },
      { perlin: new PerlinNoise(0.2, 0.5, 24815821), expected: -0.442847 },
      { perlin: new PerlinNoise(0.3, 0.5, 24815821), expected: -0.45581 },
      { perlin: new PerlinNoise(0.4, 0.5, 24815821), expected: -0.421792 },
      { perlin: new PerlinNoise(0.5, 0.5, 24815821), expected: -0.344707 },
      { perlin: new PerlinNoise(0.5, 0.6, 24815821), expected: -0.350501 },
      { perlin: new PerlinNoise(0.5, 0.7, 24815821), expected: -0.325892 },
      { perlin: new PerlinNoise(0.5, 0.8, 24815821), expected: -0.272131 },
      { perlin: new PerlinNoise(0.5, 0.9, 24815821), expected: -0.197691 },
      { perlin: new PerlinNoise(0.5, 1, 24815821), expected: -0.114196 }
    ]

    for (const testCase of testCases) {
      testCase.runTest(perlin)
    }
  })
})

test('Changing coordinates', () => {
  const perlin = new PerlinNoise()
  perlin.generatePerlinNoise(1.3, 2.1)
  expect(perlin.valueOf()).toBeCloseTo(0.093744)

  perlin.generatePerlinNoise(3.5, 2.1)

  expect(perlin.generatePerlinNoise(3.5, 2.1)).toBeCloseTo(0.22739)
})

test('NaN in coordinates', () => {
  const perlin = new PerlinNoise()
  expect(() => perlin.generatePerlinNoise(NaN, 2)).toThrow(TypeError)
})

test('Non number in coordinates', () => {
  const perlin = new PerlinNoise()
  expect(() => perlin.generatePerlinNoise(1, 'number')).toThrow(TypeError)
  expect(() => perlin.generatePerlinNoise('4', 3)).toThrow(TypeError)
})

test('Changing coordinates to non number', () => {
  const perlin = new PerlinNoise()
  expect(perlin.generatePerlinNoise(1.3, 2.1)).toBeCloseTo(0.093744)

  expect(() => { perlin.generatePerlinNoise('1.3', 2.1) }).toThrow(TypeError)

  expect(perlin.valueOf()).toBeCloseTo(0.093744)
})

test('Setting seed to non number', () => {
  expect(() => new PerlinNoise('4783')).toThrow(TypeError)
  expect(() => new PerlinNoise('number')).toThrow(TypeError)
  expect(() => new PerlinNoise(NaN)).toThrow(TypeError)
})

/*
test('Fade', () => {
  const perlin = new PerlinNoise(1.3, 2.1)

  const fadeValues = [
    { difference: 0, expected: 0 },
    { difference: 0.1, expected: 0.00856 },
    { difference: 0.3, expected: 0.16308 },
    { difference: 0.5, expected: 0.5 },
    { difference: 0.7, expected: 0.836912 }
  ]

  for (const fadeValue of fadeValues) {
    expect(perlin.fade(fadeValue.difference)).toBeCloseTo(fadeValue.expected)
  }
})
*/

/*
test('Interpolation', () => {
  const perlin = new PerlinNoise(1.3, 2.1)

  const testValues = [
    {
      a: 0.129869565800774,
      b: -0.105517730672436,
      fade: 0.16308,
      expected: 0.091482605491923
    }, {
      a: 0.595001439253961,
      b: -0.87287104641861,
      fade: 0.16308,
      expected: 0.355620794290478
    }, {
      a: 0.84860770827331,
      b: -0.830807742805546,
      fade: 0.5,
      expected: 0.008899982733882
    }, {
      a: 0,
      b: -0.762921343630262,
      fade: 0.5,
      expected: -0.381460671815131
    },
    {
      a: 0.0088999827338817,
      b: 0,
      fade: 0.83692,
      expected: 0.001451409184241
    }, {
      a: 0.124762150584332,
      b: 0.701096327945958,
      fade: 0,
      expected: 0.124762150584332
    }, { a: 0.5, b: -0.5, fade: 0.5, expected: 0 },
    { a: 0.5, b: 0.5, fade: 0.5, expected: 0.5 }
  ]

  for (const value of testValues) {
    expect(perlin.interpolate(value.a, value.b, value.fade)).toBeCloseTo(value.expected)
  }
})
*/
