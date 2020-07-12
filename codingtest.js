export default function solution(A, K) {
  if (!(A instanceof Array)) return console.error(`${A} is not an array`);
  if (!K) return A;
  const modK = Math.abs(K) % A.length;
  //  if K supplied is negative than rotate left;
  // if (K < 0) return [...A.slice(modK), ...A.slice(0, modK)]
  return [...A.slice(A.length - modK), ...A.slice(0, A.length - modK)];
}
