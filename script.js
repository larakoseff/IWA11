// const order1Root = document.querySelector('[data-key="order1"]') 
// const order1Biscuits = document.querySelector('.biscuits .count')
// const order1Donuts = document.querySelector('.donuts .count')
// const order1Pancakes = document.querySelector('.pancakes .count')
// const order1Status = document.querySelector('.status')

// order1Biscuits.innerText = order1Biscuits.dataset.biscuits
// order1Donuts.innerText= order1Donuts.dataset.donuts
// order1Pancakes.innerText = order1Pancakes.dataset.pancakes
// order1Status.innerText= order1Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

// const order2Root = document.querySelector('[data-key="order2"]')
// const order2Biscuits = document.querySelector('.biscuits .count')
// const order2Donuts = document.querySelector('.donuts .count')
// const order2Pancakes = document.querySelector('.pancakes .count')
// const order2Status = document.querySelector('.status')

// order2Biscuits.innerText = order2Biscuits.dataset.biscuits
// order2Donuts.innerText = order2Donuts.dataset.donuts
// order2Pancakes.innerText= order2Pancakes.dataset.pancakes
// order2Status.innerText = order2Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

// const order3Root = document.querySelector('[data-key="order3"]')
// const order3Biscuits = document.querySelector('.biscuits .count')
// const order3Donuts = document.querySelector('.donuts .count')
// const order3Pancakes = document.querySelector('.pancakes .count')
// const order3Status = document.querySelector('.status')

// order3Biscuits.innerText = order3Biscuits.dataset.biscuits
// order3Donuts.innerText= order3Donuts.dataset.donuts
// order3Pancakes.innerText = order3Pancakes.dataset.pancakes
// order3Status.innerText = order3Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'


const root1 = document.querySelector('[data-key="order1"]') 
const biscuits1  = root1.querySelector('.biscuits .count')
const donuts1 = root1.querySelector('.donuts .count')
const pancakes1 = root1.querySelector('.pancakes .count')
const status1 = root1.querySelector('.status dd')

biscuits1.innerText = root1.dataset.biscuits
donuts1.innerText = root1.dataset.donuts
pancakes1.innerText = root1.dataset.pancakes
status1.innerText = root1.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const root2 = document.querySelector('[data-key="order2"]') 
const biscuits2  = root2.querySelector('.biscuits .count')
const donuts2 = root2.querySelector('.donuts .count')
const pancakes2 = root2.querySelector('.pancakes .count')
const status2 = root2.querySelector('.status dd')

biscuits2.innerText = root2.dataset.biscuits
donuts2.innerText = root2.dataset.donuts
pancakes2.innerText = root2.dataset.pancakes
status2.innerText = root2.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const root3 = document.querySelector('[data-key="order3"]') 
const biscuits3  = root3.querySelector('.biscuits .count')
const donuts3 = root3.querySelector('.donuts .count')
const pancakes3 = root3.querySelector('.pancakes .count')
const status3 = root3.querySelector('.status dd')

biscuits3.innerText = root3.dataset.biscuits
donuts3.innerText = root3.dataset.donuts
pancakes3.innerText = root3.dataset.pancakes
status3.innerText = root3.dataset.delivered === 'true' ? 'Delivered' : 'Pending'
