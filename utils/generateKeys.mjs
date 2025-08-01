// generateKeys.mjs
import { generateKeyPairSync } from "crypto";
import { exportJWK, exportPKCS8 } from "jose";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

const privatePem = await exportPKCS8(privateKey);
const jwk = await exportJWK(publicKey);

jwk.use = "sig";
jwk.alg = "RS256";
jwk.kid = "0";

const jwks = { keys: [jwk] };

console.log("JWT_PRIVATE_KEY=");
console.log(JSON.stringify(privatePem));
console.log("\nJWKS=");
console.log(JSON.stringify(jwks));



