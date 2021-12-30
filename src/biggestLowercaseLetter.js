export function biggestLowercaseLetter(string) {
  const aInAscii = "a".charCodeAt(0);
  const zInAscii = "z".charCodeAt(0);

  return string
    .split("")
    .filter((char) => char.charCodeAt(0) > aInAscii && char.charCodeAt(0) < zInAscii)
    .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))[0];
}
