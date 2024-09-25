/**
 * @file The starting point of the application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { Hello } from './Hello.js'

try {
  const hello = new Hello()

  console.log(hello.toString())
} catch (error) {
  console.error(error.message)
}
