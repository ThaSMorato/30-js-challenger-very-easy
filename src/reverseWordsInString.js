export function reverseWordsInString(string) {
  const reverse = (str) => str.split("").reverse().join("");

  return string.toLowerCase().split(" ").map(reverse).join(" ");
}
