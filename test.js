const prompt = require('prompt-sync')()
const validator = require('./')

const num = prompt("Enter any number to check: ")

console.log(`Is Thirteen/Fourteen: ${validator.isThirteenOrFourteen(num)}`)
console.log(`Is Thirteen: ${validator.isThirteen(num)}`)
console.log(`Is Fourteen: ${validator.isFourteen(num)}`)
console.log(`Is multiple of Thirteen/Fourteen: ${validator.addons.isMultipleOfThirteenOrFourteen(num)}`)
console.log(`Is SixtyNine: ${validator.addons.isSixtynine(num)}`)