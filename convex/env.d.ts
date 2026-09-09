/** Convex exposes process.env without the rest of the Node runtime. */
declare const process: { env: Record<string, string | undefined> };
