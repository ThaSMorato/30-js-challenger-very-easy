export function calculateArithmeticAverage(...notes) {
  return notes.reduce((acc, note) => acc + note, 0) / notes.length;
}
