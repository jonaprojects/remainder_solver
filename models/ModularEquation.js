import { extendedGCD } from "./helperMethods.js";

export default class ModularEquation {
  // Represents an equation of the form:
  // ax = b (mod n)

  constructor(A, B, N) {
    this.A = A;
    this.B = B;
    this.N = N;
  }

  solve() {
    // We want to reach an equation of the form x = b (mod n)
    // If there's no solution, return null
    let { d, s, t } = extendedGCD(this.A, this.N);
    let b = this.B;
    // We know that the equation has a solution <=> d|b
    if (b % d != 0) {
      return null;
    }

    // For now, we only need the first solution
    let x0 = (b * s) / d;

    x0 = x0 % this.N;
    if (x0 < 0) {
      x0 += this.N;
    }

    return x0;
  }

  update() {
    // Update to the solved form
    // so now: x=x0 (mod n)
    let x0 = this.solve();

    if (x0 == null) {
      throw new Error("Can't solve this equation!");
    }
    this.A = 1;
    this.B = x0;
  }
}
