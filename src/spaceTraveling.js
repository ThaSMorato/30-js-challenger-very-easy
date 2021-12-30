export function spaceTraveling(number) {
  const stringFromNumber = `${number}`;
  const result = stringFromNumber
    .split("")
    .map((strNumb) => `${Number(strNumb) ** 2}`)
    .join("");
  return Number(result);
}
