export default function sumFieldOfArray(arr, field) {
  let sum = 0;
  arr.map((el) => {
    sum += el[field];
    return null;
  });
  return sum;
}
