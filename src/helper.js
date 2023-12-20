export default function getRandomElementsFromArray(arr, n) {
  const shuffledArray = [...arr].sort(() => 0.5 - Math.random());
  const resultArr = shuffledArray.slice(0, n);
  return resultArr;
}
