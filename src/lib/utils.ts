export function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Maps progress so it ramps 0->1 between `start` and `end`. */
export function ramp(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start));
}

/** Fades in between inStart/inEnd and (optionally) back out between outStart/outEnd. */
export function fadeInOut(
  progress: number,
  inStart: number,
  inEnd: number,
  outStart = 1,
  outEnd = 1.01
) {
  return Math.min(ramp(progress, inStart, inEnd), 1 - ramp(progress, outStart, outEnd));
}
