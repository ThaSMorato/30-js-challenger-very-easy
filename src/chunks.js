export function createChunks(number) {
  return Array.from({ length: number })
    .map(() => "chunk")
    .join("-");
}

// export function createChunks(number) {
//   if (number === 0) {
//     return;
//   } else if (number === 1) {
//     return "chunk";
//   } else {
//     return "chunk-" + createChunks(number - 1);
//   }
// }
