export function extendedGCD(a, b) {
  let s = 0,
    old_s = 1;
  let t = 1,
    old_t = 0;
  let r = b,
    old_r = a;

  while (r !== 0) {
    let quotient = Math.floor(old_r / r);

    // Update r, s, and t
    [old_r, r] = [r, old_r - quotient * r];
    [old_s, s] = [s, old_s - quotient * s];
    [old_t, t] = [t, old_t - quotient * t];
  }

  // Now, old_r is the gcd, and old_s, old_t are the coefficients
  return { gcd: old_r, s: old_s, t: old_t };
}

export function gcd(a, b) {
  // Ensure that a is always greater than b
  while (b !== 0) {
    let remainder = a % b; // Calculate the remainder
    a = b; // Set a to b
    b = remainder; // Set b to the remainder
  }
  return a; // When b becomes 0, a is the GCD
}

export function checkCoprimes(a, b) {
  return gcd(a, b) === 1;
}
