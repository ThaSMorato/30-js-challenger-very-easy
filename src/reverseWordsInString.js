export function reverseWordsInString(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((str) => str.split("").reduceRight((acc, char) => `${acc}${char}`, ""))
    .join(" ");
}
