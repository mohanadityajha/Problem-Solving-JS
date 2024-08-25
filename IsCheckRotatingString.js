function areRotations(str1, str2) {
  // Check if lengths of both strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Concatenate str1 with itself
  let concatenated = str1 + str1;

  // Check if str2 is a substring of the concatenated string
  return concatenated.includes(str2);
}

// Example usage:
const str1 = "ABCD";
const str2 = "CDAB";
const result = areRotations(str1, str2);
console.log(`Are "${str1}" and "${str2}" rotations of each other? ${result}`);
