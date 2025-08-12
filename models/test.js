import ModularSystem from "./ModularSystem.js";
import ModularEquation from "./ModularEquation.js";

// Helper to create a modular equation x ≡ b mod n
function makeEq(b, n) {
  // Assuming ModularEquation(A, B, N) represents A*x ≡ B mod N, and A=1 for CRT
  return new ModularEquation(1, b, n);
}

function testCRT() {
  // Example: x ≡ 2 mod 3, x ≡ 3 mod 5, x ≡ 2 mod 7
  const system = new ModularSystem([makeEq(2, 3), makeEq(3, 5), makeEq(2, 7)]);
  const result = system.solve();
  if (!result) {
    console.error("System could not be solved");
    return;
  }
  const { solution, mod } = result;
  console.log(`x ≡ ${solution} mod ${mod}`);
  // Should print: x ≡ 23 mod 105

  // Verify
  if (
    solution % 3 === 2 &&
    solution % 5 === 3 &&
    solution % 7 === 2 &&
    mod === 105
  ) {
    console.log("Test passed!");
  } else {
    console.error("Test failed!");
  }
}

testCRT();
