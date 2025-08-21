function getGrade(score) {
  if (score === 100) {
    return 'A++'
  } else if (score <= 99 && score >= 90) {
    return 'A'
  } else if (score <= 89 && score >= 80) {
    return 'B'
  } else if (score <= 79 && score >= 70) {
    return 'C'
  } else if (score <= 69 && score >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(96))
console.log(getGrade(82))
console.log(getGrade(56))
