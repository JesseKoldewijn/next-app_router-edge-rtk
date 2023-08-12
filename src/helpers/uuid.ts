import crypto from "node:crypto";

/**
 * @name uuidv4
 * @returns {string} uuid v4 string
 * @description Generates a random RFC 4122 version 4 UUID. The UUID is generated using a cryptographic pseudorandom number generator.
 * @example uuidv4(); // => '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
 */
export const uuidv4 = () => {
  return String(crypto.randomUUID());
};
