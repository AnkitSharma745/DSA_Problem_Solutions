function lengthOfLastWord(s: string): number {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
}
