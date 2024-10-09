/**
 * @file Tests for the PerlinNoise.js file.
 * @module test/PerlinNoise.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Gradient } from '../src/Gradient.js'
import { PerlinNoise } from '../src/PerlinNoise.js'
import { Vector } from '../src/Vector.js'

test('Perlin noise values', () => {
  const perlinNoises = [
    { perlin: new PerlinNoise(1.3, 2.1), expected: 0.093744 },
    { perlin: new PerlinNoise(5.5, 3.7), expected: -0.177968 },
    { perlin: new PerlinNoise(10.0, 20.0), expected: 0 },
    { perlin: new PerlinNoise(100.0, 200.0), expected: 0 },
    { perlin: new PerlinNoise(0.5, 0.5), expected: 0.006776 }
  ]

  for (const perlinNoise of perlinNoises) {
    expect(perlinNoise.perlin.valueOf()).toBeCloseTo(perlinNoise.expected)
  }
})

test('Dot products', () => {
  const perlin = new PerlinNoise(1.3, 2.1)

  const dotProducts = [{
    gradient: new Gradient(0.101279205538, 0.994858041394),
    vector: new Vector(0.3, 0.1),
    expected: 0.1298695658008
  }, {
    gradient: new Gradient(0.007886915561, -0.999968897798),
    vector: new Vector(-0.7, 0.1),
    expected: -0.1055177306725
  }, {
    gradient: new Gradient(0.937233865382, -0.348701421821),
    vector: new Vector(-0.3, -0.9),
    expected: 0.0326611200243
  }, {
    gradient: new Gradient(-0.037835073065, 0.999283997293),
    vector: new Vector(-0.7, -0.9),
    expected: -0.8728710464182
  }, {
    gradient: new Gradient(-0.992802137105, 0.119766091022),
    vector: new Vector(0, 0),
    expected: 0
  }, {
    gradient: new Gradient(0.263549535693, -0.964645863639),
    vector: new Vector(-1, -1),
    expected: 0.701096327946
  }, {
    gradient: new Gradient(1, 0),
    vector: new Vector(0.5, 0.5),
    expected: 0.5
  }
  ]

  for (const dotPorduct of dotProducts) {
    expect(perlin.dotProduct(dotPorduct.gradient, dotPorduct.vector)).toBeCloseTo(dotPorduct.expected)
  }
})

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
