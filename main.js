/**
 * Add two numbers
 */
export function add(a, b) {
  return a + b;
}

/**
 * Return random integer between min and max (inclusive)
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
