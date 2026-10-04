import test from "node:test";
import assert from "node:assert/strict";
import { clamp } from "../src/calc.js";

test("clamp returns min for values below min", () => {
  assert.equal(clamp(-5, 0, 10), 0);
});

test("clamp returns max for values above max", () => {
  assert.equal(clamp(99, 0, 10), 10);
});

test("clamp returns value when within bounds", () => {
  assert.equal(clamp(7, 0, 10), 7);
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});
