/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petName || !petName) {
    console.log('Missing information. Please provide a valid pet.')
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log('What an...interesting pet.')
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i].toUpperCase()}!`)
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  const obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === 'number') {
      obj.neither++
    } else if (str[i] === ' ') {
      obj.neither++
    } else if (str[i].toLowerCase() === str[i]) {
      obj.lowercase++
    } else if (str[i].toUpperCase() === str[i]) {
      obj.uppercase++
    } else {
      obj.neither++
    }
  }
  return obj

};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  let greedyGnomes = []

  for (let gnome of gnomes) {
    if (gnomes === 0) {
      return []
    }
    if (gnome.stolenDecorations.length > 1) {
      greedyGnomes.push(gnome.name)
    }
  }
  return greedyGnomes
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
