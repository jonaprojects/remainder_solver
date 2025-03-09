import ModularEquation from "./ModularEquation";
import ModularSystem from "./ModularSystem";

function testEquation() {
  let myEquation = new ModularEquation(35, 1, 4);
  let sol = myEquation.solve();
  console.log(sol);
}

function testSystem() {
  let system = new ModularSystem();
  system.add(new ModularEquation(1, 3, 4));
  system.add(new ModularEquation(1, 4, 5));
  system.add(new ModularEquation(1, 2, 7));

  let { solution, mod } = system.solve();
  console.log(`The solution is x = ${solution} (mod ${mod})`);
}
