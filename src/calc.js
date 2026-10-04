export function add(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
