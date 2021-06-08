console.log('working')

const amountOfCoins = document.querySelector('#amountOfCoins')
const averageCost = document.querySelector('#averageCost')
const currentPrice = document.querySelector('#currentPrice')
const total = document.querySelector('.totals')
const calculate = document.querySelector('.calculate')
const reset = document.querySelector('.reset')

const totalAvgPriceSpan = document.querySelector('#totalAveragePrice')
const totalCurrentPriceSpan = document.querySelector('#totalCurrentPrice')
const currentProfitSpan = document.querySelector('#currentProfit')

let numberOfCoins = 0
let avgCost = 0
let currentCoinPrice = 0
let totalAvg = 0
let totalCurrent = 0

amountOfCoins.addEventListener('keyup', e => {
    numberOfCoins = e.target.value
})

averageCost.addEventListener('keyup', e => {
    avgCost = e.target.value
})

currentPrice.addEventListener('keyup', e => {
    currentCoinPrice = e.target.value
})

calculate.addEventListener('click', e => {
    e.preventDefault()
    total.style.display = 'flex'
    totalAvgPriceSpan.textContent = Math.floor(getTotalAvg(numberOfCoins, avgCost))
    totalCurrentPriceSpan.textContent = Math.floor(getTotalCurrentPrice(numberOfCoins, currentCoinPrice))
    currentProfitSpan.textContent = Math.floor(totalCurrent - totalAvg)
})

reset.addEventListener('click', e => {
    e.preventDefault()
    total.style.display = 'none'
    amountOfCoins.value = ' '
    currentPrice.value = ' '
    averageCost.value = ' '
})

const getTotalAvg = (numCoins, avgCost) => {
    let result = numCoins * avgCost
    totalAvg = result
    return result
}

const getTotalCurrentPrice = (numCoins, currentCoinValue) => {
    let result = numCoins * currentCoinValue
    totalCurrent = result
    return result
}
