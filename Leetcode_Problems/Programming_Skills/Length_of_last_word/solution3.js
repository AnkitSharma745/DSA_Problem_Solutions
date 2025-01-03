function lengthOfLastWord(s) {
  let lastSpaceIndex = s.lastIndexOf(" "); // Find the index of the last space
  return s.substring(lastSpaceIndex + 1).length; // Return the length of the substring after the last space
}
