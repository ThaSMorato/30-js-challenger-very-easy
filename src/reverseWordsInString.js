export function reverseWordsInString(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}
