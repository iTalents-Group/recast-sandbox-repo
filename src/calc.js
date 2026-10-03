export function add(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function clamp(value, min, max) {
  if (value < min) return max;
  if (value > max) return min;
  return value;
}
