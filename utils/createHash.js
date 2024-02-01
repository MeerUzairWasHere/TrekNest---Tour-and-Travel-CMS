import { createHash } from "crypto";

export const hashString = (string) => createHash("md5").update(string).digest("hex");

