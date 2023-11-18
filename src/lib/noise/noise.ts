export const NOISES = Object.freeze([
  "white" as const,
  "pink" as const,
  "brown" as const,
  "dark-brown" as const,
  "black" as const
]);

export type Noise = (typeof NOISES)[number];
