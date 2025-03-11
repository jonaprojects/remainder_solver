import ModularEquation from "./ModularEquation.js";
import { checkCoprimes } from "./helperMethods.js";

export default class ModularSystem {
  constructor(equations = null) {
    this.equations = equations;
    if (this.equations == null) {
      this.equations = [];
    }
  }
  add(equation) {
    this.equations.push(equation);
  }

  insert(index, equation) {
    this.equations.splice(index, 0, equation);
  }

  remove(index) {
    this.equations.splice(index, 1);
  }

  clear() {
    this.equations = [];
  }

  solve() {
    // Solve the systems of equations
    // Get a single solution for now

    // Normalize the system
    for (let equation of this.equations) {
      equation.update();
    }

    // Make sure that the moduli are coprime in pairs
    if (!this.checkPairCoprimes()) {
      return false; // Can't solve this
    }

    // Now we need to get M1, M2, ... M_N
    let M_vector = [];
    let moduloMul = 1;
    for (let equation of this.equations) {
      moduloMul *= equation.N;
    }
    // M_i = (m1*m2*...*m_n)/m_i
    for (let equation of this.equations) {
      M_vector.push(moduloMul / equation.N);
    }

    // We need to find X_1,...X_n
    let X_vector = [];
    for (let i = 0; i < this.equations.length; i++) {
      let modularEquation = new ModularEquation(
        M_vector[i] % this.equations[i].N,
        1,
        this.equations[i].N
      );

      let solution = modularEquation.solve();
      X_vector.push(solution);
    }

    let sum = 0;
    for (let i = 0; i < this.equations.length; i++) {
      sum += M_vector[i] * X_vector[i] * this.equations[i].B;
    }

    sum %= moduloMul;

    return {
      solution: sum,
      mod: moduloMul,
    };
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
