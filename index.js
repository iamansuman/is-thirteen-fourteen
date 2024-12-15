const isThirteen = (num) => (num === 13 || String(num).trim() === "13" || String(num).trim().toLowerCase() === "thirteen")
const isFourteen = (num) => (num === 14 || String(num).trim() === "14" || String(num).trim().toLowerCase() === "fourteen")
const isThirteenOrFourteen = (num) => (isThirteen(num) || isFourteen(num))

const addons = {
    isSixtynine: (num) => (num === 69 || String(num).trim() === "69" || String(num).toLowerCase().includes("sixtynine")),
    isMultipleOfThirteenOrFourteen: (num) => (Number(num) % 13 === 0 || Number(num) % 14 === 0)
}

module.exports = { isThirteenOrFourteen, isThirteen, isFourteen, addons }