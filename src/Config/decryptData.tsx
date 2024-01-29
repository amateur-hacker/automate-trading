import crypto from "crypto";

export const decryptData = (encryptedData: string): string => {
  const encryptionKey = Buffer.from(
    "dd5e30209b9855234730c3eeae318a39b37dac6181790b85c9d4770627d6c836",
    "hex",
  );
  const iv = Buffer.from("dd5e30209b9855234730c3eeae318a39", "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
  let decryptedData = decipher.update(encryptedData, "base64", "utf8");
  decryptedData += decipher.final("utf8");

  return decryptedData;
}


// const encryptedText: string =
//   "BOfEYnxLslfLkZ0EaXIQkWgSCQ4XwkWNQlRJ3OP7YbVFFWrqfDS+CaK7TsYecBINm05Zikujt84Oe/l+7mL5dhEg24jp/a90QwyoPcUfgR6sZmfcOmWbbBfklnzEeY3QRNRe5G9IgW0flanhoLVpo6WxRhvV0k6pU3nXtMNTlaGVrIgLOgyFHO3qdldfRFBKIzzw2kpX0haIZ2qNK8qg0Kmr9CMVMvqDmzztDyaa9J5rXy1ZkPyD7ZZAC5x7T1/J";

// const decryptedData: string = decryptData(encryptedText);
// console.log(`decryptData: ${decryptedData}`);
