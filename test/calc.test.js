import test from "node:test";
import assert from "node:assert/strict";
import { multiply } from "../src/calc.js";

test("multiply multiplies two numbers", () => {
  assert.equal(multiply(3, 4), 12);
});
