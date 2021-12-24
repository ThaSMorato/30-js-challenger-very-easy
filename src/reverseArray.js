export function reverseArray(arr) {
  const result = [];

  for (let index = 0; index <= arr.length - 1; index++) {
    result[index] = arr[arr.length - 1 - index];
  }

  console.log(result);
  return result;
}
