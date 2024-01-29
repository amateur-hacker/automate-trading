import crypto from "crypto";

export const decryptData = (encryptedData: string): string => {
  const encryptionKey: Buffer = Buffer.from(
    "1da8bfafd3d543601acd1a44d1fedcdbaa0d6fb8b2dbba59f179936574fc288b",
    "hex"
  );
  const iv: Buffer = Buffer.from("30d322e34a1442886df9039995e0da84", "hex");

  const decipher: crypto.Decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    encryptionKey,
    iv
  );
  let decryptedData: string = decipher.update(encryptedData, "base64", "utf8");
  decryptedData += decipher.final("utf8");

  return decryptedData;
};

// const encryptedText: string =
//   "BOfEYnxLslfLkZ0EaXIQkWgSCQ4XwkWNQlRJ3OP7YbVFFWrqfDS+CaK7TsYecBINm05Zikujt84Oe/l+7mL5dhEg24jp/a90QwyoPcUfgR6sZmfcOmWbbBfklnzEeY3QRNRe5G9IgW0flanhoLVpo6WxRhvV0k6pU3nXtMNTlaGVrIgLOgyFHO3qdldfRFBKIzzw2kpX0haIZ2qNK8qg0Kmr9CMVMvqDmzztDyaa9J5rXy1ZkPyD7ZZAC5x7T1/J";

// const decryptedData: string = decryptData(encryptedText);
// console.log(`decryptData: ${decryptedData}`);
