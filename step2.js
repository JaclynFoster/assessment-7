// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True
// if any two numbers in list sum to 0, and false otherwise.

// RUNTIME COMPLEXITY: O(n^2)
// SPACETIME COMPLEXITY: O(1)

const sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i]
    for (let j = 0; j < arr.length; j++) {
      let num2 = arr[j]
      if (num1 + num2 === 0) {
        return 'sumZero is: ' + true
      }
    }
  }
  return 'sumZero is: ' + false
}

console.log(sumZero([1, 2, 3]))

console.log('-------------------------------------------')

// 2) Unique Characters
// Write a function that takes in a single word, as a string.
// It should return True if that word contains only unique characters. Return False otherwise.

// RUNTIME COMPLEXITY: O(1)
// SPACE COMPLEXITY: O(n)

const uniqueChar = str => {
  const charSet = new Set(str)
  if (str.length === charSet.size) {
    return 'uniqueChar is: ' + true
  }
  return 'uniqueChar is: ' + false
}

console.log(uniqueChar('Moooonday'))

console.log('-------------------------------------------')

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once,
//  like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// RUNTIME COMPLEXITY: O(1)
// SPACE COMPLEXITY: O(n)

const pangram = str => {
  let newStr = str.replace(/[^a-z]/g, '')
  if (new Set(newStr).size === 26) {
    return 'pangram: ' + true
  }
  return 'pangram: ' + false
}

console.log(pangram('I like cats, but not mice'))

console.log('-------------------------------------------')

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length
// of the longest one.

// RUNTIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

const longestWord = str => {
  let longWord = str.split(' ').reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr
    } else {
      return acc
    }
  }, '')
  return 'longestWord: ' + longWord.length
}

console.log(longestWord('multiple words in this string'))
