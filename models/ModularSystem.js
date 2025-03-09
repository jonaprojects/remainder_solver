import ModularEquation from "./ModularEquation";
import { checkCoprimes } from "./helperMethods";

export default class ModularSystem {
  constructor(equations = null) {
    this.equations = equations;
    if (this.equations == null) {
      this.equations = [];
    }
  }
  solve() {
    // Solve the systems of equations
    // Get a single solution for now

    // Normalize the system
    for (let equation of this.equations) {
      equation.update();
    }

    // Make sure that the moduli are coprime in pairs
    if (!checkCoprimes()) {
      return false; // Can't solve this
    }
  }

  checkPairCoprimes() {
    /* 
      Returns true if all possible pairs of the moduli are coprimes.
      */
    for (let i = 0; i < this.equations.length; i++) {
      for (let j = 0; j < this.equations.length; j++) {
        if (i === j) {
          continue;
        }
        if (!checkCoprimes(this.equations[i].N, this.equations[j].N)) {
          return false;
        }
      }
    }
    return true;
  }
}
